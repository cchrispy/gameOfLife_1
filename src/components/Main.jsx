import React, { Component } from 'react';
import { connect } from 'react-redux';
import Board from './Board.jsx';

import toggle from '../actions/toggleAction.js';


class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    var temp = { // starting board, hardcoded cells
      // 1300: true, 
      // 1301: true, 
      // 1240: true, 
      // 1241: true, 
      // 1242: true, 
      // 1182: true, 
      // 1183: true,

      // 1400: true,
      // 1401: true,
      // 1460: true,
      // 1461: true,
      // 1462: true,

      1900: true,
      1958: true,
      1960: true,
      2019: true,
      2020: true
    }
    this.props.toggle(temp);
  }

  render() {
    return (
      <div id='main'>
        <h1>Game of Life</h1>
        <Board />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  store: state
})

const mapDispatchToProps = dispatch => ({
  toggle: cells => {
    dispatch(toggle(cells))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);