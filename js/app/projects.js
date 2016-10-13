define([
  'jquery'
], function($) {
  var Projects = {
    start: function () {
      this.flashSubtitles();
    },
    flashSubtitles: function () {
      var projects = $('#projects-div .body .subtitle');
      //flash of titles
      projects.each(function (i, el) {
        setTimeout(function () {
          $(el).addClass('fadein');
        }, i*150);
      });

      setTimeout(function () {
        projects.each(function (i, el) {
          setTimeout(function () {
            $(el).removeClass('fadein');
            $(el).addClass('gray');
          }, i*150);
        });
      }, 600);

      setTimeout(function () {
        projects.each(function (i, el) {
          $(el).addClass('gray');
        });
      }, 4000);
    }
  }

  return Projects;
});
