import React, { Component } from 'react';

class Rules extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // return (
    //   <div id='rules' className='center'>
    //     <div className='dropup'>
    //       <button type='button' 
    //               className='btn btn-info' 
    //               data-toggle='dropdown'>
    //         Rules <span className='caret'></span>
    //       </button>
    //       <ul className='dropdown-menu center'>
    //         <li>hi</li>
    //         <li>yoyoyo</li>
    //       </ul>
    //     </div>
    //   </div>
    // )
    return (
      <div id='rules' className='dropup pull-right'>
        <button className='btn btn-info' data-toggle='dropdown' >Rules</button>
        <ul className='dropdown-menu dropdown-menu-right' role='menu'>
          <li><a href='#'>Rule Numero Uno</a></li>
          <li><a href='#'>Rule Numero Dos</a></li>
          <li><a href='#'>Rule Numero Tres</a></li>
          <li><a href='#'>Rule Numero Quatro</a></li>
        </ul>
      </div>
    )
  }
}

export default Rules;