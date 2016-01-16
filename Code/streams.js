// Streams are istances of EventEmitters

var fs = require("fs");
var zib = require("zlib");  // gzip

// READ
var reader = fs.createStream("file.txt");
reader.setEncoding("UTF8");

reader.on("data", function (data){
  // a piece of data is ready
});

reader.on("end", function (data){
  // all data has been read
});

// WRITE
var writer = fs.createWriteStream("output.txt");
writer.write("some content", "UTF8");
writer.end();

writer.on("finish", function (){
});

writer.on("error", function (err){
});

//PIPE 1
var reader1 = fs.createReadStream("input.txt");
var writer1 = fs.createWriteStream("output.txt");
reader1.pipe(writer1);

//PIPE 2
fs.createReadStream("input.txt")
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream("output.txt.gz"));
