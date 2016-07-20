/* Jquery scripts */
jQuery( document ).ready(function( $ ) {
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

var $window = $(window),
$html = $('.header-navigation ul.language_switcher');

$window.resize(function resize() {
	if ($window.width() < 514) {
		return $html.addClass('mobile');
	}

  $html.removeClass('mobile');
}).trigger('resize');

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
});
