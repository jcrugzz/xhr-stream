
var http = require('http');
var ecstatic = require('ecstatic')(__dirname);

var server = http.createServer(function (req, res) {
    if (req.url === '/doom') {
        res.setHeader('contentType', 'multipart/octet-stream');

        res.write('d');
        var i = 0;
        var iv = setInterval(function () {
            res.write('o');
            if (i++ >= 10) {
                clearInterval(iv);
                res.end('m');
            }
        }, 500);
    } else ecstatic(req, res);
});

server.listen(3000);
