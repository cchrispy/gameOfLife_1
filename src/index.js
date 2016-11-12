import React, { Component } from 'react';
import { render } from 'react-dom';
import { makeStore } from 'redux';

import Main from './components/Main.jsx';

render(
  <Main />,
  document.getElementById('main')
);