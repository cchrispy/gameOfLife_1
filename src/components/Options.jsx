import React, { Component } from 'react';
import { connect } from 'react-redux';

import Rules from './Rules.jsx';
import toggle from '../actions/toggleAction.js';
import { next, prev, reset } from '../actions/iterationAction.js';
import shapes from '../helpers/shapesGen.js';
import keyGen from '../helpers/keyGen.js';
import { adjustCellCount } from '../actions/statsAction.js';

class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cellCountInput: 400,
      gliderCountInput: 0,
      blinkerCountInput: 0,
      beaconCountInput: 0,
      lightweightSpaceshipCountInput: 0,
    }
  }

  adjustCellCount(e) {
    e.preventDefault();
    this.setState({
      cellCountInput: e.target.value,
      gliderCountInput: 0,
      blinkerCountInput: 0,
      beaconCountInput: 0,
      lightweightSpaceshipCountInput: 0,
    })
  }

  adjustGliderCount(e) {
    e.preventDefault();
    this.setState({
      cellCountInput: (e.target.value * 5) 
                      + (this.state.blinkerCountInput * 3) 
                      + (this.state.beaconCountInput * 7)
                      + (this.state.lightweightSpaceshipCountInput * 11),
      gliderCountInput: e.target.value
    });
  }

  adjustBlinkerCount(e) {
    e.preventDefault();
    this.setState({
      cellCountInput: (e.target.value * 3) 
                      + (this.state.gliderCountInput * 5) 
                      + (this.state.beaconCountInput * 7)
                      + (this.state.lightweightSpaceshipCountInput * 11),
      blinkerCountInput: e.target.value
    });
  }

  adjustBeaconCount(e) {
    e.preventDefault();
    this.setState({
      cellCountInput: (e.target.value * 7) 
                      + (this.state.gliderCountInput * 5) 
                      + (this.state.blinkerCountInput * 3)
                      + (this.state.lightweightSpaceshipCountInput * 11),
      beaconCountInput: e.target.value
    })
  }

  adjustLightweightSpaceshipCount(e) {
    e.preventDefault();
    this.setState({
      cellCountInput: (e.target.value * 11) 
                      + (this.state.gliderCountInput * 5) 
                      + (this.state.blinkerCountInput * 3)
                      + (this.state.beaconCountInput * 7),
      lightweightSpaceshipCountInput: e.target.value
    })
  }

  submit(e) {
    e.preventDefault();
    this.props.newBoard();

    if (!this.state.gliderCountInput 
        && !this.state.blinkerCountInput
        && !this.state.beaconCountInput
        && !this.state.lightweightSpaceshipCountInput) { // random cells
      this.props.toggle(shapes.random(this.state.cellCountInput));
    } else {
      for (var i = 0; i < this.state.gliderCountInput; i++) { // gliders
        this.props.toggle(shapes.glider(keyGen()));
      };
      for (var i = 0; i < this.state.blinkerCountInput; i++) { // blinkers
        this.props.toggle(shapes.blinker(keyGen()));
      }
      for (var i = 0; i < this.state.beaconCountInput; i++) { // beacons
        this.props.toggle(shapes.beacon(keyGen()));
      }
      for (var i = 0; i < this.state.lightweightSpaceshipCountInput; i++) { // lightweightSpaceships
        this.props.toggle(shapes.lightweightSpaceship(keyGen() - 61));
      }
    }

    this.props.adjustCellCount(this.state.cellCountInput);
    
  }

  render() {
    return (
      <div id='options'>
        <form onSubmit={ this.submit.bind(this) } >

          <div className='form-group'>
            <label htmlFor='cellCount'>Number of starting cells: ~{ this.state.cellCountInput } </label>
            <input type='range' 
                   min='10'
                   max='1000'
                   value={ this.state.cellCountInput }
                   step='1'
                   className='form-control' 
                   onChange={ this.adjustCellCount.bind(this) } 
                   disabled={ this.props.simulationRunning ? true : false } 
                   id='cellCount' ></input>
          </div>

          <div className='form-group'>
            <label htmlFor='blinkerCount'>Number of blinkers: { this.state.blinkerCountInput } </label>
            <input type='range'
                   min='0'
                   max='12'
                   value={ this.state.blinkerCountInput }
                   step='1'
                   className='form-control'
                   onChange={ this.adjustBlinkerCount.bind(this) }
                   disabled={ this.props.simulationRunning ? true : false } 
                   id='blinkerCount' ></input>
          </div>

          <div className='form-group'>
            <label htmlFor='beaconCount'>Number of beacons: { this.state.beaconCountInput } </label>
            <input type='range'
                   min='0'
                   max='12'
                   value={ this.state.beaconCountInput }
                   step='1'
                   className='form-control'
                   onChange={ this.adjustBeaconCount.bind(this) }
                   disabled={ this.props.simulationRunning ? true : false }
                   id='beaconCount' ></input>
          </div>

          <div className='form-group'>
            <label htmlFor='gliderCount'>Number of gliders: { this.state.gliderCountInput } </label>
            <input type='range'
                   min='0'
                   max='12'
                   value={ this.state.gliderCountInput }
                   step='1'
                   className='form-control'
                   onChange={ this.adjustGliderCount.bind(this) }
                   disabled={ this.props.simulationRunning ? true : false } 
                   id='gliderCount' ></input>
          </div>

          <div className='form-group'>
            <label htmlFor='lightweightSpaceshipCount'>Number of lightweight spaceships: { this.state.lightweightSpaceshipCountInput } </label>
            <input type='range'
                   min='0'
                   max='10'
                   value={ this.state.lightweightSpaceshipCountInput }
                   step='1'
                   className='form-control'
                   onChange={ this.adjustLightweightSpaceshipCount.bind(this) }
                   disabled={ this.props.simulationRunning ? true : false }
                   id='lightweightSpaceshipCount' ></input>
          </div>


          <button type='submit' 
                  className='btn btn-primary' 
                  disabled={ this.props.simulationRunning ? 'disabled' : '' } >Submit</button>

          <Rules />

        </form>
      </div>
    )
  }
}

const mapStateToProps = state => state.stats;

const mapDispatchToProps = dispatch => ({
  adjustCellCount: cellCount => {
    dispatch(adjustCellCount(cellCount));
  },
  newBoard: () => {
    dispatch(reset());
  },
  toggle: cells => {
    dispatch(toggle(cells));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Options);