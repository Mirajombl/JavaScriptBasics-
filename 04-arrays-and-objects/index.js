import { logger } from '../utils/logger.js';

logger.section('04: Arrays and Objects');

/* 
  -------------------------------------------------------------------
  1. SPREAD AND REST OPERATORS (...)
  -------------------------------------------------------------------
  The syntax `...` is highly versatile in JavaScript.
  - Spread: Copies elements *out* of an array/object into a new one.
  - Rest: Gathers remaining elements/arguments *into* an array.
*/
logger.step('1. Spread & Rest Operators');

// Spread inside Arrays
const fruits = ['Apple', 'Banana'];
const moreFruits = ['Orange', ...fruits, 'Mango'];
logger.info('Array Spread', moreFruits);

// Spread inside Objects
const baseUser = { id: 1, role: 'member' };
const adminUser = { ...baseUser, role: 'admin', name: 'Eve' }; // We overwrite the 'role'
logger.info('Object Spread', adminUser);

// Rest in function parameters
const sumAll = (...numbers) => {
  // `numbers` becomes an array containing all provided arguments
  return numbers.reduce((total, num) => total + num, 0);
};
logger.info('Rest Output', `sumAll(1, 2, 3, 4, 5) = ${sumAll(1, 2, 3, 4, 5)}`);

/* 
  -------------------------------------------------------------------
  2. DESTRUCTURING
  -------------------------------------------------------------------
  Extracting specific values from Arrays or Objects into standalone variables.
*/
logger.step('2. Destructuring');

// Object Destructuring
const developer = {
  devName: 'Jordan',
  yearsExp: 5,
  skills: ['JS', 'React', 'Node'],
};
// We extract just devName and skills into new constants:
const { devName, skills } = developer;
logger.info(`Destructured Object: ${devName} knows`, skills);

// Array Destructuring
const rgbColors = ['Red', 'Green', 'Blue'];
const [primaryColor, secondaryColor] = rgbColors; // Gets the first two items
logger.info('Destructured Array', `Colors: ${primaryColor} and ${secondaryColor}`);

/* 
  -------------------------------------------------------------------
  3. COMMON ARRAY METHODS (Higher-Order Functions)
  -------------------------------------------------------------------
  These methods are essential for transforming and filtering data.
  They do NOT modify the original array, they return a new one.
*/
logger.step('3. Array Methods (.map, .filter)');

const scores = [65, 80, 92, 45, 100];

// .map() creates a new array by applying a function to every element
const gradedScores = scores.map((score) => {
  return score >= 60 ? 'Pass' : 'Fail';
});
logger.info('Mapped items', gradedScores);

// .filter() creates a new array containing ONLY elements that pass a test (return true)
const highScores = scores.filter((score) => score > 85);
logger.info('Filtered items', highScores);

// Chaining methods: We can link them directly!
// e.g. Give bonus points to passing scores
const adjustedPassingScores = scores.filter((score) => score >= 60).map((score) => score + 5);

logger.info('Chained Result', adjustedPassingScores);
