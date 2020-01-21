function reverseString(str) {
  if (str === "") {
    return "";
  }
  splitString = str.split("");
  reverseArray = splitString.reverse();
  joinArray = reverseArray.join("")
  return(console.log(joinArray))
}

reverseString("hello");