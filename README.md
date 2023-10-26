Cheesecake
==========

Beautiful Instant Statuspages for Statuscake

![Preview](https://github.com/sjorssnoeren/cheesecake/raw/master/.github/preview.png)

## ⚙️ Installation
For the deployment of this status page you'll need a server space compatible Node.js and ES6.  
(All versions of Node.js later than 6.0, of 5.x versions with the ES6 standard enabled)

You can bypass this process by directly deploying your Cheesecake to Heroku.  
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

Installation is quite easy, after you've deployed the project, set these environment variables:

```

// Obtained using the control panel of StatusCake
STATUSCAKE_ACCESS_TOKEN=3123423432	  

// As expected, title of your account or site
SITE_TITLE=Your Site Title
```
You can either use a dotenv file or set those variables natively. If you have not correctly configured the variables, no worries. You will receive a 503 saying that you've misconfigured your installation.


## 🛠 Usage
It is also possible to run Cheesecake locally. To start the app just run `npm install` once to download all dependencies and `npm start` to launch Cheesecake.

## ✏️ Theming
It is fairly simple to customize Cheesecake to your needs. Clone or download the project and edit the `theme.css` file right in `/public/css/`. No need to compile, since we're not using any preproccessor at this point.  

And yes, you may remove the "Powered by Cheesecake" notice at the bottom of the page if you really want to 😄.

## Contributing
Requests and contributions are as always greatly appreciated. Feel free to go ahead and create an issue or pull request to get that going.
 

## License

Copyright 2017 Sjors Snoeren

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
