
define([
  'jquery',
  'swapAllSVG'
], function($) {
  var pageHeight = $(window).height();

  $(window).scroll(function () {
    var top = $(window).scrollTop();
    if (top > pageHeight/2) {
      $('#sidebar').addClass('show');
      $('#startheart-container').addClass('moveup');
      $('.heart').addClass('moveup');
    } else {
      $('#sidebar').removeClass('show');
      $('#startheart-container').removeClass('moveup');
      $('.heart').removeClass('moveup');
    }
  });
});
