window.closed = true;
$(document).ready(function(){
    
});

function myFunction(){
	//$("div").addClass("red");
	//$("#a_2").addClass("red");
	$("div[id^='a_']").addClass("red");
}
