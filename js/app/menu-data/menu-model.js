/**
 * @author ravindranath.m
 */

// Menu model object.  Defines the structure of our menu items
define(['backbone', 'underscore', 'jquery'], function(Backbone, _, $) {

	var MenuItem = Backbone.Model.extend({});

	var MenuModel = Backbone.Model.extend({
		defaults : {
			'category' : "Courses",
			'icon' : 'fa-book',
			'items' : []
		}
	});

	/** Array of menus **/
	var Menu = Backbone.Collection.extend({
		initialize: function() {
			console.log("Initializing Menu Model...");
			this.bind("change", this.changeHandler);
			this.bind("add", this.addHandler);
		},
		model : MenuModel,

		changeHandler: function() {
			console.log("Menu model changed!");
		},

		addHandler: function() {
			console.log("Menu model add event!");
		}
	});

	// var menuList = new MenuList();

	return Menu;
});
