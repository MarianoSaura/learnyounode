var http = require('http');
var fs = require('fs');
var bl = require('bl');

var server = http.createServer(function(req, res) {

	var lectura	= fs.createReadStream(process.argv[3]);

	lectura.pipe(res);

	/*
	res.pipe(bl(function(err, data) {

		if (err) {
			return console.log(err.nessage);
		}

		var datos = data.toString();
		respuestas[index] = datos;

		if (contador === 3){
			escribirRespuestas();
		}

	}));
	*/
})

server.listen(process.argv[2], function(){
	console.log("Escuchando en el puerto:", process.argv[2])
})






/*var serverOgject = server.listen(process.argv[2]);



if (serverOgject) {

	console.log("Escuchando en el puerto: ", process.argv[2]);

} else {

	console.log("Error");


}*/