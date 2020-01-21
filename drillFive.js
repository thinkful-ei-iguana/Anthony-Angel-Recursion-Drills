function stringSplitter(str) {
  let newArr=[];
  if (str === "") {
    return ;
  }
  for(i=0; i < str.length; i++) {
    if (i === "/" ) {
      i.replace(",")
    }
    i.push(newArr)
  }
  return newArr
}
console.log(stringSplitter("Hello Hola Bye"))