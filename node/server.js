var express = require('express'),
    profile = require('./routes/profiles');
 
var app = express()
, server = require('http').createServer(app)
, webRTC = require('webrtc.io').listen(server); 
 
app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});
 
app.get('/profiles', profile.findAll);
app.get('/profiles/:id', profile.findById);
app.post('/profiles', profile.addprofile);
app.put('/profiles/:id', profile.updateprofile);
app.delete('/profiles/:id', profile.deleteprofile);

webRTC.rtc.on('chat_msg', function(data, socket) {
		var roomList = webRTC.rtc.rooms[data.room] || [];

		for (var i = 0; i < roomList.length; i++) {
		var socketId = roomList[i];

		if (socketId !== socket.id) {
		var soc = webRTC.rtc.getSocket(socketId);

		if (soc) {
		soc.send(JSON.stringify({
				"eventName": "receive_chat_msg",
				"data": {
				"messages": data.messages,
				"color": data.color
				}
				}), function(error) {
			if (error) {
			console.log(error);
			}
			});
		}
		}
		}
});

server.listen(3000);
console.log('Listening on port 3000...');
