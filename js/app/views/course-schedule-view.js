/**
 * @author ravindranath.m
 */
define([
	'backbone', 
	'underscore', 
	'qtip2', 
	'fullcalendar',
	'jquery-ui'
	], 
	function(Backbone, _, QT, fc) {

	var CourseScheduleView = Backbone.View.extend({
		el : "#canvas",

		initialize : function() {
			console.log("Course Schedule View initializing...");

			// bind qtip
			this.$el.find(".faculty a").qtip({
				events : {
					render : function(event, api) {
						$(this).draggable({
							// containment : 'window',
							handle : api.elements.titlebar
						});
					}
				},
				content : {
					button : "Close",
					title : "Madhu Kumar",
					text : function(event, api) {
						$.ajax({
							url : "faculty-info.html"
						}).then(function(content) {
							api.set('content.text', content);

							// fullcalendar plugin binding
							// debugger;
							console.log("Bio calendar: " + $(".bio-cal"));
							$(".bio-cal").fullCalendar({
								editable : true,
								header : {
									left : "prev",
									center : "title",
									right : "next"
								},
								defaultView : 'agendaWeek',
								events : [{
									title : 'e1',
									start : '2014-06-02 11:00:00',
									end : '2014-06-02 11:30:00'
								}, {
									title : 'e2',
									start : '2014-06-02 05:00:00',
									end : '2014-06-02 07:00:00',
									allDay : false
								}]
							});

						}, function() {
							// Upon failure... set the tooltip content to error
							api.set('content.text', status + ': ' + error);
						});

						return "loading...";
					}
				},
				hide : {
					event : false
				},
				position : {
					my : "top right",
					at : "bottom left",
					// target: "mouse"
				},
				style : {
					classes : "qtip-bootstrap qtip-shadow",
					width : 800
				}
			});

		},

		render : function() {
			console.log("Course Schedule View rendering...");
		}
	});

	return CourseScheduleView;
});
