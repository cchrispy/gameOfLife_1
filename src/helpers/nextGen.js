const nextGen = cells => {
  // returns an object with the cells that need to be toggled

  var toggleCells = [];
  for (var prop in cells) {
    var cell = +prop;
    if (liveNeighbors(cells, cell) < 2 || liveNeighbors(cells, cell) > 3) {
      toggleCells.push(cell);
    }
  }



  return toggleCells;
}

const liveNeighbors = (cells, key) => {
  // returns a count of the number of live neighbors a cell has
  var neighbors = getNeighbors(key);
  return neighbors.reduce((count, cell) => {
    if (cells[cell]) {
      return count + 1;
    }
    return count;
  }, 0)
};

const getNeighbors = key => {
  // returns an array a cell's neighbors

  if (key === 1) { // top left
    return [2, 61, 62];
  } else if (key === 60) { // top right
    return [59, 119, 120];
  } else if (key === 3541) { // bottom left
    return [3481, 3482, 3542];
  } else if (key === 3600) { // bottom right
    return [3539, 3540, 3599];
  } else if (key < 60) { // top row
    return [key - 1, key + 1, key + 59, key + 60, key + 61];
  } else if (key > 3540) { // bottom row
    return [key - 1, key + 1, key - 61, key - 60, key - 59];
  } else if (key % 60 === 0) { // right column
    return [key - 1, key - 61, key - 60, key + 59, key + 60];
  } else if ((key - 1) % 60 === 0) { // left column
    return [key + 1, key - 60, key - 59, key + 60, key + 61];
  } else { // non-edge cells
    return [key - 61, key - 60, key - 59, key - 1, key + 1, key + 59, key + 60, key + 61];
  }

}

export default nextGen;