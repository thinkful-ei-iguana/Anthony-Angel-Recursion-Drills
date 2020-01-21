function stringSplitter(str, seperator) {
  const index = str.indexOf(seperator);
  if (index < 0) {
    return [str];
  }
<<<<<<< HEAD
=======

>>>>>>> c0673fab38c614888da716140bd2c21783e0e0d0
  const slice = str.slice(0, index);
  return [slice].concat(
    stringSplitter(str.slice(index + seperator.length), seperator)
  );
}
<<<<<<< HEAD
console.log(stringSplitter("02/20/2020", "/" ))
=======

console.log(stringSplitter('01/21/2020', '/'));
>>>>>>> c0673fab38c614888da716140bd2c21783e0e0d0
