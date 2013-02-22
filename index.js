// Author: Jarrett Cruger
//
// Module for experimenting with XHR using a stream interface

var readable = require('stream').Readable;
var inherits = require('inherits');

module.exports = function (options, cb) {
    return new xhr(options, cb);
};

inherits(xhr, readable);

function xhr (options, cb) {
    readable.call(this);

    var self = this;
    this.xhr = new XMLHttpRequest();

}

