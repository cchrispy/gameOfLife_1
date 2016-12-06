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
          
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({

})

export default connect()(Options);