var connect = require('connect');
var serveStatic = require('serve-static');

var appConnect = connect();
appConnect.use(serveStatic("./angularjs/Chapter01"));
appConnect.listen(5000);


