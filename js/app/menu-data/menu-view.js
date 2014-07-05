/**
 * @author ravindranath.m
 */

define(['backbone', 'underscore', 'jquery'], function(Backbone, _, $) {
	
	var MenuView = Backbone.View.extend({
		
		// Reference to the dom element
		el: '#cms-menu',
		
		// cache the template function for a single item.
		menuTemplate: _.template($("#menu-template").html()),
		
		initialize: function() {
			console.log("Initializing menu view...");
			this.model.on('change', this.render, this);
		},
		render: function() {
			console.log("rendering menu view...");	
			this.$el.html(this.menuTemplate(this.model.toJSON()));
		}
	});
	
	return MenuView;
});