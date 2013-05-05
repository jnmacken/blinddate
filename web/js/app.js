var app = app || {};

$(function () {
	'use strict';

	var id = Math.random() % 10000;
	app.profile = new app.Profile({'id' : '5185b42712739d0000000001'});
	app.profile.fetch();
	// kick things off by creating the `App`
	new app.AppView();
});
