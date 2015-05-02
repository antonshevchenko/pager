var crypto = require('crypto');

function errorHandler (context) {
  return function (err) {
    context.status(400).send(err);
  };
}

function isEmpty (obj) {
  if (typeof obj === 'object' && (Object.keys(obj)).length === 0) {
    return true;
  } else {
    return false;
  }
}

function generateSlug () {
  return crypto.randomBytes(20).toString('hex');
}

var utils = {
  errorHandler: errorHandler,
  isEmpty: isEmpty,
  generateSlug: generateSlug
};

module.exports = utils;