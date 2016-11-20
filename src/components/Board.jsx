import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';
import toggle from '../actions/toggleAction.js';

import '../styles/main.scss';

class Board extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    var cells = [1700, 1699, 1701, 1702, 1703, 1640, 1760];
    cells.forEach(cell => {
      this.props.toggle(cell);
    })
  }

  render() {
    return (
      <div id='board'>
        { _.range(3600).map((cell, i) => (
          <div className={ `cell ${ this.props.cellState[i + 1] ? 'alive' : '' }` } key={ i + 1 }></div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  toggle: (cell) => {
    dispatch(toggle(cell));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Board);