import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Form from './Form';

import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

const renderform = document.getElementById('form');
ReactDOM.render(
  <Form />, renderform
);
