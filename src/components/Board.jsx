import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../styles/main.scss';

class Board extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        { Array(100).map(row => {
          return <div className='cell'>{ Array(100).map(row => (<div className='cell'></div>))}</div>
        })}
      </div>
    )
  }
}

export default Board;