var app = app || {};


(function ($) {

	app.ProfileView = Backbone.View.extend({

		template: _.template($('#profile-template').html()),

		events: {
			'click #psave': 'save',
		},

		render: function (eventName) {
			this.$el.html(
				this.template(
					this.model.toJSON()
				)
			);
			return this;
		},

		save: function () {
		},

	});

})(jQuery); 
