import React, { Component } from 'react';
import { connect } from 'react-redux';

class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cellCountInput: 400,
      gliderCountInput: 0
    }
  }

  adjustCellCount(e) {
    e.preventDefault();
    this.setState({
      cellCountInput: e.target.value,
      gliderCountInput: 0
    })
  }

  adjustGliderCount(e) {
    e.preventDefault();
    this.setState({
      cellCountInput: 0,
      gliderCountInput: e.target.value
    })
  }

  submit(e) {
    e.preventDefault();
    console.log('submitted: ', e.target);
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.submit.bind(this) } >
          <div className='form-group'>
            <label htmlFor='cellCount'>Number of cells: { this.state.cellCountInput } </label>
            <input type='range' 
                   min='10'
                   max='1000'
                   value={ this.state.cellCountInput }
                   step='1'
                   className='form-control' 
                   onChange={ this.adjustCellCount.bind(this) } 
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
                   id='gliderCount' ></input>
          </div>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({

})

export default connect()(Options);