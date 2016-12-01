const cellState = (state = {}, action) => {
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