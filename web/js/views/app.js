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
			this.render();
			this.model = profiles;
			this.listenTo(this.model, 'change', this.switchvideo());
		},
		
		render: function () {
		
			this.switchvideo();

		},
		
		switchvideo: function() {
		
			this.interchange.children().remove();
			this.interchange.children().append(new app.VideoView().render().el);
		
		},
		
		switchprof: function() {
		
			this.interchange.children().remove();
			this.interchange.children().append(new app.ProfileView().render().el);
			
		},

	});

})(jQuery);
