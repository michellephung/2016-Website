// draggableView.js
var AreaCalculatorDraggableView = function(calc){
  //text boxes
  this.xBox = $('#xBox');
  this.yBox = $('#yBox');
  this.areaBox = $('#areaInput');
  var ylimit = 500;
  var xlimit = 500; 
  this.areaSlider = $('#areaSlider');
  
  var canvas= Raphael("draggableArea", xlimit, ylimit);    
  
  
  var box = canvas.rect(0, ylimit-calc.getY(), calc.getX(), calc.getY()).attr({
          fill: "#0093D0",
          stroke: "none",
          opacity: .5,
      }),
  
   upHandle = canvas.rect(0, ylimit-calc.getY(), calc.getX(), 10).attr({ 
          fill: "#0093D0",
          stroke: "none",
          opacity: .5
      }),
  

   sideHandle = canvas.rect(calc.getX()-10,ylimit-calc.getY(),10,calc.getY()).attr({ 
      fill:"#0093D0",
      stroke:"none",
      opacity: .5
    });
    
  

  var self = this; 
  
  this.areaSlider.slider({
      min:2500,
      max:5000,
      value:2970
    }); 
    
    
    
  this.refreshBoxes    =  function(){
  
    self.xBox.val(calc.getX().toFixed(2)); 
    self.yBox.val(calc.getY().toFixed(2));
    self.areaBox.val(calc.getArea().toFixed(2));
    self.areaSlider.slider("value",calc.getArea());
  }

  
  this.changeSize = function(){
    
    box.attr({
        height:calc.getY(),
        width:calc.getX(),
        x:0,
        y:ylimit-calc.getY()
    });

    upHandle.attr({
        width:calc.getX(),
        x:0,
        y:ylimit-calc.getY()
    });
    sideHandle.attr({
        x: calc.getX()-10,
        y:ylimit-calc.getY(),
        height: calc.getY()
    }); 
    
  
    
      
  }
      
   var start = function(){
      //store start coordinates
      this.ox = this.attr("x");
      this.oy = this.attr("y");
   }
   
     
  var upMove = function(dx, dy){  
    var area = calc.getArea();
      
    var newYPosition = this.oy+dy;
    var width= area/(ylimit-newYPosition);
    
    if(newYPosition >(ylimit-10)){ 
      this.box.attr({
        height:10,
        width: area/10,
        y:ylimit-10
      });
      
      upHandle.attr({
        height:10,
        width:area/10,
        y:ylimit-10, 
        x:0
      });
      
      sideHandle.attr({
        height:10,
        width:10,
        y:ylimit-10,
        x:this.box.attr("width")-10
      });
      
      
      
    }else if(self.xBox.val()>10.1){
      this.box.attr({ 
        y: newYPosition,
        height: ylimit-newYPosition,
        width: area/ (ylimit-newYPosition)
      });
      
      this.attr({ 
        y:newYPosition, 
        width: width
      });
      
      sideHandle.attr({  
        height: ylimit-newYPosition,
        x: this.box.attr("width")-10, 
        y: newYPosition
      });
      
          
      
    }else{   //this else puts a limit on how TALL the box can grow                     
      this.box.attr({ 
          height: area/10,
          width: 10, 
          y: ylimit-(area/10),
          x:0
        });    
        
      upHandle.attr({
        x:0,
        y: ylimit-area/10,
        width:10,
        height:8
      });
      
      sideHandle.attr({
        height: area/10,
        width:10,
        x:0,
        y:(ylimit-area/10)
      });
      
  }
     
   calc.setX(width);
   self.refreshBoxes();   

   }
   
   var sideMove = function(dx,dy){ 
    var area = calc.getArea();
    var ht = area/(this.ox+dx);
    var wd = this.ox+dx;

    if(wd<10){  //this is if you drag it too left (tall)
      this.box.attr({
        x:0,
        y:ylimit-area/10,
        width:10,
        height: area/10,
        
      });
      
      upHandle.attr({
        height:10,
        width:10,
        x:0,
        y:ylimit -(area/10)  
      });
      
      sideHandle.attr({
        height:area/10,
        width:10,
        y:ylimit-(area/10),
        x:0
      });
      
    }else if(self.yBox.val()>10.1){  
      this.box.attr({  
        width: this.ox+dx,
        height: ht ,
        y:xlimit-ht,
        x:0
      });
          
      upHandle.attr({    
        width:this.ox+dx,
        height:10,
        y:ylimit-ht,
        x:0
      });
          
      this.attr({ 
        x:this.ox+dx-10,
        y:xlimit-ht,
        height:ht,
        
      });
      
    }else{   //this else is if you drag it too far right (flat)
      this.box.attr({
        width:area/10,
        y:ylimit-10,
        height:10
      });  
      
      sideHandle.attr({
        height:10,
        y:ylimit-10,
        x:(area/10)-10
      });
      
      upHandle.attr({
        height:10,
        y:ylimit-10,
        width: area/10
      });             
             
    }
    calc.setY(ht);
    self.refreshBoxes();
  }  
  
  
   
   
  //start and move are the resize functions;
  upHandle.drag(upMove, start);
  upHandle.box = box;
  sideHandle.drag(sideMove,start);
  sideHandle.box = box;

  
  this.getBoxAttr = function(attr) {
   return box.attr(attr);
  }
 
  this.eventListeners = function(){
  
    this.xBox.change(function(){
      calc.setX(parseFloat(this.value));
      self.refreshBoxes();
      self.changeSize();      
    });
    
    this.yBox.change(function(){
      calc.setY(parseFloat(this.value));
      self.refreshBoxes();
      self.changeSize();
    });
    
    this.areaBox.change(function(){
      calc.setArea(parseFloat(this.value));
      self.refreshBoxes();
      self.changeSize();
    });
    
    this.areaSlider.bind('slide', function(){
      calc.setArea(self.areaSlider.slider('value'));
      self.refreshBoxes();
      self.changeSize();
    });
    
  }    
  
  this.eventListeners();
};
