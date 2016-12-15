import nextGen from './nextGen';

var shapes = { // shapes will be returned as objects with proper cells
  glider: key => { // cycle: 4
    /*
      - - - - - || - - - - - || - - - - - || - - - - -
      - - - G - || - - G - - || - G G - - || - G G G -
      - G - G - || - G - - - || - G - G - || - - - G -
      - - G G - || - G G G - || - G - - - || - - G - -
      - - - - - || - - - - - || - - - - - || - - - - -
    */

    var dir;
    var i = Math.floor(Math.random() * 4);
    var cycle = Math.floor(Math.random() * 4);

    switch (i) {
      case 0: 
        dir = {
          [key]: true,
          [key + 58]: true,
          [key + 60]: true,
          [key + 119]: true,
          [key + 120]: true
        };
        break;
      case 1:
        dir = {
          [key]: true,
          [key + 59]: true,
          [key + 119]: true,
          [key + 120]: true,
          [key + 121]: true
        };
        break;
      case 2:
        dir = {
          [key]: true,
          [key + 1]: true,
          [key + 60]: true,
          [key + 62]: true,
          [key + 120]: true
        };
        break;
      case 3:
        dir = {
          [key]: true,
          [key + 1]: true,
          [key + 2]: true,
          [key + 62]: true,
          [key + 121]: true
        };
        break;
      default:
        dir = {
          [key]: true,
          [key + 58]: true,
          [key + 60]: true,
          [key + 119]: true,
          [key + 120]: true
        };
        break;
    };

    for (var j = 0; j < cycle; j++) {
      dir = nextGen(dir);
    }

    return dir;

  },

  lightweightSpaceship: key => { // cycle: 4
    /*
      - - - - - - - || - - - - - - - || - - - - - - - || - - S - S - -
      - - S - - S - || - S S S - - - || - - S S S S - || - - - - - S -
      - S - - - - - || - S - - S - - || - S - - - S - || - - - - - S -
      - S - - - S - || - S - - - - - || - - - - - S - || - - S - - S -
      - S S S S - - || - S - - - - - || - S - - S - - || - - - S S S -
      - - - - - - - || - - S - S - - || - - - - - - - || - - - - - - -
    */
  },

  pulsar: key => {

  },

  beacon: key => { // cycle: 2
    /*
      - - - - - - || - - - - - - 
      - B B - - - || - - - B B - 
      - B - - - - || - - - - B - 
      - - - - B - || - B - - - - 
      - - - B B - || - B B - - - 
      - - - - - - || - - - - - - 
    */ 
  },

  blinker: (key, i) => { // cycle: 2
    /*
      - - - - - || - - - - -
      - - B - - || - - - - -
      - - B - - || - B B B -
      - - B - - || - - - - -
      - - - - - || - - - - -
    */
    switch (i) {
      case 0:
        return {
          [key]: true,
          [key + 60]: true,
          [key + 120]: true
        };
      case 1:
        return {
          [key]: true,
          [key - 1]: true,
          [key + 1]: true
        };
      default:
        return {
          [key]: true,
          [key + 60]: true,
          [key + 120]: true
        };
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