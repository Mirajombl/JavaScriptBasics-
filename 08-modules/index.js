import { logger } from '../utils/logger.js';

/* 
  -------------------------------------------------------------------
  3. IMPORTING
  -------------------------------------------------------------------
  Based on what we exported in `math.js`, we import them here.
  - Named exports require exactly matching names inside `{ }`.
  - Default exports can be named anything you want when importing!
*/

// Importing named exports (must match names exactly)
import { PI, calculateArea } from './math.js';

// Importing the default export (we can name it whatever we want locally)
import MyCalculator from './math.js';

logger.section('08: ES6 Modules');
logger.step('Using Imported Code');

logger.info('Named Export: PI', PI);
logger.info('Named Export: calculateArea(5)', calculateArea(5));

const calc = new MyCalculator();
calc.add(10);
calc.add(20);

logger.info('Default Export Class Output', calc.value);
