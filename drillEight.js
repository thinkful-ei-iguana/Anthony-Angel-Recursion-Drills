function mazeSolver (maze) {
  this.maze = maze

  this.traverse = function(column, row) {
    if(this.maze[column][row] == 'e'){
      console.log("Maze Solved")
    } else if(this.maze[column][row]== ' ') {
      console.log("we are moving on a valid path")
        this.maze[column][row] = '.'
        if(this.maze.column != ' ' ) {
          this.traverse(column == ' ', row);
        }
        if( this.maze.row != ' ' ){
          this.traverse(column, row == ' ');
        }
        if(column != ' '){
          this.traverse(column == ' ', row)
        }
        if(row != ' '){
          this.traverse(column, row == ' ' )
        }
    }
  }
}

let mySmallMaze = [
  ['s', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];
let ms = new mazeSolver(mySmallMaze);
ms.traverse(0,'s')

console.log(ms.traverse(0, 's'))