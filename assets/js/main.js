/* Jquery scripts */
jQuery( document ).ready(function( $ ) {
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// Add class function for smooth transition
(function($) {
	$(".header-navigation").addClass("tranzited-200");
	$(".header-navigation ul li a").addClass("tranzited-200");
	$(".button").addClass("tranzited-200");
	$(".feature_video_block .feature_video_content a.ftvilink").addClass("tranzited-200");
	$(".LatestNews_block .blockContent ul li a.NewsLink").addClass("tranzited-200");
	$(".Footer_nav ul li a").addClass("tranzited-200");
	$(".content_block .feature_content a.ftvilink").addClass("tranzited-200");

})(jQuery);


// Function for header to change background on trigger
(function($) {

var $trigger = $(".header-navigation .navbar-toggle");
var	$target1 = $(".header-navigation");

$trigger.click(function () {
	$target1.toggleClass("in");  
});

})(jQuery);


// Determine element (portraint or landscape) status by class, 
(function($) {

$( window ).on("load", function() {
	var $winHeight = $(window).height();
	var $winWidth = $(window).width();

	// Give slider height based on window height
	if ( $winWidth < 769 ) {
		$('.slider #slider-with-blocks-1').css('height', $winHeight);
		$('.slider .rsImg').css('height', $winHeight);
		 
	}	
});

})(jQuery);



// Function for header Language switcher, 
// that move element based on screen size.
(function($) {

var $window = $(window);
$target1 = $('.header-navigation ul.language_switcher');
$target2 = $('.header-navigation .langswithermob');
$target3 = $('.header-navigation #myNavbar');

$window.resize(function resize() {
	if ($window.width() < 760) {
		return $target2.prepend($target1);
	}

	$target1.prependTo($target3);


}).trigger('resize');


})(jQuery);

// jQuery window load and resize funcion 
(function($) {

$( window ).on("load resize", function() {
	var winHeight = $(window).height();
	var winWidth = $(window).width();

	// landscape
	if ( winWidth < 1280 && winWidth > (winHeight) ) {
		$('.slider').removeClass('portrait');
		$('.slider').addClass('landscape'); 
	}

	// portrait
	if ( winWidth < 1280 && winHeight > (winWidth) ) {
		$('.slider').removeClass('landscape');
		$('.slider').addClass('portrait'); 
	}


	// Find out element position function
	var RelElement = $( ".header-navigation .navbar-brand" );
	var RelElPos = RelElement.position();
	
	// Get width for sidebar based on relative element position
	var SidebarWidth = RelElPos.left + 300;

	$( ".universities .sidebar" ).css({"width": SidebarWidth, "padding-left": SidebarWidth - 300 });
	$( ".universities .content" ).css({"width": winWidth - SidebarWidth, "padding-right": SidebarWidth - 300 });

});

})(jQuery);

// Scroll to top, footer link 
(function($) {

$('.totoplink').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
 });

})(jQuery);








// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
});
