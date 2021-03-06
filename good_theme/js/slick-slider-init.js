/**
 * Initialize Slick Slider
 * Options available at http://kenwheeler.github.io/slick/
 */


(function ($, Drupal) {
  Drupal.behaviors.slickSlider = {
    attach: function (context, settings) {

      // Once ensures that this is only attached one time, even if there's ajax going on somewhere
      $(context).find('.slick-slider').once('slick').slick({
        mobileFirst: true,
        slidesToShow: 1,
        infinite: true,
        centerPadding: '40px',
        // Att bootstrap's medium breakpoint, add centermode and variable width;
        responsive: [
          {
            breakpoint: 768,
            settings  : {
              centerMode: true,
              variableWidth: true,
            }
          }
        ]
        }
      );
    }
  };
})(jQuery, Drupal);

