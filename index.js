// Author: Jarrett Cruger
//
// Module for experimenting with XHR using a stream interface

var Request = require('./lib/request');

module.exports = function (options, cb) {
    return new xhr(options, cb);
};


function xhr (options, cb) {
    var self = this;
    this.xhr = request()


}

