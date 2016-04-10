define([
  'jquery'
], function($) {
  
  var pageWidth = $(window).width();
  var pageHeight = $(window).height();
  var centerX = pageWidth/2;
  var centerY = pageHeight/2;
  var mouseX = 0;
  var mouseY = 0;

  const PI = Math.PI;

  var backCircle = {
    x: 0,
    y: 0,
    a: 0,
    r: 0
  };

  var midEllipse = {
    x: 10,
    y: 10,
    a: 0,
    r: 0
  };

  var frontEllipse = {
    x: 10,
    y: 20,
    a: 0,
    r: 0
  };

  function startLetter () {
    
    $( "#startpage" ).mousemove( function (e) {
      var msg = e.pageX + ", " + e.pageY;
      mouseX = e.pageX;
      mouseY = e.pageY;
      changePosition();
    });
  };

  function changePosition () {

    recalculatePositionOnTrack(backCircle, 20);
    recalculatePositionOnTrack(midEllipse, 15);
    recalculatePositionOnTrack(frontEllipse, 10);

    $('#back').css({
      left: backCircle.x,
      top: backCircle.y
    });

    $('#mid').css({
      left: midEllipse.x,
      top: midEllipse.y
    });

    $('#front').css({
      left: frontEllipse.x,
      top: frontEllipse.y
    });
  };

  function recalculatePositionOnTrack (obj, radiusVariable) {
    obj.a = getMouseAngle();
    var rad = degreesToRadians(obj.a);
    obj.r = getMouseLengthFromCenter()/radiusVariable;

    // equation for X and Y coordinates on a circle
    obj.x = obj.r * Math.cos(rad);
    obj.y = obj.r * Math.sin(rad);
  };

  function getMouseAngle () {
    var dy = centerY - mouseY;
    var dx = centerX - mouseX;
    var angle = Math.atan(dy/dx);
    var deg = radiansToDegrees(angle);

    if (mouseIsLeftOfCenter()) {
      deg = 180 + deg;
    }

    return deg;
  };

  function mouseIsLeftOfCenter () {
    return mouseX - centerX < 0;
  };

  function mouseIsBelowCenter () {
    return mouseY - centerY > 0;
  };

  function getMouseLengthFromCenter () {
    return Math.sqrt(Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2));
  };

  function radiansToDegrees (angle) {
    return angle * (180/Math.PI);
  };

  function degreesToRadians (angle) {
    return angle/180 * Math.PI;
  };

  startLetter();
});