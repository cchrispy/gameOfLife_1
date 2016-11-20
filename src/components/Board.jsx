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
        { Array(100).map(row => {
          return (<div className='cell'>{ Array(100).map(row => (<div className='cell'></div>))}</div>)
        })}
        { [1, 2, 3].map(div => (<p>hay</p>))}
        hi
      </div>
    )
  }
}

export default Board;