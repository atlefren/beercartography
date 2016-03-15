webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var common = __webpack_require__(70);
	var shared = __webpack_require__(71);
	__webpack_require__(100);
	var React = __webpack_require__(249);
	var ReactDOM = __webpack_require__(102);
	var Uploader = __webpack_require__(261);

	ReactDOM.render(React.createElement(Uploader, null), document.getElementById('uploader'));

/***/ },

/***/ 261:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(249);

	var Uploader = React.createClass({
	    displayName: 'Uploader',


	    render: function render() {
	        return React.createElement(
	            'p',
	            null,
	            'Uploader'
	        );
	    }
	});

	module.exports = Uploader;

/***/ }

});