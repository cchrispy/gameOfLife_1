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

    this.props.toggle(shapes.random(400)); // start with 400 random cells

    // for (var i = 0; i < 300; i++) { // toggle 300 random cells confined within 3 units from edge
    //   this.props.toggle( { [keyGen()]: true } );
    // }

    // for (var i = 0; i < 12; i++) { // toggle 20 random gliders in different directions
    //   var location = keyGen();
    //   this.props.toggle(shapes.glider(location));
    // }

    // for (var i = 0; i < 20; i++) { // 20 random blinkers
    //   var key = (5 + Math.floor(Math.random() * 50)) + 300 + (Math.floor(Math.random() * 50) * 60);
    //   this.props.toggle(shapes.blinker(key, 1));
    // }
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

  stepButton(e) {
    e.preventDefault();
    this.props.toggle(nextGen(this.props.store.cellState));
    this.props.iterate('next');
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
                        disabled={ `${ this.state.started ? 'disabled' : '' }` }
                        onClick={ this.stepButton.bind(this) } >Step</button>
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