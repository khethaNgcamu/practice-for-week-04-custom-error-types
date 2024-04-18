// Your code here
class ValidationError extends Error {
  constructor(difference = 'Invalid input', ...params) {
    super(...params);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ValidationError);
    }

    this.name = 'ValidationError';
    this.difference = difference;
    this.message = `${difference}`;
  }
}


/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = ValidationError;
} catch {
  module.exports = null;
}