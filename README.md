xhr-stream
===
Create an XHR request that returns a writeable response stream. Based on Streams2

Will only work on current `node 0.9.x` or `0.10` when that comes out

This is used as an experiment to better teach myself streams2 (reading the [docs][streamDocs] only does so much)

Status
------

Currently returns a function that does very little for you, wrapping my head
around the implementation of this streams2 shenanigans.

Hmm I need to figure out how exactly the translation of the `emit('data')` to
the `emit('readable')` and `stream.read()` scenario. I probably have not fully
conceptualized this yet. Getting closer...

*MUST MAKE WORK!*

### Materials used: ###

* [Stream Docs][streamDocs]
* [Binary XHR][binaryXHR] (courtesy of [@maxogden][maxogden])
* [http-browserify][httpbrowser] (courtesy of [@substack][substack])
* [Mozilla Docs][mozillaXHR]

[mozillaXHR]: https://developer.mozilla.org/en-US/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest
[httpbrowser]: https://github.com/substack/http-browserify
[substack]: https://github.com/substack
[maxogden]: https://github.com/maxogden
[binaryXHR]: https://github.com/maxogden/binary-xhr/blob/master/index.js
[streamDocs]: https://github.com/joyent/node/blob/master/doc/api/stream.markdown
