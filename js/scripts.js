// johnlusky.com JS
// Version: 3.0
// Author: John Lusky

// Public Vars
var frameHeight = $(window).height();
var frameWidth = $(window).width();
var aboutMn = $("#about-mn");
var workMn = $("#work-mn");
var contactMn = $("#contact-mn");


// Resizer
function resizer(e) {
	var frameHeight = $(window).height();
	var frameWidth = $(window).width();
	
	$("#top").css('height', frameHeight);
	$(".space").css('height', frameHeight);
	$(".carbon").css('height', frameHeight);
	$(".videoBG, .videoBG_wrapper").css({
		'width': frameWidth,
		'height': frameHeight
	});
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

// videoBG 
function videoStarter() {
	$('.space').videoBG({
		mp4:'video/shutterstock_v2529842.mp4',
		ogv:'video/shutterstock_v2529842.ogv',
		webm:'video/shutterstock_v2529842.webm',
		poster:'video/shutterstock_v2529842.jpg',
		scale:true,
		zIndex:0
	});	
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
	
	$(".links-hvr, .topnav-links").click(function(e) {
		e.preventDefault();
	});
	
	$( ".hover-ghost" ).hover(
	  function() {
	    $( ".links-hover" ).fadeIn();
	  }, function() {
	    //$( ".links-hover" ).fadeOut();
	  }
	);
	
	$( ".links-hover" ).hover(
	  function() {
	    //$( ".links-hover" ).css('display', 'block');
	  }, function() {
	    $( ".links-hover" ).fadeOut();
	  }
	);
	
	$(window).stellar();
	
	videoStarter();
		
	$(document).foundation({
		orbit: {
			animation: 'slide',
			timer_speed: 1000,
			animation_speed: 500,
			navigation_arrows: true,
			timer: false,
			bullets: false,
			slide_number: false
		}
	});

	$(".smooth-mobile").click(function() {
		$("#jl-mobile-nav").removeClass("expanded");
		$("#nav-wrapper").removeClass("expanded");
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
	        scrollTop: target.offset().top - 110
	      }, 1000, "easeOutQuad");
	      return false;
	    }
	  }
	});
	
	// Smooth scroll to anchors
	$('.smooth-mobile').click(function() {
	  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
	      || location.hostname == this.hostname) {
	
	    var target = $(this.hash);
	    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	    if (target.length) {
	      $('html,body').animate({
	        scrollTop: target.offset().top
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
	
	if ( aboutMn.hasClass("active") ) {
		console.log("About");
		
		//$("#chart").fadeIn(2000);
		
		$( ".bg-triangle" ).animate({
		    opacity: 1,
		    top: -80
		  }, 1500, function() {
		    // Animation complete.
		});
	}
	
	if ($(window).scrollTop() > frameHeight - 10) {
		// Fires when scrolling down past initial frame height
	}
	else {
		// First when the page is above initial frame height
	}
});
