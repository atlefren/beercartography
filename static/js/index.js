'use strict';
var common = require('./common');
var shared = require('./shared');
var React = require('react');
var ReactDOM = require('react-dom');
var Hello = require('./hello.jsx');
require('../css/add.css');


ReactDOM.render(<Hello/>, document.getElementById('hello'));
