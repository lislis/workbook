var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {

	// good solution says
	// res.writeHead(200, { 'content-type': 'text/plain' })

	fs.createReadStream(process.argv[3]).pipe(res);

}).listen(process.argv[2]);