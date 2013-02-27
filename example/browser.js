var xhr = require('../');

xhr({
    method: 'GET',
    path: '/doom'
}, function (res) {
    // Example courtesy of @substack
    var div = document.getElementById('result');
    if (!div.style) div.style = {};
    div.style.color = 'rgb(80,80,80)';

    res.on('readable', function () {
        var buf = res.read();
        div.innerHTML += buf;
    });

    res.on('end', function () {
        div.style.color = 'black';
        div.innerHTML += '!';
    });
});
