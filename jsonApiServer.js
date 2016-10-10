var http = require('http');
var url = require('url');

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
