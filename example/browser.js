var xhr = require('../');
console.log('what the fuck is going on here');
xhr({
    method: 'GET',
    path: '/doom'
}, function (res) {
    // Example courtesy of @substack
    console.log('oh hey there resposne');
    var div = document.getElementById('result');
    if (!div.style) div.style = {};
    div.style.color = 'rgb(80,80,80)';

    res.on('readable', function () {
        console.log('please be READABLE!');
        var buf = res.read();
        div.innerHTML += buf;
    });

    res.on('end', function () {
        div.style.color = 'black';
        div.innerHTML += '!';
    });
});
