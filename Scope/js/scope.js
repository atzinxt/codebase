$(document).ready(function(){
	//alert("load");
    /*$("#btn1").click(function(){
        ScopeFunctionality.xxx();
    });*/
	
	$("#btn1").on("click", function(){
        ScopeFunctionality.xxx();
    });
	
	$("#btn2").click(function(){
        ScopeFunctionality.btnClick2();
    });
	
	$("#btn3").click(function(){
        ScopeFunctionality.btnClick3();
    });
	
	$("#chnAttr").click(function(){
        ScopeFunctionality.chnAttr();
    });
});

ScopeFunctionality = (function(window, $){
	
	parent.xxx = function(){
		$("div").css("border" , "1px solid blue");
	},
	
	parent.btnClick2 = function(){
		$("#div2").css("border" , "1px solid blue");
	},
	
	parent.btnClick3 = function(){
		$(".bbb").css("border" , "1px solid blue");
	},
	
	parent.chnAttr = function(){
		$(".aaa").addClass("xyz");
	},
	
	ooo = function(){
		alert("ooo");
	},
	
	parent.xyz = function(){
		alert("xyz");
	}
	
	return parent;
	
}(window, window.$));
