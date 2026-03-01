import { logger } from '../utils/logger.js';

logger.section('02: Control Flow (Conditionals & Loops)');

/* 
  -------------------------------------------------------------------
  1. IF / ELSE STATEMENT
  -------------------------------------------------------------------
  Conditional statements let code run only if certain conditions are met.
*/
logger.step('1. If / Else');

const age = 20;
const hasLicense = true;

if (age >= 18 && hasLicense) {
  logger.info('Driving Status', 'Can drive a car.');
} else if (age >= 18 && !hasLicense) {
  logger.info('Driving Status', 'Old enough, but needs a license.');
} else {
  logger.info('Driving Status', 'Too young to drive.');
}

// Ternary Operator: A concise way to write simple if/else
const userType = age >= 18 ? 'Adult' : 'Minor';
logger.info('User Type (Ternary)', userType);

/* 
  -------------------------------------------------------------------
  2. SWITCH STATEMENT
  -------------------------------------------------------------------
  Useful when checking a single variable against many specific values.
*/
logger.step('2. Switch Statement');

const status = 'pending'; // try 'shipped' or 'delivered'

switch (status) {
  case 'pending':
    logger.info('Order Status', 'Your order is being processed.');
    break; // Break prevents it from continuing to run the code below
  case 'shipped':
    logger.info('Order Status', 'Your order is on the way!');
    break;
  case 'delivered':
    logger.info('Order Status', 'Your order has arrived.');
    break;
  default:
    logger.warn('Unknown order status.');
}

/* 
  -------------------------------------------------------------------
  3. LOOPS (for, while)
  -------------------------------------------------------------------
  Loops are used to repeat tasks.
*/
logger.step('3. Loops');

// For loop: Best when you know exactly how many times you want to iterate
logger.info('For Loop', 'Counting 1 to 3...');
for (let i = 1; i <= 3; i++) {
  console.log(`  Count: ${i}`);
}

// While loop: Best when you are waiting for a specific condition to become false
logger.info('While Loop', 'Running while count is > 0...');
let countdown = 3;
while (countdown > 0) {
  console.log(`  T-minus: ${countdown}`);
  countdown--; // Always remember to update the condition variable!
}
