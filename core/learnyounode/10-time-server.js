var net = require('net');

var server = net.createServer(function(socket) {
	var date = new Date();
	var month = Number(date.getMonth() + 1);
	if (month < 10) {
		month = '0'+month;
	}
	socket.write(date.getFullYear() +'-'+ month +'-'+ date.getDate() +' '+ date.getHours() +':'+ date.getMinutes() + '\n' );
	socket.end();
	//socket.end(date.getFullYear() +'-'+ (Number(date.getMonth()) + 1) +'-'+ date.getDate() +' '+ date.getHours() +':'+ date.getMinutes() + '\n');
});
server.listen(process.argv[2]);