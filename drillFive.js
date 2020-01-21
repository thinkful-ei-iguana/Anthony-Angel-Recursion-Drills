function stringSplitter(str, seperator) {
  const index = str.indexOf(seperator);
  if (index < 0) {
    return [str];
  }
  const slice = str.slice(0, index);
  return [slice].concat(
    stringSplitter(str.slice(index + seperator.length), seperator)
  );
}
console.log(stringSplitter("02/20/2020", "/" ))