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