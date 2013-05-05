var app = app || {};

(function ($) {
	'use strict';

	// overall view
	app.AppView = Backbone.View.extend({

		el: '#bdapp',

		initialize: function() {

			this.render();

		},

		render: function () {

			this.$el.append(
				new app.ProfileView().render().el
			);

		},

	});

})(jQuery);
