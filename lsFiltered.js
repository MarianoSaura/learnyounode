var fs = require('fs');

var path = require('path');

//node(ejecución)[0] programa[1] directorio[2] extension[3]
fs.readdir(process.argv[2], function(error, files) {

	files.forEach(function(file) {

		var ext = path.extname(file);

		var anyadido = '.' + process.argv[3];

		if(anyadido == ext){

			console.log(file);
		}

	});

});