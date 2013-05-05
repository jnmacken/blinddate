var app = app || {};


(function ($) {

	app.ProfileView = Backbone.View.extend({

		template: _.template($('#profile-template').html()),

		events: {
			'click #psave': 'save',
		},

		initialize: function() {
		},

		render: function (eventName) {
			this.$el.html(
				this.template(
					app.profile.toJSON()
				)
			);
			return this;
		},

		save: function () {
			app.profile.update({
				'name':$('#pname').val(),
				'year':$('#page').val()
			});
		},

	});

})(jQuery); 
