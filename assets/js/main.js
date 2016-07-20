/* Jquery scripts */
jQuery( document ).ready(function( $ ) {
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// Function for header Language switcher, 
// that move element based on screen size.
(function($) {

var $window = $(window),
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
