// INITIAL LOAD SHOW ANIMATION WHILE IMAGES LOAD
	$('body').imagesLoaded( function() {
		var initLoader = $('.init_load_wrap');
		initLoader.show();
		setTimeout(function(){
			$('.body_wrap').fadeIn(100);
			initLoader.hide();
		},1000);
	});
	
	// FOOTER EXPAND & CLOSE
	
	$('footer .toggle_expand').on( 'click', function() {
		$('footer').toggleClass('open_ft');
		$(this).toggleClass('close_btn');
	});
	
	// MOBILE NAV COLLAPSE 
	
	(function () {
		
	    // Create mobile element
	    var mobile = document.createElement('div');
	    mobile.className = 'nav-mobile';
	    document.querySelector('.nav_wrap').appendChild(mobile);
	
	    // hasClass
		    function hasClass(elem, className) {
		        return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
		    }
		
		    // toggleClass
		    function toggleClass(elem, className) {
		        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
		        if (hasClass(elem, className)) {
		            while (newClass.indexOf(' ' + className + ' ') >= 0) {
		                newClass = newClass.replace(' ' + className + ' ', ' ');
		            }
		            elem.className = newClass.replace(/^\s+|\s+$/g, '');
		        } else {
		            elem.className += ' ' + className;
		        }
		    }
	
	    // Mobile nav function
	    var mobileNav = document.querySelector('.nav-mobile');
	    var toggle = document.querySelector('.main_nav');
	    mobileNav.onclick = function () {
	        toggleClass(this, 'nav-mobile-open');
	        toggleClass(toggle, 'nav-active');
	    };
	    
	    
	    // CLOSE NAV ON CLICK
	    $('.main_nav a').on( 'click', function() {
		    if ( $('ul').hasClass('nav-active') ) {
		    	$('ul').toggleClass('nav-active');
		    	console.log(this);
		    };
	    });
	})();
		
	// 	START DJAX AND PAGE LOAD FUNCTIONS

$('document').ready(function($) {

	
    var transition = function($newEl) {
		var $oldEl = this;      // reference to the DOM element that is about to be replaced
		var loader = $('.load_wrap');
		var load_init = $('#load_element');

		// ** Simple fadeout/fadein **
		// $newEl.hide();          // hide the new content before it comes in
		// $oldEl.fadeOut("slow", function() {
		//     $oldEl.replaceWith($newEl);
		//     $newEl.show();
		//     $newEl.fadeIn("fast");
		// });
		
		// ** Fadeout then slide in **
		$oldEl.fadeOut('fast', function () {
			$oldEl.after($newEl);

			$newEl.hide();
			loader.show();
			load_init.removeClass('logo_loader');
			setTimeout(function(){
				load_init.addClass('logo_loader');
			},50);
			setTimeout(function(){
				$('body').imagesLoaded( function() {
					$oldEl.replaceWith($newEl);
					$newEl.fadeIn(200);
					loader.hide();
				});
			},1200);

		});
		
    }
    
   $('body').djax('.updatable', ['ucdenver', './', '/index.php', 'linkedin', '.edu', 'regents', 'jobsatcu', 'wallpapers', '.zip', '.pdf'], transition);
   
   
// SCALE VID ON AJAX PAGE TRANSITION
	
	$(window).bind('djaxLoad', function(e, data) {
		// GA TRACKING ON PAGE TRANSITION
		_gaq.push(['_trackPageview']);
		
		setTimeout(function(){
			$('.flexslider').flexslider({
		      animation: "fade",
		      controlsContainer: "flex-container", 
		      slideshow: false
			});
	    	$(".video_wrap").fitVids();
	    },1000);
	});
		
	// SCROLL TOP BEFORE PAGE TRANSITION
	
	$(window).bind('djaxClick', function(e, data) {
        var bodyelem = ($.browser.safari) ? bodyelem = $("body") : bodyelem = $("html,body");
        $('html,body').animate({
			'scrollTop':$(bodyelem).offset().top - 0
		}); 
	});
	
	// SETUP PINNED ELEMENTS
      $("nav").pinned({
        bounds: 1,
        scrolling:0,
        mobile: false

      });
      
    // HIDE BROWSER BAR FOR IOS
    
    /mobile/i.test(navigator.userAgent) && !window.location.hash && setTimeout(function () {
	  window.scrollTo(0, 1);
	}, 1000);
	
	
	// SCALE VID IF INITIAL PAGE LOAD
	
	$(".video_wrap").fitVids();
	
	// INIT FLEXSLIDER IF DIRECT PAGE LOAD
	
	$('.flexslider').flexslider({
      animation: "fade",
      controlsContainer: "flex-container", 
      slideshow: false
	});
            
});

// SHARE THIS CODE

stLight.options({publisher: "2e673ce2-4fc8-42d6-82bf-59a74fcbb63f", doNotHash: false, doNotCopy: false, onhover: false, hashAddressBar: false});
  
