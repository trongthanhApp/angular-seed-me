var connect = require('connect');
var serveStatic = require('serve-static');

var appConnect = connect();
appConnect.use(serveStatic("./angularjs/Chapter07"));
appConnect.listen(5000);


