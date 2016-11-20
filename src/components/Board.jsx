import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';

import '../styles/main.scss';

class Board extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='board'>
        { _.range(3600).map((cell, i) => (
          <div className={`cell ${ (i + 1) % 79 === 0 ? 'alive' : '' }`} key={i + 1}></div>
        ))}
      </div>
    )
  }
}

export default Board;