import { logger } from '../utils/logger.js';

logger.section('06: Async JavaScript');

/* 
  -------------------------------------------------------------------
  1. CALLBACKS
  -------------------------------------------------------------------
  Historically, callbacks were the primary way to handle asynchronous 
  operations in JS. A callback is simply a function passed into another 
  function to be executed later.
*/
logger.step('1. Callbacks');

function fetchDataWithCallback(callback) {
  logger.info('Callback', 'Starting fetch...');
  setTimeout(() => {
    callback('Data successfully loaded (Callback)!');
  }, 1000); // Wait 1 second
}

// The output will appear *after* other synchronous code runs.
fetchDataWithCallback((data) => {
  logger.info('Callback Result', data);
});

/* 
  -------------------------------------------------------------------
  2. PROMISES
  -------------------------------------------------------------------
  Promises represent the eventual completion (or failure) of an 
  asynchronous operation. They avoid "Callback Hell" by chaining `.then()`.
*/
logger.step('2. Promises');

const fetchWithPromise = () => {
  return new Promise((resolve, reject) => {
    logger.info('Promise', 'Started Promise task...');
    setTimeout(() => {
      const success = true; // Try changing this to false!
      if (success) {
        resolve('Data successfully loaded (Promise)!');
      } else {
        reject('Error: Failed to load data.');
      }
    }, 1500);
  });
};

fetchWithPromise()
  .then((data) => logger.info('Promise Success', data))
  .catch((error) => logger.warn(`Promise Error: ${error}`));

/* 
  -------------------------------------------------------------------
  3. ASYNC / AWAIT
  -------------------------------------------------------------------
  Introduced in ES8, async/await is syntactic sugar over Promises.
  It makes asynchronous code look and behave a bit more like 
  synchronous code, making it much easier to read.
*/
logger.step('3. Async / Await');

// The `async` keyword tells JS this function will use Promises
const loadDataAsync = async () => {
  logger.info('Async/Await', 'Awaiting data...');
  try {
    // `await` pauses execution of *this function* until the Promise resolves
    const result = await fetchWithPromise();
    logger.info('Async/Await Success', result);
  } catch (error) {
    logger.warn(`Async/Await Error: ${error}`);
  }
};

// Calling the async function. Let's wrap it in a setTimeout just to let
// the previous console.logs finish first for cleaner output.
setTimeout(() => {
  loadDataAsync();
}, 2000);
