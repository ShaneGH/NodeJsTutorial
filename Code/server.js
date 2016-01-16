var http = require("http");

http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hi");
}).listen(1234);

console.log("listening on port 1234");
