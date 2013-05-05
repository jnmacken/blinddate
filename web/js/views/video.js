var app = app || {};


(function ($) {

	app.VideoView = Backbone.View.extend({

		template: _.template($('#video-template').html()),

		render: function () {
			this.$el.html(this.template());

			this.rtc = new WebRTC({
				localVideoEl: 'video-local',
				remoteVideoEl: 'video-remote',
				autoRequestMedia: true,
			});

			this.rtc.on("readyToCall", function() {
				this.rtc.joinRoom("asdfaasdf");
				});
			return this;
		},

	});

})(jQuery); 
