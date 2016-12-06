const stats = (state = {}, action) => {
  switch (action.type) {
    case 'CELL_COUNT':
      return Object.assign({}, state, {
        cellCount: action.cellCount
      });
    case 'GLIDER_COUNT':
      return Object.assign({}, state, {
        gliderCount: action.gliderCount
      });
    case 'BLINKER_COUNT':
      return Object.assign({}, state, {
        blinkerCount: action.blinkerCount
      });
    default:
      return state;
  }
}

export default stats;