'use strict';

var React = require('react');
var _  = require('underscore');
var Img = require('./image.jsx');

var ImageRow = React.createClass({

    render: function () {
        var images = _.map(this.props.images, function (image) {
            return (
                <Img image={image} key={image.id} upvote={this.props.upvote} />
            );
        }, this);
        return (
            <div className="row">
                {images}
            </div>
        );
    }

});

module.exports = ImageRow;