import { logger } from '../utils/logger.js';

logger.section('03: Functions');

/* 
  -------------------------------------------------------------------
  1. FUNCTION DECLARATIONS VS EXPRESSIONS
  -------------------------------------------------------------------
  - Declarations are "hoisted" (can be called before defined in code).
  - Expressions are tied to variables and are not hoisted.
*/
logger.step('1. Declarations vs Expressions');

// 1. Function Declaration
function greetDeclaration(name) {
  return `Hello, ${name}!`;
}
logger.info('Declaration output', greetDeclaration('Alice'));

// 2. Function Expression (assigned to a constant)
const greetExpression = function (name) {
  return `Hi there, ${name}.`;
};
logger.info('Expression output', greetExpression('Bob'));

/* 
  -------------------------------------------------------------------
  2. ARROW FUNCTIONS
  -------------------------------------------------------------------
  Introduced in ES6, arrow functions provide a shorter syntax.
  They also have special behavior regarding the `this` keyword (covered later).
*/
logger.step('2. Arrow Functions');

// Standard arrow function
const multiply = (a, b) => {
  return a * b;
};

// Implicit Return: If the function only has one statement returning a value,
// you can omit the `{}` and `return` keyword entirely!
const add = (a, b) => a + b;

logger.info('multiply(5, 4)', multiply(5, 4));
logger.info('add(10, 20)', add(10, 20));

/* 
  -------------------------------------------------------------------
  3. DEFAULT PARAMETERS
  -------------------------------------------------------------------
  You can provide a fallback value for parameters in case they are missing.
*/
logger.step('3. Default Parameters');

const welcomeUser = (username = 'Guest') => {
  console.log(`Welcome back, ${username}!`);
};

welcomeUser('Charlie'); // Provides a name
welcomeUser(); // Falls back to 'Guest'

/* 
  -------------------------------------------------------------------
  4. CLOSURES (Advanced but crucial topic)
  -------------------------------------------------------------------
  A closure happens when a function "remembers" the variables outside of it,
  even after the outer function has finished executing.
*/
logger.step('4. Closures');

function createCounter() {
  let count = 0; // This variable is protected/hidden

  // Return an object with methods that can access `count`
  return {
    increment: () => {
      count++;
      return count;
    },
    getCount: () => count,
  };
}

const myCounter = createCounter();
console.log('Incrementing counter:', myCounter.increment()); // 1
console.log('Incrementing counter:', myCounter.increment()); // 2

// Notice how `myCounter.count` is inaccessible directly, but the methods work!
logger.info('myCounter.count (direct access)', myCounter.count); // Undefined
logger.info('myCounter.getCount() (closure access)', myCounter.getCount()); // 2
