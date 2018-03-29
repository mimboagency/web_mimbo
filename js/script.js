var f=0, f2=0, ff=0, ff2=0, prevh=0, flag=-1;
$( document ).ready(function() {
	
	var isopen = false;

	function open(){
		if(isopen==false){
			isopen=true;
			$(".menublock").addClass("openmenu");
		}
		else{
			isopen=false;
			$(".menublock").removeClass("openmenu");
		}
	}

	$(".btnmenu").click(function(){
		 open();
	 })
	 $(".closemenu").click(function(){
		 open();
	 })
	 $(".ssulki a").click(function(){
		 open();
		 scrollanimate(this);
	 })
	
	

	
	
    //fullpage.js
	if ($(".block2").html()!=undefined){		
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
	}
	
	// index.html----------------------------------------------------------------------------------
	if ($(".bgheader2").html()!=undefined){
		
		
		
		function bestanimation(object, animationName, animationOffset, animationDuration, animationDelay){
		object.addClass('wow');
		object.addClass(animationName);
		object.attr( "data-wow-offset", animationOffset );
		object.attr( "data-wow-duration", animationDuration + "s" );
		object.attr( "data-wow-delay",  animationDelay + "s" );
	}	
		
	//bestanimation($('.bgheader2'),"scaleHeader",0,1,0);
	bestanimation($('.bgheader2 h1'),"fadeIn",0,1,0);
	bestanimation($('.bgheader2 li'),"fadeIn",0,1,0.3);
	bestanimation($('.bgheader2 li').last(),"fadeIn",0,1,0.7);
		
		
		  // Init WOW.js and get instance
		  var wow = new WOW();
		  wow.init();
		
	$(".vuborrab ul li").eq(0).addClass("activevuborrab");
	$(".vuborrab ul li").click(function(){
		$(".activevuborrab").removeClass("activevuborrab");
		 $(this).addClass("activevuborrab");
	 });
	 
	$(".foto").eq(0).addClass("activefoto");
	infofoto();
	$(".foto").click(function(){
		$(".activefoto").removeClass("activefoto");
		 $(this).addClass("activefoto");
		 infofoto();
	 });
	 
	 function infofoto(){
		 $(".bigfoto").attr("style", $(".activefoto .smallfoto").attr("style"));
		 $(".name2").text($(".activefoto .name").text());
		 $(".doljnost2").text($(".activefoto .doljnost").text());
		 $(".opischlena2").text($(".activefoto .opischlena").text());
	 }
	 
	 allnumrab=$(".nomerrabotaem");
	 for (i=0; i<allnumrab.length; i++){
		 if (i<9)
			num="0";
		else num="";
		num=num+(i+1)+"";
		allnumrab.eq(i).text(num);
	 }
	 
	 alluslzagl=$(".uslugi h3");
	  allusl=$(".uslugi .ul");
	  var arr = [];
	  
	   function alltopgreyusl(){
		  topgrey=0;
		  for (i=0; i<allusl.length; i++){
				  $(arr[i]).css("height",  $(".uslugi .ul").eq(i).innerHeight()+$(".uslugi h3").eq(i).innerHeight());
				  //$(arr[i]).css("width",  $(window).width()/2);
				  $(arr[i]).css("top",  topgrey);
				  topgrey+=$(arr[i]).height();			  
		  }	  
	  }
	  
	  for (i=0; i<alluslzagl.length; i++){
		  if (i % 2 == 0){
			  allusl.eq(i).append("<div class='leftgreyusl'></div>");
			  arr[i]=allusl.eq(i).find(".leftgreyusl");
		  }
		  else{
			  allusl.eq(i).append("<div class='rightgreyusl'></div>");
			  arr[i]=allusl.eq(i).find(".rightgreyusl");
		  }
	  }
	alltopgreyusl();
	  
	$(".forma input[type=range]").on("input", cost);	  
	function cost(){
		countitems = $("#cost").val();
		$(".costrange").text(countitems+ " руб");
	}
	
	allssulki=$(".ssulki a");
	opacityssulka=1;
	for (i=0; i<allssulki.length; i++){
		allssulki.eq(i).css("opacity", opacityssulka);
		opacityssulka-=0.1;
	}
	
	$(".rightagency a").click(function(){
		scrollanimate(this);
	});
	
	function scrollanimate(object){
		$("html, body").animate({
			scrollTop: $($(object).attr("href")).offset().top - $(".menu").innerHeight() + "px"
		  }, 
		  {
			 duration: 600,
			 easing: "swing"
		});
	}
	function zamena(i){
		console.log("dadadad " + i);
	p = 0;
	var interval = setInterval(function(){
		console.log(10001010101010);
		if($(".leftrab h2").css("opacity") == "0" || p>=600){
		  clearInterval(interval);
		$(".portfolio .leftrab h2").text($(".portfolionone h2").eq(i).text());
		$(".portfolio .leftrab p").text($(".portfolionone p").eq(i).text());
		$(".portfolio .leftrab .btnsmotr").attr("href",$(".portfolionone .btnsmotr").eq(i).attr("href"));
		$(".portfolio .bgrhomb").attr("style", $(".portfolionone .bgrhomb").eq(i).attr("style"));
		$(".portfolio .numberrab").text("0"+(i+1));
		}
		p++
	},1);
		
		
	}
	$(".portfolionone").css("height", $(".portfolio").innerHeight());
	allportfolio=$(".portfolionone");
	if ($(".greyrec").html()!=undefined)
	{
		zamena(0);
		var menuh=$(".menu").innerHeight();
		var hbegin=$(".block1").offset().top-menuh+$(".block1").innerHeight();
		var hend=hbegin+ allportfolio.eq(0).innerHeight()*(allportfolio.length-1)-parseInt($(".portfolio").css("margin-top").split("px")[0]);
		var hnow=0, prewh=0;
		var offset1=allportfolio.eq(0).offset().top-menuh;
		var offset2=allportfolio.eq(1).offset().top-menuh;
		var offset3=allportfolio.eq(2).offset().top-menuh;
		var offset4=$("#komanda").offset().top-menuh;
		$(window).scroll(function(){		 
			 hnow=$(window).scrollTop();		
			 if (f2==1 && hnow<hend){
				$(".portfolio").css("position", "fixed");
				$(".portfolio").css("top", menuh+"px");
				f2=0;
			 }
			 if (f==0 && hnow>=hbegin && hnow<hend){		
					$(".portfolio").css("position", "fixed");
					$(".portfolio").css("top", menuh+"px");						
					f=1;		
			 }
			 else if(hnow>hend && f2==0){				
				$(".portfolio").css("position", "absolute");
				topa=allportfolio.eq(0).innerHeight()*(allportfolio.length-1)-menuh;
				$(".portfolio").css("top", topa +"px");				
				f2=1;		
			 }
			 else if(hnow<hbegin && f==1){
				 f=0;
				 $(".portfolio").css("position", "absolute");
				 $(".portfolio").css("top", 0+"px");	
				 flag=0;
			 } 
			 if (hnow>=hbegin && hnow<hend)
			 {
				
				console.log(hnow);
				 if (prewh<hnow){					 
					 if (hnow>=offset1 && flag==-1){
						 flag=0;
						 console.log("0===================");
					 }
					 else if (hnow>=offset1 && hnow<offset2 && flag==0){
						 						 
						 console.log(offset1);
						 console.log(offset2);
						 console.log("1===================");
						flag=1;
						$(".portfolio").addClass("prtnext");
						zamena(1);
						
					 }
					 else if (hnow>=offset2 && flag==1){
						 flag=2;
						 $(".rhomb").addClass("circleanim");
						 
						 console.log("2===================");
					 }
					 else if (hnow>=offset2 && hnow<offset3 && flag==2){
						 console.log(offset2);
						 console.log(offset3);
						 flag=3;
						 console.log("3===================");
						$(".portfolio").addClass("prtnext");
						zamena(2);
						$(".rhomb").addClass("squareanim");
					 }
				 }
				 else{
					if (hnow>offset2 && hnow<=offset3 && flag==3){
						flag=2;
						console.log(offset2);
						 console.log(offset3);
						 console.log("4===================");
						 $(".portfolio").addClass("prtnext");
						 zamena(1);
						$(".rhomb").addClass("circleanim");
						$(".rhomb").removeClass("squareanim");
					}
					else if (hnow<=offset2 && flag==2){
						 flag=1;
						 console.log(offset3);
						 console.log("5===================");
					 }
					else if (hnow>offset1 && hnow<=offset2 && flag==1){
						console.log(offset1);
						 console.log(offset2);
						 console.log("6===================");
						flag=0;
						$(".rhomb").removeClass("circleanim");
						$(".portfolio").addClass("prtnext");
						zamena(0);
					}
				 }
			 }		 
			prewh=hnow;			
			if (hnow<offset1){
				flag=-1;
				console.log("7===================");
			}
		});
	}
	
		
	var lastAnimation = new Date().getTime();
	var quietPeriod = 100; 
	var animationTime=500;
	var objanim
	function onWheel(e) {
		e = e || window.event;
		var timeNow = new Date().getTime();
		if(timeNow - lastAnimation < quietPeriod + animationTime) {
				e.preventDefault();
				return;
		}
		lastAnimation=timeNow;
		var delta = e.deltaY || e.detail || e.wheelDelta;
		if (delta>0){
			if (hnow<offset1){
				console.log("01===================");
				scroll(offset1);				
			}
			else if (hnow>=offset1 && hnow<offset2 && flag==0){		
			console.log("02===================");
				scroll(offset2);
			}
			else if (hnow>=offset2 && hnow<offset3 && (flag==2 || flag==1)){
				console.log("03===================");
				scroll(offset3);
			}
			else if (hnow>=offset3 && hnow<offset4 && flag==3){
				console.log("04===================");
				scroll(offset4);
			}
		}
		else{			
			if (hnow>offset3 && hnow<=offset4 && flag==3){	
				console.log("05===================");
				scroll(offset3);				
			}
			else if (hnow>offset2 && hnow<=offset3 && flag==3){
				console.log("06===================");
				scroll(offset2);
			}
			else if (hnow>offset1 && hnow<=offset2 && (flag==2 || flag==1)){
				console.log("07===================");
				scroll(offset1);
			}
			else if (hnow<=offset1){
				console.log("08===================");
				scroll(0);
			}
		}
		e.preventDefault ? e.preventDefault() : (e.returnValue = false);
	}
	
	window.addEventListener("wheel", onWheel);
	
	function scroll(numberscroll){
		$(".portfolio").removeClass("prtnext");
		$("html, body").animate({
			scrollTop: numberscroll + "px"
		  }, 
		  {
			 duration: 500,
			 easing: "swing"
		});
	}
	
	// komanda---------------------------------------------------------------
	
	if ($(".flexkomanda").html()!=undefined)
	{
		var hbegin2=$(".flexkomanda").offset().top-menuh;
		var hend2=hbegin2 + $(".flexkomanda").innerHeight()-$(".flexbig").innerHeight();
		console.log(hbegin2);
		console.log(hend2);
		var leftbig=$(".flexbig").offset().left;
		var f=0, f2=0;
		
		$(window).scroll(function(){		 
			 if (ff2==1 && hnow<hend2){
				$(".flexbig").css("position", "fixed");
				$(".flexbig").css("top", menuh+"px");
				$(".flexbig").css("left", leftbig+"px");
				ff2=0;
			 }
			 if (ff==0 && hnow>=hbegin2 && hnow<hend2){		
					$(".flexbig").css("position", "fixed");
					$(".flexbig").css("top", menuh+"px");
					$(".flexbig").css("left", leftbig+"px");					
					ff=1;		
			 }
			 else if(hnow>hend2 && ff2==0){
				$(".flexbig").css("position", "absolute");
				topa=$(".flexkomanda").innerHeight()-$(".bigfoto").innerHeight();
				$(".flexbig").css("top", topa +"px");	
				$(".flexbig").css("left", leftbig-$(".flexkomanda").offset().left+"px");
				ff2=1;			
			 }
			 else if(hnow<hbegin2 && ff==1){
				 ff=0;
				 $(".flexbig").attr("style", "");
			 } 
		});
	}
	
	}
	
});
 
