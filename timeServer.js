var net = require('net');

var strftime = require('strftime');

var server = net.createServer(function (socket) {  
// manejo del socket  

	//var momento = new Date();

	socket.end(strftime('%F %R' + '\n'))

	//console.log("Alguien llama", strftime('%F %T'));

})  

server.listen(process.argv[2])

console.log("Estoy escuchando en el puerto: ", process.argv[2])  