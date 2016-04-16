define([
  'jquery'
], function($) {
  var Projects = {
    start: function () {
      this.flashSubtitles();
    },
    flashSubtitles: function () {
      var work = $('#projects-div .body .subtitle');
      console.log("projects");
      //flash of titles
      work.addClass('fadein');

      setTimeout(function () {
        work.removeClass('fadein');
      }, 900);
    }
  }

  return Projects;
});