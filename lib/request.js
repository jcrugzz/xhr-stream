// Author: Jarrett Cruger
//
// Request Stream
//

var inherits = require('inherits');
var writeable = require('readable-stream/writable');
var concatStream = require('concat-stream');

var Response = require('./response');

module.exports = Request;

function Request (xhr, options) {
    writeable.call(this);
    var self = this;
    this.xhr = xhr;
    this.body = concatStream();

    var uri = options.host + ':' + options.port + (options.path || '/');

    xhr.open(
        options.method || 'GET',
        (options.scheme || 'http') + '://' + uri,
        true
    );

    if (options.headers) {
        var keys = objectKeys(options.headers);
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if(!self.isSafeRequestHeader(key)) return;
            var value = options.headers[key];
            if (isArray(value)) {
                for (var j = 0; j < value.length; j++) {
                    xhr.setRequestHeader(key, value[j]);
                }
            }
            else xhr.setRequestHeader(key, value);
        }
    }

    if (options.auth) {
        this.setHeader('Authorization', 'Basic' + new Buffer(options.auth).toString('base64'));
    }

    var res = new Response;
    res.on('close', function () {
        self.emit('close');
    });

    res.on('readable', function () {
        res.read();
        self.emit('response', res);
    });

    xhr.onreadystatechange = function () {
        res.handle(xhr);
    };

};

inherits(Request, writeable);

Request.prototype.write = function (s) {
    this.body.write(s);
};

Request.prototype._write = function (s, cb) {
    // Not sure what to do here yet
};

Request.prototype.destroy = function (s) {
    this.xhr.abort();
    this.emit('close');
};

Request.prototype.end = function (s) {
    if (s !== undefined) this.body.write(s);
    this.body.end();
    this.xhr.send(this.body.getBody());
};

Request.unsafeHeaders = [
    "accept-charset",
    "accept-encoding",
    "access-control-request-headers",
    "access-control-request-method",
    "connection",
    "content-length",
    "cookie",
    "cookie2",
    "content-transfer-encoding",
    "date",
    "expect",
    "host",
    "keep-alive",
    "origin",
    "referer",
    "te",
    "trailer",
    "transfer-encoding",
    "upgrade",
    "user-agent",
    "via"
];

Request.prototype.isSafeRequestHeader = function (headerName) {
    if (!headerName) return false;
    return indexOf(Request.unsafeHeaders. headerName.toLowerCase()) === -1;
};

var objectKeys = Object.keys || function (obj) {
    var keys = [];
    for (var key in obj) keys.push(key);
    return keys;
};

var isArray = Array.isArray || function (xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
};

var indexOf = function (xs, x) {
    if (xs.indexOf) return xs.indexOf(x);
    for (var i= 0; i < xs.length; i++) {
        if (xs[i] === x) return i;
    }
    return -1;
};
