var app = app || {};

$(function () {
	'use strict';

	var id = $.cookie('bdid');
	if (!id) {
		id = Math.random() % 10000;
		$.cookie('bdid', id);
	}

	// kick things off by creating the `App`
	new app.AppView({
		profile: profiles.fetch(id);
	});
});
