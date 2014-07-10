$(document).ready(function() {
	$("#nav_elements a").click(function() {
		$(window).scrollTo($(this).attr("data-target"), 2000);
	});
});