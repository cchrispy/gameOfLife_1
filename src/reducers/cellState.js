var temp = { // starting board, hardcoded cells
  // 1300: true, 
  // 1301: true, 
  // 1240: true, 
  // 1241: true, 
  // 1242: true, 
  // 1182: true, 
  // 1183: true,

  // 1400: true,
  // 1401: true,
  // 1460: true,
  // 1461: true,
  // 1462: true,

  1900: true,
  1958: true,
  1960: true,
  2019: true,
  2020: true
}


const cellState = (state = temp, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return Object.assign({}, state, action.cells);
    case 'RESET':
      return {};
    default:
      return state;
  }
}

export default cellState;