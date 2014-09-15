
module.exports = function(dir, file, callback) {

	var fs = require('fs');
	var path = require('path');

	var dir = dir;
	var filter = file;

	var data = [];

	fs.readdir(dir, function(err, list) {

		if (err)
			return callback(err);
		for (var i = 0; i < list.length; i++) {
			if (path.extname(list[i]) === '.'+filter) {
				data.push(list[i]);
				console.log(list[i]);
			}
		};
		callback(null, data);
	});

}
