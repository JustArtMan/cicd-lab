const { isEven, isPrime, factorial } = require('../src/utils');

describe('Utils Functions', () => {
  describe('isEven', () => {
    test('перевіряє парні числа', () => {
      expect(isEven(4)).toBe(true);
      expect(isEven(7)).toBe(false);
    });
  });

  describe('isPrime', () => {
    test('визначає прості числа', () => {
      expect(isPrime(2)).toBe(true);
      expect(isPrime(17)).toBe(true);
      expect(isPrime(4)).toBe(false);
      expect(isPrime(1)).toBe(false);
    });
  });

  describe('factorial', () => {
    test('обчислює факторіал', () => {
      expect(factorial(5)).toBe(120);
      expect(factorial(0)).toBe(1);
    });

    test('викидає помилку для від\'ємних чисел', () => {
      expect(() => factorial(-1)).toThrow();
    });
  });
});