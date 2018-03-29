var isopen = false;

function open(){
	if(isopen==false){
		isopen=true;
		$(".menu").addClass("open");
		$(".closemenu").addClass("open");
	}
	else{
		isopen=false;
		$(".menu").removeClass("open");
		$(".closemenu").removeClass("open");
	}
}

$(".openmenu").click(function(){
	 open();
 })
 $(".closemenu").click(function(){
	 open();
 })
 $(".menu .buttonclose").click(function(){
	 open();
 })

 
$( document ).ready(function() {
	
	var modules=$(".modules .module .nummod");
	var lines=$(".whiteline, .greyline0, .greyline00, .greyline00copy");
	function resize(){
		
		for (i=0; i<modules.length; i++){
			if (i<9)
				num="0";
			else num="";
			num=num+(i+1)+"";
			modules.eq(i).text(num);
		}
		
		for (i=0; i<lines.length; i++){
			parent=lines.eq(i).parent();
			heightline=parent.parent().parent().offset().top+parent.parent().parent().innerHeight()-parent.offset().top-parent.innerHeight();
			lines.eq(i).css("height", heightline+15+"px");
			lines.eq(i).css("bottom", -heightline+"px");
		}
		
		$(".greyline4").css("left", $(".greyline6").offset().left);
		$(".greyline3").css("left", $(".greyline0").offset().left);
		$(".greyline03").css("left", $(".greyline00").offset().left);
		$(".greyline5").css("left", $(".greyline00").offset().left);
		$(".greyline7").css("left", $(".greyline00copy").offset().left);
		if ($(window).outerWidth()>1320){
			$(".number").css("left", $(".greyline00").offset().left-147);
			$(".number0").css("left", $(".greyline00").offset().left-154);
		}
		else{
			$(".number").css("left", $(".greyline00").offset().left-110);
			$(".number0").css("left", $(".greyline00").offset().left-113);
		}
		
	}
	
	resize();
	
	$(window).resize(function(){				
		resize();
	});
	
	
	colors=$(".colors .color p");
	circlecolor=$(".colors .color .circlecolor");
	for (i=0; i<colors.length; i++){
		circlecolor.eq(i).css("background-color", colors.eq(i).text());
		if (colors.eq(i).text() =="#FFFFFF" || colors.eq(i).text() == "#ffffff")
			circlecolor.eq(i).css("box-shadow", "0px 6px 10px 5px rgba(0, 0, 0, 0.05)");
	}
});
 
