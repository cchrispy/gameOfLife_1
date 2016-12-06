import React, { Component } from 'react';
import { connect } from 'react-redux';

class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cellCountInput: 400
    }
  }

  adjustCount(e) {
    e.preventDefault();
    this.setState({
      cellCountInput: e.target.value
    })
  }

  render() {
    return (
      <div>
        <div className='form-group'>
          <label htmlFor='cellCount'>Number of cells: { this.state.cellCountInput } </label>
          <input type='range' 
                 min='10'
                 max='1000'
                 value={ this.state.cellCountInput }
                 step='1'
                 className='form-control' 
                 onChange={ this.adjustCount.bind(this) } 
                 id='cellCount' ></input>
        </div>
        <div className='form-group'>

        </div>
      </div>
    )
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({

})

export default connect()(Options);