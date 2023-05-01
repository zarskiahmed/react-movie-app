const Dotenv = require('dotenv-webpack');

module.exports = {
  // other configurations...
  plugins: [
    new Dotenv({
      systemvars: true // set to `true` to pick up normal linux environment variables
    })
  ]
};