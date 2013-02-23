// Author: Jarrett Cruger
//
// Request Stream
//

var inherits = require('inherits');
var writeable = require('stream').Writeable;

var Response = require('./response');

module.exports = Request;

inherits(Request, writeable);

function Request (xhr, options) {
    var self = this;
    readable.call(this);
    this.xhr = xhr;

    var uri = options.host + ':' + options.port + (options.path || '/');

    xhr.open(
        options.method || 'GET',
        (options. scheme || 'http') + '://' + uri,
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

    var res =

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

