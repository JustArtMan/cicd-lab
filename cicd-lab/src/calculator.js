class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error('Ділення на нуль неможливе');
    }
    return a / b;
  }

  power(base, exponent) {
    return Math.pow(base, exponent);
  }

  sqrt(number) {
    if (number < 0) {
      throw new Error('Не можна взяти корінь з від\'ємного числа');
    }
    return Math.sqrt(number);
  }
}

module.exports = Calculator;