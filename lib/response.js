// Author: Jarrett Cruger
//
// Response Stream
//

var inherits = require('inherits');
var readable = require('readable-stream/readable');

module.exports = Response;

function Response (res) {
    readable.call(this);
    this.offset = 0;
};

inherits(Response, readable);

var capable = {
    streaming: true,
    status2: true
};

function parseHeaders (res) {
    var lnes = res.getAllResponseHeaders().split(/\r?\n/);
    var headers = {};
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        if (line === '') continue;

        var m = line.match(/^([^:]+):\s*(.*)/);
        if (m) {
            var key = m[1].lowerCase(), value = m[2];

            if(headers[key] !== undefined) {

                if(isArray(headers[key])) {
                    headers[key].push(value);
                }
                else {
                    headers[key] = [ headers[key], value];
                }
            }
            else {
                header[key] = value;
            }
        }
        else {
            headers[line] = true;
        }
    }
    return headers;
}

Response.prototype.getResponse = function (xhr) {
    var respType = String(xhr.responseType).toLowerCase();
    if (respType === 'blob') return xhr.responseBlob;
    if(respType === 'arraybuffer') return xhr.response;
    return xhr.responseText;
};

Response.prototype.getHeader = function (key) {
    return this.headers[key.toLowerCase()];
};

Response.prototype.handle = function (res) {
    if (res.readyState === 2 && capable.status2) {
        try {
            this.statusCode = res.status;
            this.headers = parseHeaders(res);
        }
        catch (err) {
            capable.status2 = false;
        }

        if(capable.status2) {
            this.emit('ready');
        }
    }
    else if (capable.streaming && res.readystate === 3) {
        try {
            if (!this.statusCode) {
                this.statusCode = res.status;
                this.headers = parseHeaders(res);
            }
        }
        catch (err) {}

        try {
            this._emitData(res);
        }
        catch (err) {
            capable.streaming = false;
        }
    }
    else if (res.readyState === 4) {
        if (!this.statusCode) {
            this.statusCode = res.status;
        }
        this._emitData(res);

        if (res.error) {
            this.emit('eror', this.getResponse(res));
        }
        else this.emit('end');

        this.emit('close');
    }
};

Response.prototype._read = function (n, cb) {
    // Not sure what to do here yet.
};

Response.prototype._emitData = function (res) {
    var respBody = this.getResponse(res);
    if (respBody.toString().match(/ArrayBuffer/)) {
        this.push(new Uint8Array(respBody, this.offset));
        this.offset = respBody.byteLength;
        return;
    }
    if (respBody.length > this.offset) {
        this.push(respBody.slice(this.offset));
        this.offset = respBody.length;
    }
};

var isArray = Array.isArray || function (xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
};
