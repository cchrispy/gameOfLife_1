const cellState = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return Object.assign({}, state, {
        [action.cell]: !state[action.cell]
      });
    default:
      return state;
  }
}

export default cellState;