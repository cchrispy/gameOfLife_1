import React, { Component } from 'react';
import { connect } from 'react-redux';
import Board from './Board.jsx';
import Options from './Options.jsx';
import '../styles/main.scss';

import toggle from '../actions/toggleAction.js';
import { next, prev, reset } from '../actions/iterationAction.js';

import nextGen from '../helpers/nextGen.js';
import shapes from '../helpers/shapesGen.js';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false
    }
  }

  componentWillMount() {
    var temp = { // starting board, hardcoded cells
      // 1300: true, 1301: true, 1240: true, 1241: true, 
      // 1242: true, 1182: true, 1183: true,

      // 1400: true, 1401: true, 1460: true, 1461: true, 1462: true,

      // 1900: true, 1958: true, 1960: true, 2019: true, 2020: true
    }
    // this.props.toggle(temp);
    // this.props.toggle(shapes.glider(1900));
    // this.props.toggle(shapes.blinker(1600));
    this.props.toggle(shapes.random(400));
  }

  simulate() {
    this.iterate = setInterval(() => {
      this.props.toggle(nextGen(this.props.store.cellState));
      this.props.iterate('next');
    }, 500)
  }

  endSimulation() {
    clearInterval(this.iterate);
  }

  startButton(e) {
    e.preventDefault();
    this.setState({
      started: true
    });
    this.simulate();
  }

  stopButton(e) {
    e.preventDefault();
    this.setState({
      started: false
    });
    this.endSimulation();
  }

  render() {
    return (
      <div id='main'>
        <h1 className='center'>Game of Life</h1>
        <div className='container'>
          <div className='row'>

            <div className='col-lg-7 col-md-12 col-sm-12 col-xs-12' >
              <Board />
            </div>

            <div className='col-lg-5 col-md-12 col-sm-12 col-xs-12'>

              <h3 className='center no-margin'>Iteration: { this.props.store.iteration }</h3>

              <Options />

              <p className='center'>
                <button type='button' 
                        className={ `btn btn-success btn-lg iteration-btn ${ this.state.started ? 'active' : '' }` }
                        onClick={ this.startButton.bind(this) } >Start</button>
                <button type='button' 
                        className={ `btn btn-danger btn-lg iteration-btn` } 
                        disabled={ `${ this.state.started ? '' : 'disabled' }` } 
                        onClick={ this.stopButton.bind(this) } >Stop</button>
              </p>

            </div>

          </div>
        </div>
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
  },
  iterate: command => {
    if (command === 'next') {
      dispatch(next());
    } else if (command === 'reset') {
      dispatch(reset());
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);