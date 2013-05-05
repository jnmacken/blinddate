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

			this.render();

		},
		
		render: function () {

			this.$el.append(
				new app.VideoView().render().el
			);

		},
		
		switchprof: function() {
			this.$el.children().replacewith(new app.ProfileView().render().el)
		},

	});

})(jQuery);
