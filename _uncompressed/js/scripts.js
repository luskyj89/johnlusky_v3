// johnlusky.com JS
// Version: 3.5
// Author: John Lusky

// Public Vars
var frameHeight 	= $(window).height();
var frameWidth 		= $(window).width();
var aboutMn 		= $("#about-mn");
var workMn 			= $("#work-mn");
var contactMn 		= $("#contact-mn");
var logo			= $(".logo");
var jobTitle		= $(".idd-hdr");
var hud				= $("#hud");
var space 			= $(".space");

var spaceVideo;

// Resizer
function resizer(e) {
	var frameHeight = $(window).height();
	var frameWidth = $(window).width();

	$("#top").css('height', frameHeight);
	$(".space").css('height', frameHeight);
	$(".carbon").css('height', frameHeight);

	if (frameWidth < 626) {
		var anchorOffset = 50;
	} else {
		var anchorOffset = 0;
	}
}

// Animations
function rollInTopNav() {
	$( ".topnav-links" ).animate({ left: "-259" }, 1000, "easeOutQuad");
	$( ".topnav-about" ).delay(400).animate({ left: "-259" }, 1000, "easeOutQuad");
	$( ".topnav-work" ).delay(200).animate({ right: "-259" }, 1000, "easeOutQuad");
	$( ".topnav-contact" ).delay(600).animate({ right: "-259" }, 1000, "easeOutQuad");

	$( ".logo" ).animate({ opacity: "1" }, 5000, "easeOutQuad");
	$( ".idd-hdr" ).delay(1800).animate({ opacity: "1" }, 2000, "easeOutQuad");

	$(".explore").addClass("entered");
}

// Video BG and HUD Control
function videoStarter() {

	$('#space-video').vide({
		mp4:'video/space-planet-with-reverse50.mp4',
	//	ogv:'video/shutterstock_v2529842.ogv',
	//	webm:'video/shutterstock_v2529842.webm',
		poster:'img/space-poster.jpg',
		}, {
		loop: true,
		muted: true,
		autoplay: true,
		posterType: "jpg",
		className: "space-video"
		});

	// Get instance of the plugin
	var spaceVideo = $('#space-video').data('vide');
	var spaceVideoObject = spaceVideo.getVideoObject();

	hud.mousemove(function( event ) {

		var pageCoords = "( " + event.pageX + ", " + event.pageY + " )";
		var hudPosition = hud.position();

		// Find the position of the cursor inside the "HUD" relative to the width of the window
		// Divide by 4 and round up to get a clean percentage
		var innerHudPosition = Math.round( ( event.pageX - hudPosition.left + 200 ) / 4 );

		console.log("Camera Position: " + innerHudPosition + "%");
		console.log("Video Time: " + spaceVideoObject.currentTime );

		// Set the video frame position relative to innerHudPosition
		spaceVideoObject.currentTime = innerHudPosition / 2;
		spaceVideoObject.pause();

	});

	hud.mouseover(function() {
		space.addClass("seeking-state");
	});

	hud.mouseout(function() {
		// setTimeout(function() { spaceVideoObject.play(); }, 1000);
		spaceVideoObject.play();
		space.removeClass("seeking-state");
	});
}

// Init
function init() {

	resizer();
	rollInTopNav();

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

	$(".show-hidden-text").click(function(e) {
		e.preventDefault();
		$(this).hide();
		$(this).parent().find(".hidden-text").slideDown();
	});

}

$(document).ready(function() {

	if (frameWidth < 626) {
		var anchorOffset = 50;
	} else {
		var anchorOffset = 0;
	}

	init();

	// Smooth scroll to anchors
	$('.smooth').click(function() {
	  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {

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
	  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {

	    var target = $(this.hash);
	    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	    if (target.length) {
	      $('html,body').animate({
	        scrollTop: target.offset().top - anchorOffset
	      }, 1000, "easeOutQuad");
	      return false;
	    }
	  }
	});

	$("#submit_btn").click(function() {
        //get input field values
        var user_name       = $('input[name=name]').val();
        var user_email      = $('input[name=email]').val();
        var user_message    = $('textarea[name=message]').val();

        //simple validation at client's end
        //we simply change border color to red if empty field using .css()
        var proceed = true;
        if(user_name===""){
            $('input[name=name]').css('border-color','red');
            proceed = false;
        }
        if(user_email===""){
            $('input[name=email]').css('border-color','red');
            proceed = false;
        }
        if(user_message==="") {
            $('textarea[name=message]').css('border-color','red');
            proceed = false;
        }

        //everything looks good! proceed...
        if(proceed)
        {
            //data to be sent to server
            post_data = {'userName':user_name, 'userEmail':user_email, 'userMessage':user_message};

            //Ajax post data to server
            $.post('contact_me.php', post_data, function(response){

                //load json data from server and output message
                if(response.type == 'error')
                {
                    output = '<div class="error">'+response.text+'</div>';
                }else{

                    output = '<div class="success">'+response.text+'</div>';

                    //reset values in all input fields
                    $('#contact_form input').val('');
                    $('#contact_form textarea').val('');
                }

                $("#result").hide().html(output).slideDown();
            }, 'json');

        }
    });

    //reset previously set border colors and hide all message on .keyup()
    $("#contact_form input, #contact_form textarea").keyup(function() {
        $("#contact_form input, #contact_form textarea").css('border-color','');
        $("#result").slideUp();
    });

});

$( window ).resize(function() {
	resizer();
});


$(window).scroll( function() {

	if ($(window).scrollTop() > frameHeight - 10) {
		// Fires when scrolling down past initial frame height
	}
	else if ( $(window).scrollTop() < 100 ) {
		logo.removeClass("fade-off");
		logo.addClass("fade-on");

		jobTitle.removeClass("fade-off");
		jobTitle.addClass("fade-on");
	}
	else if ( $(window).scrollTop() > 100 ) {
		logo.removeClass("fade-on");
		logo.addClass("fade-off");

		jobTitle.removeClass("fade-on");
		jobTitle.addClass("fade-off");
	}

	if ( $(window).scrollTop() > 1000 ) {
		$( ".bg-triangle" ).animate({
		    opacity: 1,
		    top: -120
		  }, 1500);
	}
});
