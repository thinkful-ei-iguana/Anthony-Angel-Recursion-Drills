function countingSheep (from) {
  if(from === 0){
    return console.log("All Sheep Jumped Over the Fence");
  }
    console.log(`Counting sheep ${from}`)
    countingSheep(from -1);
}

countingSheep(5)