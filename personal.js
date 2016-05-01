

/* ----------------------- 
    GLOBALS 
-------------------------*/
var sections = [
		{	sentence: " are your financial sandbox.",
		},
		{	sentence: " is a playground for innovation.",
		},
		{	sentence: " respons quickly and accurate.",
		},
		{	sentence: " will change the way you work.",
		},
		{	sentence: " is the fastest way to become PSD2 compliant.",
		},
		{	sentence: " constantly iterate.",
		},
		{	sentence: " always build, measure and learn.",
		},
		{	sentence: " enable third parties to integrate.",
		},
		{	sentence: " doing another usability test",
		},
		{	sentence: " not so secretly in love with Jessica Walsh",
		},
		{	sentence: " finally updating his portfolio",
		},
		{	sentence: " thinking what to write next",
		},
		{	sentence: " fighting for beauty",
		},
		{	sentence: " all in or nothing",
		},
		{	sentence: " italian, so pizza, Berlusconi and mandolino",
		},
		{	sentence: " creative director @TripRebel",
		},
		{	sentence: " listening to Vance Joy on Spotify",
		},
		{	sentence: " filling sketchbooks with ideas",
		},
		{	sentence: " cooking some more pasta, you'll never know",
		},
		{	sentence: " freelancing on top secret side projects",
		},
		{	sentence: " dreaming NYC",
		},
		{	sentence: " drinking a beer on the side of the Elba",
		},
		{	sentence: " reading Emotional Design by Aaron Walter",
		},
		{	sentence: " a serious sleepwalker",
		},
		{	sentence: " kicking some developers' asses",
		},
		{	sentence: " missing family every now and then",
		},
		{	sentence: " buying another book, just because of the cover",
		},
		{	sentence: " trying to make you laugh",
		},
		{	sentence: " backing another project on Kickstarter",
		},
		{	sentence: " learning animations principles",
		},
		{	sentence: " trusting his guts",
		},
		{	sentence: " trying to write his first article on Medium",
		},
		{	sentence: " not sure if this is getting too far",
		},
		{	sentence: " curious to know you",
		},
		{	sentence: " always willing to design great stuff",
		},
		{	sentence: " getting in love with some typefaces",
		},
		{	sentence: " missing the morning alarm again",
		},
		{	sentence: " not learning german at all... sheisse",
		},
		{	sentence: " looking forward for his next trip",
		},
		{	sentence: " making the thing he loves the most",
		},
	];
var i = 0;
var j = 0;
var k = 0;
var lengthSentence = 0;
var lengthArray = sections.length;
var forward = true;
var beginning = "Open Banking";
var currentPart = "";
var interval = 50;
var opening = false;


/* ----------------------- 
    TYPING 
-------------------------*/
function writing(text){
	lengthSentence = sections[i].sentence.length;
	var body = $("body");
	if(!opening){ // first part
		setTimeout(function(){	
			if(k < beginning.length){
				if(beginning[k] === "<"){
					console.log("trovato il br");
					currentPart += ' <br id="brName">';
					k=k+4;
				}
				currentPart += beginning[k];
				text.html(currentPart);
				k++;
				writing(text);			
			}else if(k === (beginning.length)){
				currentPart += " <br>";
				text.html(currentPart);
				opening = true;
				writing(text);
			}
		},interval);
	}else if(opening){ // sentences
		setTimeout(function(){
			interval = 50;
			if(j === lengthSentence){
				forward = false;
			}
			if(j === lengthSentence-2){
				$(".afterTyping").one().addClass("onScreen");
			}
			if( j === lengthSentence-1 && forward){
				interval = 2000;
			}
			if(j < lengthSentence && forward ){
				if(sections[i].sentence[j] === "&"){
					currentPart += "<strong>";
				}else if(sections[i].sentence[j] === "%"){
					currentPart += "</strong>";
				}
				else{
					currentPart += sections[i].sentence[j];
				}
				text.html(currentPart);
				j++;
			}else if(j > 0 && !forward){
				if(sections[i].sentence[j] === "&"){
					currentPart = currentPart.slice(0, - 8);
				}else if(sections[i].sentence[j] === "%"){
					currentPart = currentPart.slice(0, - 9);
				}
				else{
					currentPart = currentPart.slice(0, - 1); 
				}
				text.html(currentPart);
				j--;
			}else if(j === 0){
				forward = true;
				/*body.css({
					"background" : sections[i].background});*/
				i++; // loop fra sezioni
			}
			if(i === lengthArray){
				i = 0;
			}
			writing(text);
		}, interval);
	}
}


/* ----------------------- 
    BACKGROUND LOOP 
-------------------------*/
function rand(min, max) {
    return min + Math.random() * (max - min);
}
function changebackground(){
	var body = $("body");
    var h = rand(1, 360);
    var s = rand(80, 90);
    var l = rand(50, 60);
    var h2;
    if(h < 180){
    	h2 = h + 180;
    }else{
    	h2 = h - 180;
    }
    body.css({ // looping background
    	"background" : "hsl(" + h + "," + s + "%,"+ l + "%)"
    });
    $(".fixedBg").css({ // background on hover
    	"background" : "hsl(" + h + "," + s + "%,"+ l + "%)",
    	"color" : "hsl(" + h2 + "," + s + "%,"+ l + "%)"
    });
    /*$(".loopCol").css({
    	"background" : "hsl(" + h + "," + s + "%,"+ l + "%)"
    });*/
	$(".coloredHover").css({ // color links on hover
    	"color" : "hsl(" + h + "," + s + "%,"+ l + "%)"
    });

}



/* ----------------------- 
    COLORS LOOP - OLD // LINKS COLOR
-------------------------*/
function loopColors(){
	var selector = $(".loopCol");
    var h = rand(1, 360);
    var s = rand(0, 100);
    var l = rand(0, 80);
    selector.css({
    	"color" : "hsl(" + h + "," + s + "%,"+ l + "%)"
    });
}

/* ----------------------- 
    PARTICLES SETTINGS 
-------------------------*/
/*function particles(){
	particlesJS('particles-js', {
	  particles: {
	    color: '#fff',
	    color_random: false,
	    shape: 'triangle', // "circle", "edge" or "triangle"
	    opacity: {
	      opacity: 0.8,
	      anim: {
	        enable: true,
	        speed: 1,
	        opacity_min: 0,
	        sync: false
	      }
	    },
	    size: 4,
	    size_random: true,
	    nb: 80,
	    line_linked: {
	      enable_auto: true,
	      distance: 60,
	      color: '#fff',
	      opacity: 1,
	      width: 1,
	      condensed_mode: {
	        enable: false,
	        rotateX: 600,
	        rotateY: 600
	      }
	    },
	    anim: {
	      enable: true,
	      speed: 1
	    }
	  },
	  interactivity: {
	    enable: true,
	    mouse: {
	      distance: 300
	    },
	    detect_on: 'canvas', // "canvas" or "window"
	    mode: 'grab', // "grab" of false
	    line_linked: {
	      opacity: .5
	    },
	    events: {
	      onclick: {
	        enable: false,
	        mode: 'push', // "push" or "remove"
	        nb: 4
	      },
	      onresize: {
	        enable: true,
	        mode: 'bounce', // "out" or "bounce"
	        density_auto: true,
	        density_area: 1000 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
	      }
	    }
	  },
	  /* Retina Display Support 
	  retina_detect: true
	});
}*/

/* ----------------------- 
    NOOB SHIT 
-------------------------*/
	
$(document).ready(function(){
	/*--------------------
		BACKGROUND STUFF
	----------------------*/
	changebackground();
	setTimeout(function(){
		$("body").removeClass("noTransition");
		$("fixedBg").removeClass("noTransition");
		changebackground();
	}, 2000)   
	setInterval(function(){
		changebackground();
	}, 20000);


	/*--------------------
		LOOPING COLORS
	----------------------*/
	/*loopColors();
	setTimeout(function(){ // hack change bg since the beginning
		loopColors();
	}, 2000)   
	setInterval(function(){
		loopColors();
	}, 10000);*/


	/*--------------------
		PARTICLES 
	----------------------*/
	//particles();



	/*--------------------
		TYPING 
	----------------------*/
	var firstTimer = 1000;
	var text = $(".jstext");
	setTimeout(function(){
		writing(text);
		//incipit(text);
	}, firstTimer);
	/*setTimeout(function(){
	}, secondTimer);*/


	/*--------------------
		HOVER 
	----------------------*/
	if( navigator.userAgent.toLowerCase().indexOf('firefox') > -1 ){
    	$("body").addClass("firefoxFix");
	}
	/*var linkHover;
	var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};*/
	/*$(".loopCol").hover(function(){
		if(!isMobile.any()) {
			linkHover = $(this).attr('data-hover');
			$(this).toggleClass("spanActive");
			$("[data-background='"+linkHover+"']").toggleClass("bgActive");
		}
	});*/
});


/*--------------------
		HAVING FUN WITH TWEENMAX 
----------------------*/
$(document).ready(function($) {
	var bgFixed = $(".fixedBg");
	var elements = $(".fixedBg span");
	var triggerHover = $(".loopCol");
	tlHoverIn = new TimelineMax();
	tlHoverOut = new TimelineMax();


	triggerHover.hover(
		function() {
			TweenMax.to($(this).next(".fixedBg"), 0.5, {autoAlpha: 1})
			TweenMax.staggerTo($(this).next(".fixedBg").find("span"), 0.8, { y: 0, ease: Expo.easeOut}, 0);
		},
		 function() {
		 	TweenMax.to($(this).next(".fixedBg"), 0.5, {autoAlpha: 0})
			TweenMax.to($(this).next(".fixedBg").find("span").eq(0), 0.8, { y: 30, ease: Expo.easeOut});
			TweenMax.to($(this).next(".fixedBg").find("span").eq(1), 0.8, { y: 60, ease: Expo.easeOut});
			TweenMax.to($(this).next(".fixedBg").find("span").eq(2), 0.8, { y: 90, ease: Expo.easeOut});
			TweenMax.to($(this).next(".fixedBg").find("span").eq(3), 0.8, { y: 120, ease: Expo.easeOut});
		}
	);
});

















