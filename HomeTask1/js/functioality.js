window.closed = true;
$(document).ready(function(){
    
});

function myFunction(){
	debugger;
	var content = $("#Container").html();
	if(content === "ABC"){
		$("#Container").html("XYZ").removeClass("red").addClass("blue");
	}else{
		$("#Container").html("ABC").removeClass("blue").addClass("red");
	}
	anotherFunction();
}

function anotherFunction(){
	
}