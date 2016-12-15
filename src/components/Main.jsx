import React, { Component } from 'react';
import { connect } from 'react-redux';
import Board from './Board.jsx';
import Options from './Options.jsx';
import '../styles/main.scss';

import toggle from '../actions/toggleAction.js';
import { next, prev, reset } from '../actions/iterationAction.js';
import { adjustCellCount } from '../actions/statsAction.js';

import keyGen from '../helpers/keyGen.js';
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
    // this.props.initialCellCount(400);
    // console.log('main: ', this.props.store);

    var temp = { // starting board, hardcoded cells
      // 1300: true, 1301: true, 1240: true, 1241: true, 
      // 1242: true, 1182: true, 1183: true,

      // 1400: true, 1401: true, 1460: true, 1461: true, 1462: true,

      // 1900: true, 1958: true, 1960: true, 2019: true, 2020: true
    }
    // this.props.toggle(temp);
    // this.props.toggle(shapes.random(400));

    // for (var i = 0; i < 300; i++) { // toggle 300 random cells confined within 3 units from edge
    //   this.props.toggle( { [keyGen()]: true } );
    // }

    for (var i = 0; i < 12; i++) { // toggle 20 random gliders in different directions
      var location = keyGen();
      this.props.toggle(shapes.glider(location));
    }

    // for (var i = 0; i < 20; i++) { // 20 random blinkers
    //   var key = (5 + Math.floor(Math.random() * 50)) + 300 + (Math.floor(Math.random() * 50) * 60);
    //   this.props.toggle(shapes.blinker(key, 1));
    // }
  }

  componentDidMount() {
    // this.props.toggle(shapes.random(this.props.store.stats.cellCount));
  }

  simulate() {
    this.iterate = setInterval(() => {
      this.props.toggle(nextGen(this.props.store.cellState));
      this.props.iterate('next');
    }, 10)
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

  resetButton(e) {
    e.preventDefault();
    this.setState({
      started: false
    });
    this.endSimulation();
    this.props.iterate('reset');
  }

  render() {
    return (
      <div id='main'>
        <h1 className='center title'>Game of Life</h1>
        <div className='container'>
          <div className='row'>

            <div className={ `col-lg-7 col-md-12 col-sm-12 col-xs-12` } >
              <Board />
            </div>

            <div className='col-lg-5 col-md-12 col-sm-12 col-xs-12'>

              <h2 className='center no-margin'>Iteration: { this.props.store.iteration }</h2>

              <Options simulationRunning={ this.state.started } />

              <p className='center'>
                <button type='button' 
                        className={ `btn btn-success btn-lg iteration-btn` }
                        disabled={ `${ this.state.started ? 'disabled' : '' }` }
                        onClick={ this.startButton.bind(this) } >Start</button>
                <button type='button' 
                        className={ `btn btn-danger btn-lg iteration-btn` } 
                        disabled={ `${ this.state.started ? '' : 'disabled' }` } 
                        onClick={ this.stopButton.bind(this) } >Stop</button>
                <button type='button' 
                        className='btn btn-default btn-lg iteration-btn' 
                        onClick={ this.resetButton.bind(this) } >Reset</button>
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
  },
  initialCellCount: count => {
    dispatch(adjustCellCount(count));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);