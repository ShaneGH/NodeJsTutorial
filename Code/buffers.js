// Js is a sext based language, it doesn't
// deal wel with bytes
// node js uses buffers for dealing with bytes,
// e.g. in TCP/file system sitations

// size = 10
var buffer1 = new Buffer(10);

// contains values
var buffer2 = new Buffer([10,20,30,40]);
var buffer3 = new Buffer("Hello!", "utf-8");

// buffers have a huge amount of fuctionality, e.g. Concat, toJson, compare, slice
// + more + lower level stuff 
