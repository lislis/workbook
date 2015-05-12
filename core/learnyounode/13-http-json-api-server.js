var http = require('http')
var url = require('url')

var server = http.createServer(function (req, res) {

  if (req.method == 'GET') {

    var path = url.parse(req.url)

    if (path.pathname == '/api/parsetime') {

    } else if (path.pathname == '/api/unixtime') {

    }
  }


}).listen(process.argv[2]);