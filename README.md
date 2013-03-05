xhr-stream
===
Create an XHR request that returns a writeable response stream. Based on Streams2

Will only work on current `node 0.9.x` or `0.10` when that comes out

This is used as an experiment to better teach myself streams2 (reading the [docs][streamDocs] only does so much)

Status
------
Update:

So it seems to be working (kind of). I am able to make the request and it
returns a response but I am unable to get data from calling `var data = res.read()`
once the stream is `readable`. More investigation is required.

I am beginning to think that it could have something to do with how the
`res._read` function is implemented.


### Materials used: ###

* [@Raynos][raynos] on IRC (Thank you)
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
[raynos]: https://github.com/Raynos
