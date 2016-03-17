'use strict';

var React = require('react');

var LikeBtn = React.createClass({

    click: function () {
        if (this.props.image.hasVoted) {
            return;
        }
        this.props.onClick(this.props.image.id);
    },

    render: function () {
        var className = 'glyphicon glyphicon-heart-empty like';
        if (this.props.image.hasVoted) {
            className = 'glyphicon glyphicon-heart';
        }
        return (
            <span
                title="Upvote"
                onClick={this.click}
                className={className} />
        );
    }
});

var Img = React.createClass({

    render: function () {
        return (
            <div className="col-md-3 col-xs-6">
                <h4>{this.props.image.title}</h4>
                <div className="thumbnail">
                    <a href={'/images/' + this.props.image.id}>
                        <img src={this.props.image.image} alt={this.props.image.title} />
                    </a>
                    <div className="caption">
                        <span>Score: {this.props.image.score}</span>
                        &nbsp;
                        <LikeBtn
                            image={this.props.image}
                            onClick={this.props.upvote} />
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Img;