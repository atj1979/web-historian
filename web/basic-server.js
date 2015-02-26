var http = require("http");
var handler = require("./request-handler");
var initialize = require("./initialize.js");
var router = require("./router.js");

// Why do you think we have this here?
// HINT:It has to do with what's in .gitignore
initialize();

var port = 8080;
var ip = "127.0.0.1";
var server = http.createServer(router.route);
console.log("Listening on http://" + ip + ":" + port);
server.listen(port, ip);
