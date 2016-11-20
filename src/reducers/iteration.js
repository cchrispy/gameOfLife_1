const iteration = (state = 0, action) => {
  switch (action.type) {
    case 'NEXT':
      return state + 1;
    case 'PREV':
      return state - 1;
    case 'RESET':
      return 0;
    default: 
      return state;
  }
}

export default iteration;