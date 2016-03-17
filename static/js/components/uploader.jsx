'use strict';
var React = require('react');
var FileUploadInput = require('./fileupload.jsx');

var Uploader = React.createClass({

    render: function () {
        return (
            <form className="form-horizontal">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="col-sm-2 control-label">Title</label>
                    <div className="col-sm-3">
                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Title" />
                    </div>
                </div>
                <FileUploadInput />
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                  </div>
            </form>
        );
    }
});

module.exports = Uploader;
