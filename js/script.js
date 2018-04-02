var f=0, f2=0, ff=0, ff2=0, prevh=0, flag=-1, ff=0, ff2=0;
var hBegin2=0, hEnd2=0, leftbig=0;
var menuH=0, hBegin=0, hEnd=0;
var hNow=0, prewH=0;
var offset1, offset2, offset3, offset4;
var flWheel=false;
$( document ).ready(function() {
    var isOpen = false;
    function open(){
        if(isOpen==false){
            isOpen=true;
            $(".menublock").addClass("openmenu");
        }
        else{
            isOpen=false;
            $(".menublock").removeClass("openmenu");
        }
    };
    $(".btnmenu").click(function(){
         open();
     });
     $(".closemenu").click(function(){
         open();
     });
     $(".ssulki a").click(function(){
         open();
         scrollAnimate(this);
     });
    //fullpage.js
    if ($(".block2").html()!=undefined){
        $('body').fullpage({
          scrollBar: true,
          fitToSectionDelay:300,
          //navigation: false,
         // navigationTooltips: ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4'],
          loopBottom: false,
          responsiveWidth: 990,
          sectionSelector: '.blocks1,.block2,.block3, .block4',
        //  scrollOverflow:true,
          normalScrollElements: '.block4,.block5, .block6, .block7, .block8, .block9',
         fitToSection: false
        });
        function goAnimation(obj,delay){
            obj.addClass('wow');
            obj.addClass('fadeInUp');
            obj.attr( "data-wow-offset", 150 );
            obj.attr( "data-wow-duration", "2.5s" );
            obj.attr( "data-wow-delay",  delay + "s" );
        }
        function goAnimation2(obj,delay){
            obj.addClass('wow');
            obj.addClass('fadeInDown');
            obj.attr( "data-wow-offset", 150 );
            obj.attr( "data-wow-duration", "2.5s" );
            obj.attr( "data-wow-delay",  delay + "s" );
        }
        function goAnimation3(obj,delay){
            obj.addClass('wow');
            obj.addClass('fadeInDownOP');
            obj.attr( "data-wow-offset", 150 );
            obj.attr( "data-wow-duration", "2s" );
            obj.attr( "data-wow-delay",  delay + "s" );
        }
        function goAnimation4(obj,delay){
            obj.addClass('wow');
            obj.addClass('animate-text');
            obj.attr( "data-wow-offset", 150 );
            obj.attr( "data-wow-duration", "2s" );
            obj.attr( "data-wow-delay",  delay + "s" );
        }
        function goAnimation5(obj,delay){
            obj.addClass('wow');
            obj.addClass('fadeInUpNext');
            obj.attr( "data-wow-offset", 50 );
            obj.attr( "data-wow-duration", "1s" );
            obj.attr( "data-wow-delay",  delay + "s" );
        }
        function goAnimation6(obj,delay){
            obj.addClass('wow');
            obj.addClass('fadeInUp');
            obj.attr( "data-wow-offset", 50 );
            obj.attr( "data-wow-duration", "2.8s" );
            obj.attr( "data-wow-delay",  delay + "s" );
        }
        function goAnimation7(obj,delay){
            obj.addClass('wow');
            obj.addClass('fadeIn');
            obj.attr( "data-wow-offset", 150 );
            obj.attr( "data-wow-duration", "1.5s" );
            obj.attr( "data-wow-delay",  delay + "s" );
        }
        goAnimation($('.whiteline1'),0);
        goAnimation2($('.whiteline2'),0.3);
        goAnimation($('.greyline1'),0);
        goAnimation2($('.greyline2'),0.3);			
        goAnimation2($('.greyline3'),0);	
        goAnimation2($('.greyline4'),0);
        goAnimation($('.greyline5'),0);
        goAnimation2($('.greyline6'),0);
        goAnimation2($('.greyline7'),0);
        goAnimation2($('.greyline8'),0);
        goAnimation($('.greyline9'),0);
        goAnimation($('.greyline00copy'),0);
        goAnimation($('.greyline0'),0.3);	
        goAnimation($('.greyline00'),0);
        goAnimation3($('h2'),0);
        goAnimation5($('.nextblock'),0.5);
        goAnimation5($('.nextblock2'),0.5);
        goAnimation5($('.nextblock3'),0.5);
        goAnimation6($('.manydevices'),0);       
        goAnimation7($('.doublephone'),0);
        goAnimation7($('.triplephone'),0);
        WOW.prototype.addBox = function(element) {
            this.boxes.push(element);
        };       
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
            if ($(window).outerWidth()<991){
                $(".blocks1, .block2, .block3, .block4, .fp-tableCell").attr("style", "");
            }
        }
        resize();
        $(window).resize(function(){                
            resize();
        });
        colors=$(".colors .color p");
        circleColor=$(".colors .color .circleColor");
        for (i=0; i<colors.length; i++){
            circleColor.eq(i).css("background-color", colors.eq(i).text());
            if (colors.eq(i).text() =="#FFFFFF" || colors.eq(i).text() == "#ffffff")
                circleColor.eq(i).css("box-shadow", "0px 6px 10px 5px rgba(0, 0, 0, 0.05)");
        }
    }
    // index.html----------------------------------------------------------------------------------
    if ($(".bgheader2").html()!=undefined){       
        allPortfolio=$(".portfolionone");
        resize2();
        function bestAnimation(object, animationName, animationOffset, animationDuration, animationDelay){
            object.addClass('wow');
            object.addClass(animationName);
            object.attr( "data-wow-offset", animationOffset );
            object.attr( "data-wow-duration", animationDuration + "s" );
            object.attr( "data-wow-delay",  animationDelay + "s" );
        }    
        //bestAnimation($('.bgheader2'),"scaleHeader",0,1,0);
        bestAnimation($('.bgheader2 h1'),"fadeIn",0,1,0);
        bestAnimation($('.bgheader2 li'),"fadeIn",0,1,0.3);
        bestAnimation($('.bgheader2 li').last(),"fadeIn",0,1,0.7);
              // Init WOW.js and get instance
              var wow = new WOW();
              wow.init();
        $(".vuborrab ul li").eq(0).addClass("activevuborrab");
        $(".vuborrab ul li").click(function(){
            $(".activevuborrab").removeClass("activevuborrab");
             $(this).addClass("activevuborrab");
         });
        $(".foto").eq(0).addClass("activefoto");
        infoFoto();
        $(".foto").click(function(){
            $(".activefoto").removeClass("activefoto");
             $(this).addClass("activefoto");
             infoFoto();
        });
        function infoFoto(){
            $(".bigfoto").attr("style", $(".activefoto .smallfoto").attr("style"));
            $(".name2").text($(".activefoto .name").text());
            $(".doljnost2").text($(".activefoto .doljnost").text());
            $(".opischlena2").text($(".activefoto .opischlena").text());
        }
        allNumRab=$(".nomerrabotaem");
        for (i=0; i<allNumRab.length; i++){
            if(i<9)
                num="0";
            else num="";
            num=num+(i+1)+"";
            allNumRab.eq(i).text(num);
        }
        allUslZagl=$(".uslugi h3");
        allUsl=$(".uslugi .ul");
        var arr = [];
        function allTopGreyUsl(){
            topGrey=0;
            for (i=0; i<allUsl.length; i++){
                $(arr[i]).css("height",  $(".uslugi .ul").eq(i).innerHeight()+$(".uslugi h3").eq(i).innerHeight());
                //$(arr[i]).css("width",  $(window).width()/2);
                $(arr[i]).css("top",  topGrey);
                topGrey+=$(arr[i]).height();              
            }
        }
        for (i=0; i<allUslZagl.length; i++){
            if (i % 2 == 0){
                allUsl.eq(i).append("<div class='leftgreyusl'></div>");
                arr[i]=allUsl.eq(i).find(".leftgreyusl");
            }
            else{
                allUsl.eq(i).append("<div class='rightgreyusl'></div>");
                arr[i]=allUsl.eq(i).find(".rightgreyusl");
            }
        }
        allTopGreyUsl();
        $(".forma input[type=range]").on("input", cost);      
        function cost(){
            countItems = $("#cost").val();
            $(".costrange").text(countItems+ " руб");
        }
        allSsulki=$(".ssulki a");
        opacitySsulka=1;
        for (i=0; i<allSsulki.length; i++){
            allSsulki.eq(i).css("opacity", opacitySsulka);
            opacitySsulka-=0.1;
        }
        $(".rightagency a").click(function(){
            scrollAnimate(this);
        });
        function scrollAnimate(object){
            $("html, body").animate({
                scrollTop: $($(object).attr("href")).offset().top - $(".menu").innerHeight() + "px"
              }, 
              {
                 duration: 600,
                 easing: "swing"
            });
        }
        function zamena(i){
            p = 0;
            var interval = setInterval(function(){
                if($(".leftrab h2").css("opacity") == "0" || p>=600){
                    clearInterval(interval);
                    $(".portfolio .leftrab h2").text($(".portfolionone h2").eq(i).text());
                    $(".portfolio .leftrab p").text($(".portfolionone p").eq(i).text());
                    $(".portfolio .leftrab .btnsmotr").attr("href",$(".portfolionone .btnsmotr").eq(i).attr("href"));
                    $(".portfolio .bgrhomb").attr("style", $(".portfolionone .bgrhomb").eq(i).attr("style"));
                    $(".portfolio .numberrab").text("0"+(i+1));
                }
                p++;
            },1);
        }
        if ($(".greyrec").html()!=undefined)
        {
            console.log(-2);
            zamena(0);                        
            $(window).scroll(function(){  
                console.log(-3);
                hNow=Math.ceil($(window).scrollTop());
                if(f2==1 && hNow<hEnd){
                    $(".portfolio").css("position", "fixed");
                    $(".portfolio").css("top", menuH+"px");
                    f2=0;
                 }
                if(f==0 && hNow>=hBegin && hNow<hEnd){        
                        $(".portfolio").css("position", "fixed");
                        $(".portfolio").css("top", menuH+"px");                        
                        f=1;        
                }
                else if(hNow>hEnd && f2==0){                
                    $(".portfolio").css("position", "absolute");
                    topa=allPortfolio.eq(0).innerHeight()*(allPortfolio.length-1);
                    $(".portfolio").css("top", topa +"px");                
                    f2=1;        
                }
                else if(hNow<hBegin && f==1){
                     f=0;
                     $(".portfolio").css("position", "absolute");
                     $(".portfolio").css("top", 0+"px");    
                     flag=0;
                } 
                console.log(hNow);
                console.log(hBegin);
                console.log(hEnd);
                if (hNow>=hBegin && hNow<hEnd){
                    console.log(-1);
                    if(prewH<hNow){                     
                        if(hNow>=offset1 && flag==-1){
                            console.log(0);
                            flag=0;
                        }
                        else if (hNow>=offset1 && hNow<offset2 && flag==0){
                            console.log(1);
                            flag=1;
                            $(".portfolio").addClass("prtnext");
                            zamena(1);                            
                        }
                        else if (hNow>=offset2 && flag==1){
                            flag=2;
                            $(".rhomb").addClass("circleanim");
                            console.log(2);
                        }
                        else if (hNow>=offset2 && hNow<offset3 && flag==2){
                            console.log(3);
                            flag=3;
                            $(".portfolio").addClass("prtnext");
                            zamena(2);
                            $(".rhomb").addClass("squareanim");
                         }
                     }
                     else{
                         if (hNow<=offset3 && flag==4){
                            flag=3;
                        }
                        else if (hNow>offset2 && hNow<=offset3 && flag==3){
                            flag=2;
                            $(".portfolio").addClass("prtnext");
                            zamena(1);
                            $(".rhomb").addClass("circleanim");
                            $(".rhomb").removeClass("squareanim");
                        }
                        else if (hNow<=offset2 && flag==2){
                            flag=1;
                        }
                        else if (hNow>offset1 && hNow<=offset2 && flag==1){
                            flag=0;
                            $(".rhomb").removeClass("circleanim");
                            $(".portfolio").addClass("prtnext");
                            zamena(0);
                        }
                    }
                }
                prewH=hNow;
                if (hNow<offset1){
                    flag=-1;
					zamena(0);
                    $(".rhomb").removeClass("circleanim");
                    $(".rhomb").removeClass("squareanim");
                    $(".portfolio").addClass("prtnext");
                }
                if (hNow>=offset4 && flWheel==false){
                    zamena(2);
                    flag=4;
                    $(".rhomb").addClass("circleanim");
                    $(".rhomb").addClass("squareanim");
                    $(".portfolio").addClass("prtnext");
                    window.removeEventListener("wheel", onWheel);
                    flWheel=true;
                }
                else if (hNow>offset3 && hNow<offset4 && flWheel==true){              
                    window.addEventListener("wheel", onWheel);
                    flWheel=false;
                }
            });
        }
        var lastAnimation = new Date().getTime();
        var quietPeriod = 100; 
        var animationTime=500;
        var objAnim;
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
                if (hNow<offset1){
                    scroll(offset1);                
                }
                else if (hNow>=offset1 && hNow<offset2 && flag==0){        
                    scroll(offset2);
                }
                else if (hNow>=offset2 && hNow<offset3 && (flag==2 || flag==1)){
                    scroll(offset3);
                }
                else if (hNow>=offset3 && hNow<offset4 && flag==3){
                    scroll(offset4);                   
                }
            }
            else{      
                if (hNow>offset3 && hNow<=offset4 && flag==4){             
                    scroll(offset3);                
                }
                else if (hNow>offset2 && hNow<=offset3 && flag==3){
                    scroll(offset2);
                }
                else if (hNow>offset1 && hNow<=offset2 && (flag==2 || flag==1)){
                    scroll(offset1);
                }
                else if (hNow<=offset1){
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
            $(window).scroll(function(){         
                if (ff2==1 && hNow<hEnd2){
                    $(".flexbig").css("position", "fixed");
                    $(".flexbig").css("top", menuH+"px");
                    $(".flexbig").css("left", leftbig+"px");
                    ff2=0;
                 }
                if (ff==0 && hNow>=hBegin2 && hNow<hEnd2){        
                    $(".flexbig").css("position", "fixed");
                    $(".flexbig").css("top", menuH+"px");
                    $(".flexbig").css("left", leftbig+"px");                    
                    ff=1;
                }
                else if(hNow>hEnd2 && ff2==0){
                    $(".flexbig").css("position", "absolute");
                    topa=$(".flexkomanda").innerHeight()-$(".bigfoto").innerHeight();
                    $(".flexbig").css("top", topa +"px");    
                    $(".flexbig").css("left", leftbig-$(".flexkomanda").offset().left+"px");
                    ff2=1;            
                }
                else if(hNow<hBegin2 && ff==1){
                     ff=0;
                     $(".flexbig").attr("style", "");
                } 
            });
        }        
        function resize2(){
			menuH=$(".menu").innerHeight();
			$(".portfolionone").css("height", $(".portfolio").innerHeight());
            hBegin2=Math.ceil($(".flexkomanda").offset().top-menuH);
            hEnd2=Math.ceil(hBegin2 + $(".flexkomanda").innerHeight()-$(".flexbig").innerHeight());
            leftbig=$(".flexbig").offset().left;           
            hBegin=Math.ceil($(".block1").offset().top-menuH+$(".block1").innerHeight());
            hEnd=Math.ceil(allPortfolio.eq(allPortfolio.length-1).offset().top);
            offset1=Math.ceil(allPortfolio.eq(0).offset().top-menuH);
            offset2=Math.ceil(allPortfolio.eq(1).offset().top-menuH);
            offset3=Math.ceil(allPortfolio.eq(2).offset().top-menuH);
            offset4=Math.ceil($("#komanda").offset().top-menuH);
        }       
        $(window).resize(function(){                
            resize2();
        });
    }
});