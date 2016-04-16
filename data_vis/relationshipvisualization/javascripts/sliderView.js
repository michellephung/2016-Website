//sliderView.js
var AreaCalculatorSliderView = function(calc){
  //text boxes
  this.xBox = $('#xBox');
  this.yBox = $('#yBox');
  this.areaBox = $('#areaInput');
  
  //this box is an HTML div
  this.visualizationElement = $('#areaVisualization');  
  
  //the jQuery UI sliders 
  this.xSlider =$('#xSlider');
  this.ySlider =$('#ySlider');
  this.areaSlider = $('#areaSlider');
 
  this.initialize = function(){
    this.initSliders();
    this.eventListeners();
    this.refreshScreen();
  }
  
  var self = this;
  
  this.initSliders = function(){
   this.xSlider.slider({
      min:10,
      max:500,
      value:55      
    });

    this.ySlider.slider({
      min:10,
      max:500,
      value:54, 
      orientation: 'vertical'
    }); 
     
    this.areaSlider.slider({
      min:2500,
      max:5000,
      value:2970
    });
    
  }
  
  this.refreshScreen = function(){
    //calculates distance from top of enclosing div, so that the picture grows up, and not down
    var mt=500-calc.getY();
    this.visualizationElement.css("margin-top", mt);
    this.visualizationElement.css("background-color", '#0093D0');
    
    //updates sliders
    this.xSlider.slider("option","value",calc.getX());
    this.ySlider.slider("option","value",calc.getY());
    this.areaSlider.slider("option","value",calc.getArea());
      
    //update on screen div  
    this.visualizationElement.width(calc.getX());
    this.visualizationElement.height(calc.getY());

    //update text boxes
    this.areaBox.val(calc.getArea()); 
    this.xBox.val(calc.getX().toFixed(2));
    this.yBox.val(calc.getY().toFixed(2));  
  }

 
  this.eventListeners = function(){
    this.xBox.change(function(){
      calc.setX(parseFloat(this.value));
      self.refreshScreen();
    });
   
    this.yBox.change(function(){
      calc.setY(parseFloat(this.value));
      self.refreshScreen();
    });
    
    this.areaBox.change(function(){
      calc.setArea(parseFloat(this.value));
      self.refreshScreen();
    });
    
    this.xSlider.bind("slide", function(){
      calc.setX(self.xSlider.slider("option","value"));
      self.refreshScreen();
    });
    
    this.ySlider.bind('slide', function(){
      calc.setY(self.ySlider.slider("value"));
      self.refreshScreen();
    });
    
    this.areaSlider.bind('slide', function(){
      calc.setArea(self.areaSlider.slider('value'));
      self.refreshScreen();      
    });
  }
  
  this.initialize();

};