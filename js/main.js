/**
 * Configuration for supporting require.js for AMD specification support.
 */
require.config({
	paths : {
		// module_id : path
		'jquery' : 'vendor/jquery-1.11.0.min',
		'backbone' : 'vendor/backbone',
		'underscore' : 'vendor/underscore',
		'bootstrap' : 'vendor/bootstrap-3.1.1-dist/js/bootstrap.min',
		'menu-model' : 'app/menu-data/menu-model',
		'imagesLoaded' : 'vendor/qtip2/imagesLoaded.pkg.min',
		'qtip2' : 'vendor/qtip2/jquery.qtip.min',
		'course-schedule-view' : 'app/views/course-schedule-view',
		'fullcalendar' : "vendor/fullcalendar-1.6.4/fullcalendar/fullcalendar.min",
		'jquery-ui' : "vendor/fullcalendar-1.6.4/lib/jquery-ui.custom.min"
	},
	shim : {
		"bootstrap" : ["jquery"],
		"backbone" : {
			deps : ["underscore", 'jquery'],
			exports : "Backbone"
		},
		"underscore" : {
			exports : "_"
		},
		"fullcalendar" : {
			exports: "fullcalendar"
		}
	}
});

require([
// Load our app module and pass it to our definition function
'app', 'menu-model', 'bootstrap', "jquery"], function(AppView, Menu, bootstrap, $) {

	var menu = new Menu();
	menu.url = "responses/menu.json";
	appView = new AppView({
		model : menu
	});
	menu.fetch({
		// async : false,
		success : function(data) {
			//console.log("fetch success!. Data: " + JSON.stringify(data));
			console.log("menu data after fetch..." + JSON.stringify(menu.toJSON()));
		},
		error : function(xhr, status, error) { debugger;
			console.log("fetch failed: " + status + ":" + error);
		}
	});

	// sign-in functionality
	$("#sign-in").on("click", function() {
		console.log("signing in...");
		$("#canvas").load("home.html", function() {
			console.log("Loading inbox contents...");
			$("#home-content").load("inbox.html");
		});
	});

	return appView;
});

