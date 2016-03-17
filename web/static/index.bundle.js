webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var common = __webpack_require__(1);
	var shared = __webpack_require__(2);
	var React = __webpack_require__(16);
	var ReactDOM = __webpack_require__(173);
	var ImageList = __webpack_require__(177);
	__webpack_require__(180);

	window.renderImageList = function (images) {
	    ReactDOM.render(React.createElement(ImageList, { images: images }), document.getElementById('image-list'));
	};

/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(16);
	var _ = __webpack_require__(176);
	var ImageRow = __webpack_require__(178);

	var ImageList = React.createClass({
	    displayName: 'ImageList',


	    getInitialState: function getInitialState() {
	        return { images: this.props.images };
	    },

	    upvote: function upvote(imageId) {
	        console.log(imageId);

	        var image = _.find(this.state.images, function (image) {
	            return image.id === imageId;
	        });
	        if (!image.hasVoted) {
	            image.score += 1;
	            image.hasVoted = true;
	        }
	        var newImages = _.reject(this.state.images, function (image) {
	            return image.id === imageId;
	        });

	        newImages.push(image);
	        this.setState({ images: newImages });
	    },

	    render: function render() {
	        var rows = _.chain(this.state.images).sortBy(function (image) {
	            return -image.score;
	        }).groupBy(function (element, index) {
	            return Math.floor(index / 4);
	        }).toArray().map(function (images, idx) {
	            var key = _.pluck(images, 'id');
	            return React.createElement(ImageRow, {
	                images: images,
	                upvote: this.upvote,
	                key: key.join('_') });
	        }, this).value();

	        return React.createElement(
	            'div',
	            { className: 'image-list' },
	            rows
	        );
	    }
	});

	module.exports = ImageList;

/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(16);
	var _ = __webpack_require__(176);
	var Img = __webpack_require__(179);

	var ImageRow = React.createClass({
	    displayName: 'ImageRow',


	    render: function render() {
	        var images = _.map(this.props.images, function (image) {
	            return React.createElement(Img, { image: image, key: image.id, upvote: this.props.upvote });
	        }, this);
	        return React.createElement(
	            'div',
	            { className: 'row' },
	            images
	        );
	    }

	});

	module.exports = ImageRow;

/***/ },

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(16);

	var LikeBtn = React.createClass({
	    displayName: 'LikeBtn',


	    click: function click() {
	        if (this.props.image.hasVoted) {
	            return;
	        }
	        this.props.onClick(this.props.image.id);
	    },

	    render: function render() {
	        var className = 'glyphicon glyphicon-heart-empty like';
	        if (this.props.image.hasVoted) {
	            className = 'glyphicon glyphicon-heart';
	        }
	        return React.createElement('span', {
	            title: 'Upvote',
	            onClick: this.click,
	            className: className });
	    }
	});

	var Img = React.createClass({
	    displayName: 'Img',


	    render: function render() {
	        return React.createElement(
	            'div',
	            { className: 'col-md-3 col-xs-6' },
	            React.createElement(
	                'h4',
	                null,
	                this.props.image.title
	            ),
	            React.createElement(
	                'div',
	                { className: 'thumbnail' },
	                React.createElement(
	                    'a',
	                    { href: '/images/' + this.props.image.id },
	                    React.createElement('img', { src: this.props.image.image, alt: this.props.image.title })
	                ),
	                React.createElement(
	                    'div',
	                    { className: 'caption' },
	                    React.createElement(
	                        'span',
	                        null,
	                        'Score: ',
	                        this.props.image.score
	                    ),
	                    ' ',
	                    React.createElement(LikeBtn, {
	                        image: this.props.image,
	                        onClick: this.props.upvote })
	                )
	            )
	        );
	    }
	});

	module.exports = Img;

/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(181);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./index.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 181:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".like {\n    cursor: pointer;\n}", ""]);

	// exports


/***/ }

});