/* bald *\ \* local serve */

var connect = require("connect");
var serveStatic = require("serve-static");
connect().use(serveStatic(__dirname + "/bin")).listen(9999);