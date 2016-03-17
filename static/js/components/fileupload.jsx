'use strict';

var React = require('react');
var _  = require('underscore');

var FileUploadInput = React.createClass({

    getInitialState: function () {
        return {message: null, error: false};
    },

    isValidFile: function (file) {
        return true;
    },

    handleChange: function (e) {
        var files = this.refs.fileUpload.files;
        if (files.length) {
            var file = files[0];
            if (this.isValidFile(file)) {
                this.setState({message: file.name, error: false});
                var data = {
                    file: file,
                    filename: file.name
                };
                //this.props.inputChanged(this.props.data.Name, data);
            } else {
                this.setState({message: 'Ugyldig fil!', error: true});
            }
        }

    },

    render: function () {

        var id = 'input_file';
        return (
            <div className="form-group">
                <label className="control-label" htmlFor={id} className="col-sm-2 control-label">Choose image</label>
                <div className="col-sm-10">
                    <span className="btn btn-default btn-file">
                        Browse <input
                            ref="fileUpload"
                            type="file"
                            accept={'image/jpeg'}
                            onChange={this.handleChange}/>
                    </span>
                    <span className="filename text-muted">{this.state.message}</span>
                </div>
            </div>
        );
    }
});

module.exports = FileUploadInput;
