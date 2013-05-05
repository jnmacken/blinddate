var app = app || {};

$(function () {
	'use strict';

	var id = Math.random() % 10000;
	app.profile = new app.Profile({'id' : '518623003d2f1c9024000003'});
	app.profile.fetch();
	// kick things off by creating the `App`
	new app.AppView();
});
