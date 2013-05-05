var app = app || {};


(function ($) {

	app.ProfileView = Backbone.View.extend({

		template: _.template($('#profile-template').html()),

		events: {
			'click #psave': 'save',
		},

		initialize: function() {
//			this.model = profiles.get;
			this.listenTo(this.model, 'change', this.render);
			this.listenTo(this.model, 'destroy', this.remove);
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
