//http://127.0.0.1:3333/echo?message=hello
var http = require('http');
var util = require('util');
var url = require('url');

var server = new http.Server();

server.listen(3333, '127.0.0.1');

var counter = 0;
server.on('request', function (req, resp) {
    console.log(req.headers);

    var urlData = url.parse(req.url, true);
    if (urlData.pathname === '/echo' && urlData.query.message) {
        resp.setHeader('Cache-control', 'no-cache'); //заголовки отправятся когда будет вызвано  resp.end
        resp.writeHead(200, "OK", { //заголовки отправятся сразу
            "Cache-control": "no-cache"
        });
        resp.end(util.format("%s, request number:%d", urlData.query.message, ++counter));
    }

    resp.status = 404;
    resp.end("Page not found");

});