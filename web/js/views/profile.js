var app = app || {};


(function ($) {

	app.ProfileView = Backbone.View.extend({

		template: _.template($('#profile-template').html()),

		events: {
			'click #psave': 'save',
		},

		render: function () {
			this.$el.html(
				this.template(
					{ 'name':'Jim', 'age':17 }
					//this.model.toJSON()
				)
			);
			return this;
		},

		save: function () {
			
		},

	});

})(jQuery); 
