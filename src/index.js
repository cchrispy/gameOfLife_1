/*************************************************************/
/* * * * * * * * * * CONWAY'S GAME OF LIFE * * * * * * * * * */
/*************************************************************/
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/* * * * * * * * * * * * * * RULES * * * * * * * * * * * * * */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/*                                                           */
/* 1) Under-population:                                      */
/*    Cells with fewer than 2 live neighbor die              */
/*                                                           */
/* 2) Stability:                                             */
/*    Cells with 2 or 3 live neighbor lives on               */
/*                                                           */
/* 3) Over-population:                                       */
/*    Cells with more than 3 live neighbor die               */
/*                                                           */
/* 4) Reproduction:                                          */
/*    Dead cells with 3 live neighbors becomes alive         */
/*                                                           */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */


import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers/reducer.js';
import Main from './components/Main.jsx';

const store = createStore(rootReducer);

const refresh = () => {
  console.log(store.getState());
  render(
    <Provider store={ store }>
      <Main />
    </Provider>,
    document.getElementById('main')
  );
}


refresh();
store.subscribe(refresh);