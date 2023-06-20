class Calculator {
  constructor() {
    this.number1 = 0;
    this.number2 = 0;
  }

  add(number1, number2) {
    return number1 + number2;
  }

  subtract(number1, number2) {
    return number1 - number2;
  }

  multiply(number1, number2) {
    return number1 * number2;
  }

  divide(number1, number2) {
    if (number2 !== 0) {
      return number1 / number2;
    } else {
      throw new Error("Cannot divide by zero");
    }
  }
}

module.exports = Calculator;
