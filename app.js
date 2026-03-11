const age = 19;
const hasPassport = false;

if (age >= 18 && hasPassport) {
  console.log('Can leave');
} else if (age >= 18 || !hasPassport) {
  console.log('you must stay');
} else {
  console.log('Jail');
}
