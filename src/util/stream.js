var fs = require('fs');
console.log(process.argv[2], '->', process.argv[3]);
var readStream = fs.createReadStream(process.argv[2]);
var writeStream = fs.createWriteStream(process.argv[3]);
readStream.on('open', function () {
  readStream.pipe(writeStream);
});
readStream.on('end', function () {
  writeStream.end();
});