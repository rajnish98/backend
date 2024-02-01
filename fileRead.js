const fs = require("fs");

function fileload(err, data) {
  console.log(data);
}
fs.readFile("a.txt", "utf-8", fileload); 