webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var common = __webpack_require__(70);
	var shared = __webpack_require__(71);
	var React = __webpack_require__(249);
	var ReactDOM = __webpack_require__(102);
	var Hello = __webpack_require__(248);
	__webpack_require__(100);

	ReactDOM.render(React.createElement(Hello, null), document.getElementById('hello'));

/***/ },

/***/ 248:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(249);

	var Hello = React.createClass({
	    displayName: 'Hello',


	    render: function render() {
	        return React.createElement(
	            'p',
	            null,
	            'Hello!!!!'
	        );
	    }
	});

	module.exports = Hello;

/***/ }

});