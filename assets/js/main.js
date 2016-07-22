/* Jquery scripts */
jQuery( document ).ready(function( $ ) {
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// Add class function for smooth transition
(function($) {
	$(".header-navigation").addClass("tranzited-200");
	$(".header-navigation ul li a").addClass("tranzited-200");
	$(".button").addClass("tranzited-200");

})(jQuery);


// Function for header to change background on trigger
(function($) {

var $trigger = $(".header-navigation .navbar-toggle");
var	$target1 = $(".header-navigation");

$trigger.click(function () {
	$target1.toggleClass("in");  
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








// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
});
