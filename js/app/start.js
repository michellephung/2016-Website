
define([
  'jquery'
], function($) {
  var pageHeight = $(window).height();

  $(window).scroll(function () {
    var top = $(window).scrollTop();
    if (top > pageHeight/2) {
      $('#sidebar').addClass('show');
    } else {
      $('#sidebar').removeClass('show');
    }
  });
  
});
