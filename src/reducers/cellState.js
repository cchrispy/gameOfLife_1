var temp = {
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
      return Object.assign({}, state, {
        [action.cell]: !state[action.cell]
      });
    case 'RESET':
      return {};
    default:
      return state;
  }
}

export default cellState;