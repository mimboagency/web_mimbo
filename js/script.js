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
	
	
    //fullpage.js
    $('body').fullpage({
      scrollBar: true,
	  fitToSectionDelay:300,
      //navigation: false,
     // navigationTooltips: ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4'],
      loopBottom: false,
      sectionSelector: '.blocks1,.block2,.block3, .block4',
	//  scrollOverflow:true,
	  normalScrollElements: '.block4,.block5, .block6, .block7, .block8, .block9',
	 fitToSection: false
    });
	
	function goanimation(obj,delay){
	obj.addClass('wow');
	obj.addClass('fadeInUp');
	obj.attr( "data-wow-offset", 150 );
	obj.attr( "data-wow-duration", "2.5s" );
	obj.attr( "data-wow-delay",  delay + "s" );
	}
	
	function goanimation2(obj,delay){
	obj.addClass('wow');
	obj.addClass('fadeInDown');
	obj.attr( "data-wow-offset", 150 );
	obj.attr( "data-wow-duration", "2.5s" );
	obj.attr( "data-wow-delay",  delay + "s" );
	}
	
	function goanimation3(obj,delay){
	obj.addClass('wow');
	obj.addClass('fadeInDownOP');
	obj.attr( "data-wow-offset", 150 );
	obj.attr( "data-wow-duration", "2s" );
	obj.attr( "data-wow-delay",  delay + "s" );
	}
	
	function goanimation4(obj,delay){
	obj.addClass('wow');
	obj.addClass('animate-text');
	obj.attr( "data-wow-offset", 150 );
	obj.attr( "data-wow-duration", "2s" );
	obj.attr( "data-wow-delay",  delay + "s" );
	}
	
	goanimation($('.whiteline1'),0);
	goanimation2($('.whiteline2'),0.3);
	goanimation($('.greyline1'),0);
	goanimation2($('.greyline2'),0.3);			
	goanimation2($('.greyline3'),0);	
	goanimation2($('.greyline4'),0);
	goanimation($('.greyline5'),0);
	goanimation2($('.greyline6'),0);
	goanimation2($('.greyline7'),0);
	goanimation2($('.greyline8'),0);
	goanimation($('.greyline9'),0);
	goanimation($('.greyline00copy'),0);
	goanimation($('.greyline0'),0.3);	
	goanimation($('.greyline00'),0);

	goanimation3($('h2'),0);

	
	WOW.prototype.addBox = function(element) {
    this.boxes.push(element);
	};

	  // Init WOW.js and get instance
	  var wow = new WOW();
	  wow.init();

	  $('.wow').on('scrollSpy:exit', function() {
		$(this).css({
		  'visibility': 'hidden',
		  'animation-name': 'none'
		}).removeClass('animated');
		wow.addBox(this);
	  }).scrollSpy();

   
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
		/*parent=$(".greyline0").parent();
		heightline=parent.parent().parent().parent().offset().top+parent.parent().parent().parent().innerHeight()-parent.offset().top-parent.innerHeight();
		$(".greyline0").css("height", heightline+15+"px");
		$(".greyline0").css("bottom", -heightline+"px");*/
		
		$(".greyline4").css("left", $(".greyline6").offset().left);
		$(".greyline3").css("left", $(".greyline0").offset().left);
		$(".greyline03").css("left", $(".greyline00").offset().left);
		$(".greyline5").css("left", $(".greyline00").offset().left);
		$(".greyline7").css("left", $(".greyline00copy").offset().left);
		if ($(window).outerWidth()>1320){
			$(".number").css("left", $(".greyline00").offset().left-147);
			$(".number0").css("left", $(".greyline00").offset().left-154);
		}
		else if ($(window).outerWidth()>990){
			$(".number").css("left", $(".greyline00").offset().left-110);
			$(".number0").css("left", $(".greyline00").offset().left-113);
		}
		else if ($(window).outerWidth()>477){
			$(".number").css("left", $(".greyline00").offset().left-60);
			$(".number0").css("left", $(".greyline00").offset().left-60);
		}
		else{
			$(".number").attr("style", "");
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
 
