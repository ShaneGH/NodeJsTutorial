// create server
var http = require("http");

// register callback
http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hi");
})
// listen on port
.listen(1234);

console.log("listening on port 1234");
