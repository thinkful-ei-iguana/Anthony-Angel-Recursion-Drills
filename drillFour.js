function triangle(nth) {
  if (nth === 1) {
    return 1;
  }
  return nth + triangle(nth - 1);
}

console.log(triangle(5));
