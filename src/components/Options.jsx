import React, { Component } from 'react';
import { connect } from 'react-redux';

class Options extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className='form-group'>
          <label htmlFor='cellCount'>Number of cells</label>
          <input type='range' 
                 min='10'
                 max='3000'
                 value='400'
                 className='form-control' 
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