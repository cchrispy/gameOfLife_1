var shapes = { // shapes will be returned as objects with proper cells
  glider: key => {
    return {
      [key]: true,
      [key + 58]: true,
      [key + 60]: true,
      [key + 119]: true,
      [key + 120]: true
    }
  },

  lightweightSpaceship: key => {

  },

  pulsar: key => {

  },

  beacon: key => {

  },

  blinker: key => {
    return {
      [key]: true,
      [key + 60]: true,
      [key + 120]: true
    }
  },

  gliderGun: key => {
    // https://en.wikipedia.org/wiki/Gun_(cellular_automaton)
  },

  random: count => {
    var cells = {};
    for (var i = 0; i < count; i++) {
      cells[Math.floor(Math.random() * 3600)] = true;
    }
    return cells;
  }
}

export default shapes;