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

				rtc.connect(
					'ws://' + window.location.href.substring(window.location.protocol.length).split(':')[0] + ':3000',
					'12345'
				);

				rtc.on('add remote stream', function (stream, socketId) {
					var video = document.createElement('video');
					video.id = socketId;
					$('#video-remote').append(video);
					rtc.attachStream(stream, video.id);
					video.play();
				});
			}

			return this;
		},

	});

})(jQuery); 
