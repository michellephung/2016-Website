var Rectangles = function(){
  
  var legend = function(space, fillColor){
  
    var canvas = Raphael(space,33,33);
    var box = canvas.rect(3,3, 30,30).attr({
      fill:fillColor,
      stroke:"none"
    });
  
}
  
  legend("blue", "#0095cb");    
  legend("orange", "#f95b00");
  legend("magenta","#BE007F");
  legend("green", "#00B211");
  
  var bigCanvas = Raphael("rectangleTutorialCanvas",700,500);
  
  bigCanvas.rect(10,10,290,315).attr({fill:"#0095cb", stroke:"none"} );
  bigCanvas.rect(10,335,435,155).attr({fill:"#f95b00", stroke:"none"} );
  bigCanvas.rect(310,10,280,150).attr({fill:"#BE007F", stroke:"none"} );
  bigCanvas.rect(310,170,135,155).attr({fill:"#BE007F", stroke:"none"} );
  bigCanvas.rect(455,170,135,155).attr({fill:"#00B211", stroke:"none"} );
  bigCanvas.rect(455,335,135,155).attr({fill:"#00B211", stroke:"none"} );
  
}