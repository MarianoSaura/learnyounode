var http = require('http');
var map = require('through2-map');

var server = http.createServer(function(req, res) {

	if(req.method === 'POST') {
		req.pipe(map(function (buffer) { //pipe => | (para pasar)
	    return buffer.toString().toUpperCase();
	  	})).pipe(res);
	} else {
      res.end('Solo acepta el método POST');
    }


});


server.listen(process.argv[2], function(){
	console.log("Escuchando en el puerto:", process.argv[2])
});

