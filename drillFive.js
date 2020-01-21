function stringSplitter(str, seperator) {
  let newArr = [];
  if (str === '') {
    return;
  }
  for (let i of str) {
    if (i == seperator) {
      i = ',';
    }
    newArr.push(i);
  }
  return newArr.join('');
}
console.log(stringSplitter('01/21/2020', '/'));
