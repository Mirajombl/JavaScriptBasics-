import { logger } from '../utils/logger.js';

logger.section('07: Error Handling');

/* 
  -------------------------------------------------------------------
  1. TRY / CATCH / FINALLY
  -------------------------------------------------------------------
  Use try...catch blocks to handle potential runtime errors gracefully
  without crashing your entire application.
*/
logger.step('1. Try / Catch / Finally');

const riskyOperation = (triggerError) => {
  if (triggerError) {
    // The `throw` statement creates a runtime error manually
    throw new Error('Something went terribly wrong!');
  }
  return 'Success! No errors here.';
};

try {
  logger.info('Attempt', 'Running risky operation...');
  const result = riskyOperation(true); // Will throw an error

  // This line will NEVER run because the error above immediately jumps to the catch block!
  logger.info('Result', result);
} catch (error) {
  // `error` is an object containing information about what failed.
  logger.warn(`Caught an exception: ${error.message}`);
} finally {
  // The `finally` block runs NO MATTER WHAT. Whether it succeeded or failed.
  // Often used for cleanup operations (closing files, DB connections).
  logger.info('Cleanup', 'Finally block executed.');
}

/* 
  -------------------------------------------------------------------
  2. CUSTOM ERRORS
  -------------------------------------------------------------------
  You can extend the built-in Error class to create specific, 
  identifiable error types for your application.
*/
logger.step('2. Custom Errors');

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError'; // Changing the default name
  }
}

const validateUser = (user) => {
  if (!user.age || user.age < 18) {
    throw new ValidationError('User must be at least 18 years old.');
  }
  return 'User is valid!';
};

try {
  validateUser({ name: 'Tim' }); // Missing age!
} catch (error) {
  if (error instanceof ValidationError) {
    logger.warn(`Validation logic failed: ${error.message}`);
  } else {
    logger.warn(`An unexpected error occurred: ${error.message}`);
  }
}
