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
    this.iterate = setTimeout(() => {
      this.props.toggle(nextGen(this.props.cellState));
      this.props.iterate('next');
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
  toggle: cells => {
    dispatch(toggle(cells));
  },
  iterate: command => {
    if (command === 'next') {
      dispatch(next());
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Board);