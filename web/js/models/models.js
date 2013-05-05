var app = app || {};

app.Profile = Backbone.Model.extend();

app.ProfileCollection = Backbone.Collection.extend ({
	model : Profile,
	url: "http://0.0.0.0:3000/profiles",
});


