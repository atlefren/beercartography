'use strict';

var React = require('react');
var _  = require('underscore');
var ImageRow = require('./image-row.jsx');

var ImageList = React.createClass({

    getInitialState: function () {
        return {images: this.props.images};
    },

    upvote: function (imageId) {
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
        this.setState({images: newImages});
    },

    render: function () {
        var rows = _.chain(this.state.images)
            .sortBy(function (image) {
                return -image.score;
            })
            .groupBy(function (element, index){
                return Math.floor(index / 4);
            })
            .toArray()
            .map(function (images, idx) {
                var key = _.pluck(images, 'id');
                return (
                    <ImageRow
                        images={images}
                        upvote={this.upvote}
                        key={key.join('_')} />
                );
            }, this)
            .value();

        return (
            <div className="image-list">
                {rows}
            </div>
        );
    }
});

module.exports = ImageList;
