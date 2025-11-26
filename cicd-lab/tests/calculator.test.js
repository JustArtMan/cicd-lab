const Calculator = require('../src/calculator');

describe('Calculator', () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  describe('Додавання', () => {
    test('додає два додатні числа', () => {
      expect(calc.add(2, 3)).toBe(5);
    });

    test('додає від\'ємні числа', () => {
      expect(calc.add(-5, -3)).toBe(-8);
    });
  });

  describe('Віднімання', () => {
    test('віднімає числа', () => {
      expect(calc.subtract(10, 3)).toBe(7);
    });
  });

  describe('Множення', () => {
    test('множить числа', () => {
      expect(calc.multiply(4, 5)).toBe(20);
    });

    test('множення на нуль', () => {
      expect(calc.multiply(5, 0)).toBe(0);
    });
  });

  describe('Ділення', () => {
    test('ділить числа', () => {
      expect(calc.divide(10, 2)).toBe(5);
    });

    test('викидає помилку при діленні на нуль', () => {
      expect(() => calc.divide(10, 0)).toThrow('Ділення на нуль неможливе');
    });
  });

  describe('Степінь', () => {
    test('піднесення до степеня', () => {
      expect(calc.power(2, 3)).toBe(8);
    });
  });

  describe('Корінь квадратний', () => {
    test('обчислює корінь квадратний', () => {
      expect(calc.sqrt(16)).toBe(4);
    });

    test('викидає помилку для від\'ємних чисел', () => {
      expect(() => calc.sqrt(-1)).toThrow();
    });
  });
});