webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var common = __webpack_require__(1);
	var shared = __webpack_require__(2);
	__webpack_require__(17);
	var React = __webpack_require__(19);
	var ReactDOM = __webpack_require__(176);
	var Uploader = __webpack_require__(177);

	ReactDOM.render(React.createElement(Uploader, null), document.getElementById('uploader'));

/***/ },

/***/ 17:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(18);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./add.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./add.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 18:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(19);

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