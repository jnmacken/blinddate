var app = app || {};


(function ($) {

	app.ProfileView = Backbone.View.extend({

		template: _.template($('#profile-template').html()),

		events: {
			'click #psave': 'save',
		},

		initialize: function() {
			this.listenTo(this.profile, 'change', this.render);
		},

		render: function (eventName) {
			$(this.el).html(
				this.template(
					this.profile.toJSON()
				)
			);
			return this;
		},

		save: function () {
		},

	});

})(jQuery); 
