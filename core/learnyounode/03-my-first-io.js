var fs = require('fs');

var textBuffer = fs.readFileSync(process.argv[2]);
var string = textBuffer.toString();
var splits = string.split('\n');

console.log(splits.length -1 );
