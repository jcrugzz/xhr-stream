// Author: Jarrett Cruger
//
// Response Stream
//

var inherits = require('inherits');
var readable = require('stream').readable;

module.exports = Response;

inherits(Response, readable);

function Response (res) {
    this.offset = 0;
    readable.call(this);

};
