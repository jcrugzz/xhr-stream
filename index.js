// Author: Jarrett Cruger
//
// Module for experimenting with XHR using a streams2 interface

var Request = require('./lib/request');

module.exports = xhr;

function xhr (options, cb) {
    if (typeof options === 'string') {
        var method = options;
        options = {
            method: method
        }
    } else if (!options) {
        options = {};
    }
    if (!options.host) options.host = window.location.host.split(':')[0];
    if (!options.port) options.port = window.location.port;

    var req = new Request(new window.XMLHttpRequest, options);
    if (options.method.toLowerCase() === 'get') req.end();
    if (cb) req.on('response', cb);
    return req;
}

