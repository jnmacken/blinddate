var express = require('express'),
    profile = require('./routes/profiles'),
	uuid = require('node-uuid');
 
var app = express()
, server = require('http').createServer(app)
, webRTC = require('webrtc.io').listen(server)
, io = require('socket.io').listen(server);
 
app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});
 
app.get('/api/profiles', profile.findAll);
app.get('/api/profiles/:id', profile.findById);
app.post('/api/profiles', profile.addprofile);
app.put('/api/profiles/:id', profile.updateprofile);
app.delete('/api/profiles/:id', profile.deleteprofile);

io.of('/online').sockets.on('connection', function (socket) {
	console.log('/online connection');
	socket.on('match', function(id) {
		var match = findMatch(id);
		if (match && match != socket) {
				var room = uuid.v4();
				socket.emit('matched', room);
				match.emit('matched', room);
		}
	});
});

var findMatch = function (id) {
	return io.sockets[0];
};

server.listen(3000);
console.log('Listening on port 3000...');
