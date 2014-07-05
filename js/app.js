/**
 * @author ravindranath.m
 */

define(['underscore', 'backbone', 'menu-model', 'course-schedule-view'], function(_, Backbone, menuModel, CSV) {

	var AppView = Backbone.View.extend({

		el : "#cms-menu",
		template: _.template($("#menu-template").html()),
		events: {
			"click ul.category > li > a": "toggleShow",
			//"click li.leaf > a" : "makeActive",
			"click li.leaf a" : "loadTarget"
		},
		render : function() {
			console.log("Menu render executing...");
			if (this.model.length) {
				_.templateSettings.variable = "menuList";
				this.$el.html(this.template({menuList: this.model.toJSON()}));
			} else {
				this.$el.html("Welcome to the Backbone jungle!");
			}
		},

		initialize : function() {
			console.log("Initializing...!");
			console.log("this.model is: " + JSON.stringify(this.model.toJSON()));
			this.model.bind("add", this.render, this);
		},

		login : function() {
			console.log("signing in...");
			$("#canvas").load("home.html", function() {
				console.log("Loading inbox contents...");
				$("#home-content").load("inbox.html");
			});
		},
		
		toggleShow: function(e) {
			console.log ("thx for clicking me!");
			debugger;
			$this = $(e.target);
			if (! $this.hasClass("group")) return;
			$this.parent().find("ul").slideToggle("fast");
			$this.find("i:last").toggleClass("fa-chevron-circle-right fa-chevron-circle-down");
		},
		
		loadTarget: function(e) {
			e.preventDefault();
			
			$this = $(e.target);
			$this.parents("ul.category").find("li.leaf > a").removeClass("active-menu-item");
			$this.addClass("active-menu-item");
			var href=$this.attr("href");
			if (href != "#") $("#canvas").load(href, function() {
				var app = app || {};
				app.courseScheduleView = new CSV();
				app.courseScheduleView.render();
			});
		}
	});

	return AppView;

});

