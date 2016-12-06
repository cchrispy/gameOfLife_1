import React, { Component } from 'react';
import { connect } from 'react-redux';

import { adjustCellCount, adjustGliderCount, adjustBlinkerCount } from '../actions/statsAction.js';

class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cellCountInput: 400,
      gliderCountInput: 0,
      blinkerCountInput: 0
    }
  }

  adjustCellCount(e) {
    e.preventDefault();
    this.setState({
      cellCountInput: e.target.value,
      gliderCountInput: 0,
      blinkerCountInput: 0
    })
  }

  adjustGliderCount(e) {
    e.preventDefault();
    this.setState({
      cellCountInput: 0,
      gliderCountInput: e.target.value
    })
  }

  adjustBlinkerCount(e) {
    e.preventDefault();
    this.setState({
      cellCountInput: 0,
      blinkerCountInput: e.target.value
    })
  }

  submit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div id='options'>
        <form onSubmit={ this.submit.bind(this) } >
          <div className='form-group'>
            <label htmlFor='cellCount'>Number of starting cells: { this.state.cellCountInput } </label>
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
            <label htmlFor='gliderCount'>Number of gliders: { this.state.gliderCountInput } </label>
            <input type='range'
                   min='0'
                   max='10'
                   value={ this.state.gliderCountInput }
                   step='1'
                   className='form-control'
                   onChange={ this.adjustGliderCount.bind(this) }
                   disabled={ this.props.simulationRunning ? true : false } 
                   id='gliderCount' ></input>
          </div>
          <div className='form-group'>
            <label htmlFor='blinkerCount'>Number of blinkers: { this.state.blinkerCountInput } </label>
            <input type='range'
                   min='0'
                   max='10'
                   value={ this.state.blinkerCountInput }
                   step='1'
                   className='form-control'
                   onChange={ this.adjustBlinkerCount.bind(this) }
                   disabled={ this.props.simulationRunning ? true : false } 
                   id='blinkerCount' ></input>
          </div>

          <button type='submit' className='btn btn-primary'>Submit</button>
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
  adjustGliderCount: gliderCount => {
    dispatch(adjustGliderCount(gliderCount));
  },
  adjustBlinkerCount: blinkerCount => {
    dispatch(adjustBlinkerCount(blinkerCount));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Options);