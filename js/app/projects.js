define([
  'jquery'
], function($) {
  var Projects = {
    start: function () {
      this.flashSubtitles();
    },
    flashSubtitles: function () {
      var work = $('#projects-div .body .subtitle');
      //flash of titles
      work.each(function (i, el) {
        setTimeout(function () {
          $(el).addClass('fadein');
        }, i*150);
      });

      setTimeout(function () {
        work.each(function (i, el) {
          setTimeout(function () {
            $(el).removeClass('fadein');
          }, i*150);
        });
      }, 600);
    }
  }

  return Projects;
});
