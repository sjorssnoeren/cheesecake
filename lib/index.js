const express = require('express');
const Boom = require('boom');

// Use .env files to inject environment variables for local testing
require('dotenv').config();

const testsService = require('./statuscake/tests');

const app = express();
app.set('view engine', 'hbs');
app.use(express.static('public'));

// Setup home route, displaying the status page
app.get('/', (req, res, next) => {
  testsService.find().then((tests) => {
    const testViewModels = (models) => {
      return models.map((test) => {
        const classNameWithStatus = (status) => {
          if (status === 'Up') {
            return 'tests__badge--good';
          }
          return 'tests__badge--bad';
        };

        return {
          name: test.WebsiteName,
          status: test.Status,
          statusClassName: classNameWithStatus(test.Status),
        };
      });
    };

    const numberOfDowns = (models) => {
      return models.reduce((result, test) => {
        if (test.Status !== 'Up') {
          return result + 1;
        }
        return result;
      }, 0);
    };

    const statusViewModel = (models) => {
      const downs = numberOfDowns(models);

      if (downs > 1) {
        return {
          message: `We're experiencing ${downs} outages`,
          className: 'notification--bad',
        };
      }

      if (downs > 0) {
        return {
          message: 'We\'re experiencing 1 outage',
          className: 'notification--bad',
        };
      }

      return {
        message: 'All sites are up and running',
        className: 'notification--good',
      };
    };

    res.render('index', {
      tests: testViewModels(tests),
      status: statusViewModel(tests),
      title: process.env.SITE_TITLE,
    });
  }).catch(next);
});

// Try to parse Boom errors, otherwise throw Boom.badImplementation error to not
// expose any original (private) errors
/* eslint-disable no-unused-vars */
app.use((err, req, res, next) => {
  console.error(err);

  const replyBoom = (error) => {
    res.json(error.output.payload).status(error.statusCode);
  };

  if (err.isBoom === true) {
    return replyBoom(err);
  }
  return replyBoom(Boom.badImplementation());
});

// Launch server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Starting Cheesecake server on port: ${port}`);
});
