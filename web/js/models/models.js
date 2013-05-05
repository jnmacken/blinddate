var app = app || {};

app.Profile = Backbone.Model.extend({
urlRoot: "/api/profiles"});

app.ProfileCollection = Backbone.Collection.extend ({
	model : app.Profile,
	url: "/api/profiles",
});

var profiles = new app.ProfileCollection();
profiles.fetch();

