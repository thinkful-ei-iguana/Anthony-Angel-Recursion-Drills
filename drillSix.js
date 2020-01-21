function fibonacciNum(num) {
  if (num === 1 || num === 2) {
    return 1;
  }
  if (num === 0) {
    return undefined;
  } else {
    return fibonacciNum(num - 1) + fibonacciNum(num - 2);
  }
}

console.log(fibonacciNum(7));
