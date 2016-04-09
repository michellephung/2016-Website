var pageWidth = $(window).width();
var pageHeight = $(window).height();

var backCircle = {
    x: 0,
    y: 0,
    angle: 0,
    cx: 0,
    cy: 0,
    r: 10,
    majorAxis: 1,
    minorAxis: 1
}

var midEllipse = {
    x: 10,
    y: 10,
    angle: 0,
    cx: 0,
    cy: 0,
    r: 1,
    majorAxis: 10,
    minorAxis: 5
}

var frontEllipse = {
    x: 10,
    y: 20,
    angle: 0,
    cx: 0,
    cy: 0,
    r: 1,
    majorAxis: 1,
    minorAxis: 20
}

function start () {
  
  $( "#startpage" ).mousemove(function( e ) {
    var msg = e.pageX + ", " + e.pageY;
    changePosition(e.pageX, e.pageY);
  });
}

function changePosition (mouseX, mouseY) {

  var mouseAngle = ;
  recalculatePositionOnTrack(backCircle);
  recalculatePositionOnTrack(midEllipse);
  recalculatePositionOnTrack(frontEllipse);

  $('#back').css({ // defaults top: 0 left: 0
    left: backCircle.x,
    top: backCircle.y
  });

  $('#mid').css({ // defaults top: 10 left: 10
    left: midEllipse.x + 10,
    top: midEllipse.y + 10
  });

  $('#front').css({ // defaults top: 10 left: 20
    left: frontEllipse.x  + 20,
    top: frontEllipse.y + 10
  })



}

function recalculatePositionOnTrack (obj) {
  var rad = degreesToRadians(obj.angle);
  
  // equation for X and Y coordinates on a ellipse
  obj.x = (obj.cx + obj.r * Math.cos(rad)) * obj.majorAxis;
  obj.y = (obj.cy + obj.r * Math.sin(rad)) * obj.minorAxis;

  //increase position on ellipse
  obj.angle = obj.angle + 10;
}

function degreesToRadians(angle) {
  return angle/180 * Math.PI;
}

start();