// johnlusky.com JS
// Version: 3.0
// Author: John Lusky

// Public Vars
var frameHeight = $(window).height();
var frameWidth = $(window).width();

// Resizer
function resizer(e) {
	var frameHeight = $(window).height();
	var frameWidth = $(window).width();
	
	$("#hero").css('height', frameHeight);
	$(".space").css('height', frameHeight);
	$(".carbon").css('height', frameHeight);
}

// Animations 

function rollInTopNav() {
	$( ".topnav-links" ).animate({ left: "-259" }, 1000, "easeOutQuad");
	$( ".topnav-about" ).delay(400).animate({ left: "-259" }, 1000, "easeOutQuad");
	$( ".topnav-work" ).delay(200).animate({ right: "-259" }, 1000, "easeOutQuad");
	$( ".topnav-contact" ).delay(600).animate({ right: "-259" }, 1000, "easeOutQuad");	
	
	$( ".logo" ).delay(1600).animate({ opacity: "1" }, 2000, "easeOutQuad");
	$( ".idd-hdr" ).delay(1800).animate({ opacity: "1" }, 2000, "easeOutQuad");
	$( ".explore" ).delay(2000).animate({ opacity: ".6" }, 2000, "easeOutQuad");	
}

// Init
function init() {
	resizer();

	rollInTopNav();
	
	console.log(frameHeight);
	
	$( ".explore" ).hover(
	  function() {
	    $( ".explore" ).animate({ opacity: "1" }, 700, "easeOutQuad");
	  }, function() {
	    $( ".explore" ).animate({ opacity: ".6" }, 700, "easeOutQuad");
	  }
	);
	
	$(".links-hvr").click(function(e) {
		e.preventDefault();
	});
	
	$(window).stellar();
	
	$('.space').videoBG({
		mp4:'video/shutterstock_v2529842.mp4',
		ogv:'video/shutterstock_v2529842.ogv',
		webm:'video/shutterstock_v2529842.webm',
		poster:'video/shutterstock_v2529842.jpg',
		scale:true,
		zIndex:0
	});
	
	$(document).foundation({
	  // specify the class used for active sections
	  active_class: 'active',
	  // how many pixels until the magellan bar sticks, 0 = auto
	  threshold: 0,
	  // pixels from the top of destination for it to be considered active
	  destination_threshold: 20,
	  // calculation throttling to increase framerate
	  throttle_delay: 50 
	});
		
};

$(document).ready(function() {
	
	init();
	
	// Smooth scroll to anchors
	$('.smooth').click(function() {
	  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
	      || location.hostname == this.hostname) {
	
	    var target = $(this.hash);
	    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	    if (target.length) {
	      $('html,body').animate({
	        scrollTop: target.offset().top - 95
	      }, 1000, "easeOutQuad");
	      return false;
	    }
	  }
	});
	
});

$( window ).resize(function() {
	resizer();
});


$(window).scroll( function() {
	if ($(window).scrollTop() > frameHeight - 10) {
		// Fires when scrolling down past initial frame height
	}
	else {
		// First when the page is above initial frame height
	}
});
