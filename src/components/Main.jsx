import React, { Component } from 'react';
import { connect } from 'react-redux';
import Board from './Board.jsx';


class Main extends Component {
  constructor(props) {
    super(props);
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

export default connect(mapStateToProps)(Main);