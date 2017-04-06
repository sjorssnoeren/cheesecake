const request = require('request-promise');

const Boom = require('boom');

// Parse JSON response and wrap error with Boom if occured
//
// Note: StatusCake does not handle HTTP statusCodes very well, so if the
// key `Error` exists, it's safe to assume an error occured
const statuscakeHandler = (result) => {
  const json = JSON.parse(result);

  if (json.Error != null) {
    throw Boom.serverUnavailable(json.Error);
  }
  return json;
};

/**
 * Find all tests using the StatusCake API
 */
const find = () => {
  return request.get('https://app.statuscake.com/API/Tests', {
    qs: {
      // Provided Username and API should be included as Environment Variable,
      // either use a .env file or set your variables natively
      Username: process.env.STATUSCAKE_USERNAME,
      API: process.env.STATUSCAKE_ACCESS_TOKEN,
    },
  }).then(statuscakeHandler);
};

module.exports = {
  find,
};
