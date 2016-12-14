import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';
import toggle from '../actions/toggleAction.js';
import { next, prev, reset } from '../actions/iterationAction.js';
import nextGen from '../helpers/nextGen.js';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      borders: true
    }
  }

  componentDidMount() {
    // this.iterate = setTimeout(() => {
    //   this.props.toggle(nextGen(this.props.cellState));
    //   this.props.iterate('next');
    // }, 100)
  }

  componentWillUnmount() {
    // clearInterval(this.iterate);
  }

  toggleBorder() {
    this.setState({
      borders: !this.state.borders
    })
  }

  render() {
    return (
      <div id='board' 
           className={ `center ${ this.state.borders ? 'borders' : '' }` } 
           onClick={ this.toggleBorder.bind(this) } >
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