'use strict';

var common = require('./common');
var shared = require('./shared');
require('../css/add.css');
var React = require('react');
var ReactDOM = require('react-dom');
var Uploader = require('./components/uploader.jsx');

ReactDOM.render(<Uploader/>, document.getElementById('uploader'));
