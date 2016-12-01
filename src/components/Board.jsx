import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';
import toggle from '../actions/toggleAction.js';
import { next, prev, reset } from '../actions/iterationAction.js';
import nextGen from '../helpers/nextGen.js';

import '../styles/main.scss';

class Board extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // var cells = [/*1700, 1699, 1701, 1702, 1703, 1640, 1760, */
    //              1300, 1301, 1240, 1241, 1242, 1182, 1183];
    // cells.forEach(cell => {
    //   this.props.toggle(cell);
    // });
    this.iterate = setTimeout(() => {
      console.log(nextGen(this.props.cellState));
      nextGen(this.props.cellState).forEach(cell => {
        this.props.toggle(cell);
      })
      this.props.iterate('next');
      this.forceUpdate();
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.iterate);
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
  toggle: cell => {
    dispatch(toggle(cell));
  },
  iterate: command => {
    if (command === 'next') {
      dispatch(next());
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Board);