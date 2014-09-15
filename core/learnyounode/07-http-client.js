var http = require('http');

var path = process.argv[2];

http.get(path, function(response) {
	// console.log(response.statusCode);
	response.setEncoding('utf8');
	response.on('data', console.log);
});