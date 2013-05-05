var app = app || {};


(function ($) {

	app.VideoView = Backbone.View.extend({

		template: _.template($('#video-template').html()),

		render: function () {
			this.$el.html(this.template());

			if (PeerConnection) {
				rtc.createStream({
					'video': {'mandatory': {}, 'optional': []},
					'audio': true
				}, function (stream) {
					var video = document.createElement('video');
					video.src = URL.createObjectURL(stream);
					video.play();

					$('#video-local').append(video);
				});

				rtc.connect(
					'ws://' + window.location.href.substring(window.location.protocol.length).split('/')[2] + ':3000',
					'12345'
				);

				rtc.on('add remote stream', function (stream, socketId) {
					var localVideo = document.getElementById('video-local');
					var clone = localVideo.cloneNode(false);
					clone.id = 'remote' + socketId;
					rtc.attachStream(stream, clone.id);
					$('#video-remote').append(clone);
				});
			}

			return this;
		},

	});

})(jQuery); 
