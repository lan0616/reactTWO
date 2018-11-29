/*
 * @Author: mikey.liucuilan 
 * @Date: 2018-11-05 09:57:01 
 * @Last Modified by:   mikey.liucuilan 
 * @Last Modified time: 2018-11-05 09:57:01 
 */

import React from 'react';
import ReactDOM from 'react-dom';
import 'common/style.css';
import App from 'comp/App.jsx';
import * as serviceWorker from './serviceWorker';
import './mock/';
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
