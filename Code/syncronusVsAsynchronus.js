var fs = require("fs");

// read synchronus
var data1 = fs.readFileSync("input.txt");

// read asynchronus
// convention is that callback is last param
// and err is first param of callback
fs.readFile("input.txt", function (err, data) {
  if (err) {
    console.error(err);
    return;
  }

  console.log(data.toString());
});
