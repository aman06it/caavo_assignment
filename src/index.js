import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/bootstrap.min.css';
import './index.css';
import './assets/css/all.min.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import '../node_modules/jquery/dist/jquery.slim';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import '../node_modules/popper.js/dist/popper.min.js';



import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
