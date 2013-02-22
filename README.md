XHR
===
Create an XHR request that returns a readable stream response. Based on Streams2

Will only work on current `node 0.9.x` or `0.10` when that comes out

This is used as an experiment to better teach myself streams2 (reading the [docs][streamDocs] only does so much)

Status
------

Currently returns a function that does very little for you, wrapping my head
around the implementation of this streams2 shenanigans.

*MUST MAKE WORK!*

### Materials used: ###

* [Stream Docs][streamDocs]
* [Binary XHR][binaryXHR] (courtesy of [@maxogden][maxogden])
* [http-browserify][httpbrowser] (courtesy of [@substack][substack])
* [Mozilla Docs][mozillaXHR]

[mozillaXHR]: https://developer.mozilla.org/en-US/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest
[substack]: https://github.com/substack/http-browserify
[maxogden]: https://github.com/maxogden
[binaryXHR]: https://github.com/maxogden/binary-xhr/blob/master/index.js
[streamDocs]: https://github.com/joyent/node/blob/master/doc/api/stream.markdown
