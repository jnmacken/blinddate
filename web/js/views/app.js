var app = app || {};

(function ($) {
	'use strict';

	// overall view
	app.AppView = Backbone.View.extend({

		el: '#bdapp',

		events: {
			'click #goprof': 'switchprof',
		},
		
		initialize: function() {
		
			this.interchange = $('#interchange');
		//	this.render();
		this.listenTo(app.profile, 'change', this.switchvideo);
		},
		
		render: function () {
		
			this.switchvideo();

		},
		
		switchvideo: function() {
		
			this.interchange.children().remove();
			this.interchange.append(new app.VideoView().render().el);
		
		},
		
		switchprof: function() {
		
			this.interchange.children().remove();
			this.interchange.append(new app.ProfileView().render().el);
			
		},

	});

})(jQuery);
