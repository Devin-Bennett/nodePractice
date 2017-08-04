var http = require('http');
var app = require('./myfirst');

http.createServer(app.handleRequest).listen(8000);
