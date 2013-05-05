var app = app || {};


(function ($) {

	app.VideoView = Backbone.View.extend({

		template: _.template($('#video-template').html()),

		render: function () {
			this.$el.html(this.template());

			if (PeerConnection) {
				rtc.createStream({
					'video': true,
					'audio': true
				}, function (stream) {
					var video = document.createElement('video');
					video.src = URL.createObjectURL(stream);
					video.play();

					$('#video-local').append(video);
				});

				var loc = 'ws:'
					+ window.location.href.substring(window.location.protocol.length).split(':')[0]
						.split('/')[2]
					+ ':3000/';

				var socket = io.connect(loc, { resource : 'online' });
				socket.on('connect', function() {
					socket.emit('match', app.profile.id);
				});
				socket.on('matched', function (room) {
					rtc.connect(loc, room);

					rtc.on('add remote stream', function (stream, socketId) {
						var video = document.createElement('video');
						video.id = socketId;
						$('#video-remote').append(video);
						rtc.attachStream(stream, video.id);
						video.play();
					});

					rtc.on('disconnect stream', function (socketId) {
						$('#'+socketId).remove();
					});
				});
			}

			return this;
		},

	});

})(jQuery); 
