var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {

	var objURL = url.parse(req.url, true);
	var fecha = new Date(objURL.query.iso);
	var objJSON;

	//res.write(JSON.stringify(objURL))
	if(req.method === 'GET'){
		if (objURL.pathname === '/api/parsetime') {

			objJSON = {

				'hour': fecha.getHours(),
				'minute': fecha.getMinutes(),
				'second': fecha.getSeconds()

			}

			res.end(JSON.stringify(objJSON));
			

		}else if(objURL.pathname === '/api/unixtime'){

			objJSON = {

				'unixtime': fecha.getTime()

			}


		}else{

	        res.writeHead(404, { 'Content-Type': 'application/json' }); 

			objJSON= {'error' : 'no has elegido la opción correcta'};

		}

	}else{

		res.writeHead(405, { 'Content-Type': 'application/json' }); 
	}

	res.end(JSON.stringify(objJSON));

})

server.listen(process.argv[2], function() {
	console.log("Escuchando en el puerto:", process.argv[2])
});

/*

var parte = url.parse(request.url, true);

if(parte.pathname == "/api/parsetime"){
	var hora = parte.query.iso;
	var dia = hora.getDay();
	var dia = hora.getHour();
	console.log(dia);

}else{
	res.end('Se esperaba una fecha');
}

res.writeHead(200, { 'Content-Type': 'application/json' }); 

server.listen(process.argv[2], function(){
	console.log("Escuchando en el puerto:", process.argv[2]);
});
*/