var PeerServer = require('peer').PeerServer;
var server = new PeerServer({port: 9000, path: '/myapp'});

console.log('PeerServer is running on port 9000');
server.on('connection', function(id) { 
	console.log(id);
	//console.log(server);
});

