function powerCalculator(num1, num2) {
  if (num2 <= 0) {
    return console.log('exponent should be >= 0');
  }
  if (num2 === 1) {
    return num1;
  }
  return console.log(num1 * powerCalculator(num1, num2 - 1));
}

powerCalculator(10, -2);