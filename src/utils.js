function isEven(number) {
  return number % 2 === 0;
}

function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

function factorial(n) {
  if (n < 0) throw new Error('Факторіал від\'ємного числа не визначений');
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

module.exports = {
  isEven,
  isPrime,
  factorial
};