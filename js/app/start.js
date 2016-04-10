define([
  'jquery',
  'swapAllSVG',
  '../vendor/jquery.fullPage'
], function($, Swap, FullPage) {

  $(document).ready(function() {
      $('#fullpage').fullpage({
        //Navigation
        anchors:['m', 'hello', 'work', 'projects', 'contact'],

        //Scrolling
        css3: true,
        scrollingSpeed: 800,

        //Design
        verticalCentered: true,
        paddingTop: '0px',
        fixedElements: '#sidebar',

        //events
        onLeave: function(index, nextIndex, direction){
          if (index === 1) {
            expandSidebar();
          }
        },
        afterLoad: function(anchorLink, index){
          if (anchorLink === 'm') {
            minimizeSidebar();
          } else {
            expandSidebar();
          }

          //anchor name is not loading by default
          var anchor = getAnchorName();
          if (anchorLink !== anchor) {
            $.fn.fullpage.moveTo(anchor);
          }
        }
    });
  });

  $('#startheart-container').click(function () {
    $.fn.fullpage.moveSectionDown();
  })

  function expandSidebar () {
    $('#sidebar').addClass('show');
    $('#startheart-container').addClass('moveup');
    $('.heart').addClass('moveup');
  }

  function minimizeSidebar () {
    $('#sidebar').removeClass('show');
    $('#startheart-container').removeClass('moveup');
    $('.heart').removeClass('moveup');
  }

  function getAnchorName() {
    var url = document.location;
    return url.hash.split("#")[1];
  }
});
