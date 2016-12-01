var temp = { // starting board, hardcoded cells
  1300: true, 
  1301: true, 
  1240: true, 
  1241: true, 
  1242: true, 
  1182: true, 
  1183: true
}


const cellState = (state = temp, action) => {
  switch (action.type) {
    case 'TOGGLE':
      var res = {};
      action.cells.forEach(cell => {
        res[cell] = !state[cell]
      })
      return Object.assign({}, state, res);
    case 'RESET':
      return {};
    default:
      return state;
  }
}

export default cellState;