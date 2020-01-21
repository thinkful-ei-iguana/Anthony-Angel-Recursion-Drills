const maze = [
  [' ', ' ', '*'],
  ['*', ' ', '*'],
  [' ', ' ', 'e']
];

function mazeSolution(maze, row, column, path) {
  if (maze[row][column] === 'e') {
    return path;
  }

  if (
    maze[row][column] === '*' ||
    column > maze.length ||
    row > maze.length ||
    column < 0 ||
    row < 0
  ) {
    return false;
  }

  if (maze[row][column] === '') {
    if (maze[row][column + 1] === '') {
      return 'R' + mazeSolution(maze, row, column++);
    } else if (maze[row][column - 1] === '') {
      return 'L' + mazeSolution(maze, row, --column);
    } else if (maze[row - 1][column] === '') {
      return 'U' + mazeSolution(maze, --row, column);
    } else if (maze[row + 1][column] === '') {
      return 'D' + mazeSolution(maze, row++, column);
    }
  }
  return path;
}

console.log(mazeSolution(maze, 0, 0, []));
