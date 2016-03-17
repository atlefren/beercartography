'use strict';
var common = require('./common');
var shared = require('./shared');
var React = require('react');
var ReactDOM = require('react-dom');
var ImageList = require('./components/image-list.jsx');
require('../css/index.css');


window.renderImageList = function (images) {
    ReactDOM.render(<ImageList images={images} />, document.getElementById('image-list'));
};
