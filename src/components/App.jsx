// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { reducer, 
//          incrementActionCreator, 
//          decrementActionCreator, 
//          colorActionCreator 
//        } from '../reducers/tutorial';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {

//     };

//   }




//   render() {
//     return (
//       <div>
//         Hello world!
//         <ConnectedCounter />
//         Color: { this.props.color }

//         <input type="text" onChange={ event => this.props.changeColor(event.target.value) }/>


//       </div>
//     )
//   }
// }

// class Counter extends Component {

//   // increment() {
//   //   /* SOMETHING HERE */
//   //   console.log('I HAVE BEEN CLICKED');
//   //   this.props.addOne();
//   // }

//   decrement() {
//     this.props.minusOne();
//   }

//   render() {
//     return (
//       <div>
//         COUNTER: { this.props.counter } <br/>
//         <input type="text" onChange={ this.props.addOne } /> <br/>
//         <button onClick={ this.props.minusOne } > decrement </button>
//       </div>
//     )
//   }
// }

// var mapStateToPropsApp = state => ({
//   color: state.color,
// });




// var mapStateToPropsCounter = state => ({
//   counter: state.counter,
// });


// var mapDispatchToPropsCounter = dispatch => ({
//   addOne: () => {
//     dispatch(incrementActionCreator())
//   },
//   minusOne: () => {
//     dispatch(decrementActionCreator())
//   }
// });

// var mapDispatchToPropsApp = dispatch => ({
//   changeColor: (color) => {
//     dispatch(colorActionCreator(color))
//   }
// })

// var ConnectedCounter = connect(mapStateToPropsCounter, mapDispatchToPropsCounter)(Counter);




// export default connect(mapStateToPropsApp, mapDispatchToPropsApp)(App);

// // export default App;