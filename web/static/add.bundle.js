webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var common = __webpack_require__(1);
	var shared = __webpack_require__(2);
	__webpack_require__(14);
	var React = __webpack_require__(16);
	var ReactDOM = __webpack_require__(173);
	var Uploader = __webpack_require__(174);

	ReactDOM.render(React.createElement(Uploader, null), document.getElementById('uploader'));

/***/ },

/***/ 14:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
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

/***/ 15:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".btn-file {\n    position: relative;\n    overflow: hidden;\n}\n.btn-file input[type=file] {\n    position: absolute;\n    top: 0;\n    right: 0;\n    min-width: 100%;\n    min-height: 100%;\n    font-size: 100px;\n    text-align: right;\n    filter: alpha(opacity=0);\n    opacity: 0;\n    outline: none;\n    background: white;\n    cursor: inherit;\n    display: block;\n}\n\n.filename {\n    margin-left: 10px;\n}", ""]);

	// exports


/***/ },

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(16);
	var FileUploadInput = __webpack_require__(175);

	var Uploader = React.createClass({
	    displayName: 'Uploader',


	    render: function render() {
	        return React.createElement(
	            'form',
	            { className: 'form-horizontal' },
	            React.createElement(
	                'div',
	                { className: 'form-group' },
	                React.createElement(
	                    'label',
	                    { htmlFor: 'exampleInputEmail1', className: 'col-sm-2 control-label' },
	                    'Title'
	                ),
	                React.createElement(
	                    'div',
	                    { className: 'col-sm-3' },
	                    React.createElement('input', { type: 'text', className: 'form-control', id: 'exampleInputEmail1', placeholder: 'Title' })
	                )
	            ),
	            React.createElement(FileUploadInput, null),
	            React.createElement(
	                'div',
	                { className: 'form-group' },
	                React.createElement(
	                    'div',
	                    { className: 'col-sm-offset-2 col-sm-10' },
	                    React.createElement(
	                        'button',
	                        { type: 'submit', className: 'btn btn-primary' },
	                        'Submit'
	                    )
	                )
	            )
	        );
	    }
	});

	module.exports = Uploader;

/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var React = __webpack_require__(16);
	var _ = __webpack_require__(176);

	var FileUploadInput = React.createClass({
	    displayName: 'FileUploadInput',


	    getInitialState: function getInitialState() {
	        return { message: null, error: false };
	    },

	    isValidFile: function isValidFile(file) {
	        return true;
	    },

	    handleChange: function handleChange(e) {
	        var files = this.refs.fileUpload.files;
	        if (files.length) {
	            var file = files[0];
	            if (this.isValidFile(file)) {
	                this.setState({ message: file.name, error: false });
	                var data = {
	                    file: file,
	                    filename: file.name
	                };
	                //this.props.inputChanged(this.props.data.Name, data);
	            } else {
	                    this.setState({ message: 'Ugyldig fil!', error: true });
	                }
	        }
	    },

	    render: function render() {

	        var id = 'input_file';
	        return React.createElement(
	            'div',
	            { className: 'form-group' },
	            React.createElement(
	                'label',
	                _defineProperty({ className: 'control-label', htmlFor: id }, 'className', 'col-sm-2 control-label'),
	                'Choose image'
	            ),
	            React.createElement(
	                'div',
	                { className: 'col-sm-10' },
	                React.createElement(
	                    'span',
	                    { className: 'btn btn-default btn-file' },
	                    'Browse ',
	                    React.createElement('input', {
	                        ref: 'fileUpload',
	                        type: 'file',
	                        accept: 'image/jpeg',
	                        onChange: this.handleChange })
	                ),
	                React.createElement(
	                    'span',
	                    { className: 'filename text-muted' },
	                    this.state.message
	                )
	            )
	        );
	    }
	});

	module.exports = FileUploadInput;

/***/ }

});