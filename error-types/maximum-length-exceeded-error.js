const ValidationError = require('./validation-error');

// Your code here
// maximum-length-exceeded-error.js
class MaximumLengthExceededError extends ValidationError {
  constructor(excessLength, ...params) {
    super(...params);

    // if (Error.captureStackTrace) {
    //   Error.captureStackTrace(this, MaximumLengthExceededError); // Ensure this line is only called once
    // }

    this.name = 'MaximumLengthExceededError';
    this.message = excessLength ? `Maximum length exceeded by ${excessLength}` : 'Maximum length exceeded';
  }
}





/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = MaximumLengthExceededError;
} catch {
  module.exports = null;
}