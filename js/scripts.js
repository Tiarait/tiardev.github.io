/*!
    * Start Bootstrap - Resume v6.0.1 (https://startbootstrap.com/template-overviews/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });
	
	// Hide show bar
	var prevScrollpos = window.pageYOffset;
	window.onscroll = function() {
		var currentScrollPos = window.pageYOffset;
		var elem = document.getElementById('sideNav');
		
		const mq = window.matchMedia( "(min-width: 992px)" );
		if (!mq.matches) {
			if (prevScrollpos > currentScrollPos) {
				elem.style.top = "0";
			} else {
				elem.style.top = "-60px";
			}
			prevScrollpos = currentScrollPos;
		} else {
			elem.style.top = "0";
		}
	}
	
	
	// Paralax bg
	$(window).scroll(function(e){
	  parallax();
	});
	function parallax(){
	  var scrolled = $(window).scrollTop();
	  $('.bg').css('top',-(scrolled*0.2)+'px');
	}

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });
})(jQuery); // End of use strict
