function binary(num) {
  if (num <= 0) {
    return '';
  }
  const binaryValue = num % 2;
  return binary(Math.floor(num / 2)) + binaryValue;
}

console.log(binary(25));
