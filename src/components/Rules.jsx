import React, { Component } from 'react';

class Rules extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.rules = {
      underPopulation: 'Live cells with fewer than 2 live neighbor die',
      stability: 'Live cells with 2 or 3 live neighbor lives on',
      overPopulation: 'Live cells with more than 3 live neighbor die',
      reproduction: 'Dead cells with 3 live neighbors becomes alive'
    }
  }

  render() {
    return (
      <div id='rules' className='dropup pull-right'>
        <button className='btn btn-info' data-toggle='dropdown' >Rules</button>
        <ul className='dropdown-menu dropdown-menu-right' role='menu'>
          <li className='text-right'><a href='#' data-toggle='tooltip' 
                 data-placement='left' 
                 title={ this.rules.underPopulation } >Under-population</a></li>
          <li className='text-right'><a href='#' 
                 data-toggle='tooltip' 
                 data-placement='left' 
                 title={ this.rules.stability } >Stability</a></li>
          <li className='text-right'><a href='#' 
                 data-toggle='tooltip' 
                 data-placement='left' 
                 title={ this.rules.overPopulation } >Over-population</a></li>
          <li className='text-right'><a href='#' 
                 data-toggle='tooltip' 
                 data-placement='left' 
                 title={ this.rules.reproduction } >Reproduction</a></li>
        </ul>
      </div>
    )
  }
}

export default Rules;