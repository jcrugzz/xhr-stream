var xhr = require('../');

xhr({
    method: 'GET',
    path: '/doom'
}, function (res) {
    console.log(res);
});
