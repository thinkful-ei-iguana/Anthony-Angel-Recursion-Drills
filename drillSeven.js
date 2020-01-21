function factoralize(num) {
  if (num < 0) {
    return;
  }

  if (num === 1) {
    return 1;
  }

  return num * factoralize(num - 1);
}

console.log(factoralize(7));
