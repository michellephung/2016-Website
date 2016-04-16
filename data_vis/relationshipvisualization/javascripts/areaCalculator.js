var AreaCalculator = function(){
  
  var x=55;
  var y=54;
  var area=2970;
  
  this.getX = function(){
    return x;
  }
  
  this.getY = function(){
    return y;
  }
  
  this.getArea = function(){
    return area;
  }
  
  
  
  this.setX = function(_x){
    if(_x<10) x=10;
    else if(_x>500) x=500;
    else x=_x;
    y=area/x;
    
  }
  
  this.setY = function(_y){
    if(_y<10)   y=10;
    else if(_y>500) y=500;
    else y=_y;
    x=area/y; 
  }
  
  this.setArea = function(_area){
    if(_area<2500) area=2500;
    else if (_area>5000) area = 5000;
    else   area = _area;
    
    var limit = 495;
    
    if(x>limit || y>limit){
      if(x>limit){
       y=area/limit;
      }
      
      if(y>limit){
        x=area/limit;
      }
    
    }else{        
      var ratio = x/y;  //find ratio between old x and old y
      var _y=Math.sqrt(area/ratio);
      var _x=ratio*_y;
      x=_x;
      y=_y;
    }   
  }  
}