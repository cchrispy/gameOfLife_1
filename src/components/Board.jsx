import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';
import toggle from '../actions/toggleAction.js';
import nextGen from '../helpers/nextGen.js';

import '../styles/main.scss';

class Board extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    var cells = [1700, 1699, 1701, 1702, 1703, 1640, 1760, 
                 1300, 1301, 1240, 1241, 1242, 1182, 1183];
    cells.forEach(cell => {
      this.props.toggle(cell);
    });
  }

  render() {
    console.log('cellState: ', this.props.cellState);
    console.log('live neighbors: ', nextGen()(this.props.cellState, 1183));
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