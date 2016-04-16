define([
  'jquery'
], function($) {
  var Work = {
    start: function () {
      this.flashSubtitles();
    },
    flashSubtitles: function () {
      var work = $('#work-div .body .subtitle');
      
      //flash of titles
      work.addClass('fadein');

      setTimeout(function () {
        work.removeClass('fadein');
      }, 900);
    }
  }

  return Work;
});
