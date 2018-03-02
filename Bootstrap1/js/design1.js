$(function(){
	
	var headerHeight = $("nav").height();
	var footerHeight = $(".footer").height();
    var windowHeight = window.innerHeight - (headerHeight + footerHeight);
	$(".sidebar, .middleofBody").css("min-height", windowHeight);
});
