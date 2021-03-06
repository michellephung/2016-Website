MoveAndDrag = function(){

  var R = Raphael("draggableArea", 650, 550);    
  var box = R.rect(100, 100, 100, 100).attr({//big
            fill: "#0093D0",
            stroke: "none",
            opacity: .5,
            cursor: "move"
        })
  var sizer = R.rect(180, 180, 20, 20).attr({//little
            fill: "#0093D0",
            stroke: "none",
            opacity: .5,
            cursor: 'pointer'
        })
  box.sizer = sizer;
  sizer.box = box;
  
  // start, move, and up are the drag functions
  var start = function () {
    // storing original coordinates
    this.ox = this.attr("x");
    this.oy = this.attr("y");


    this.sizer.ox = this.sizer.attr("x");
    this.sizer.oy = this.sizer.attr("y");
   }
  
  var move = function (dx, dy) {
    var newX = box.ox + dx;
    var newY = box.oy + dy;
    
    var maxWidth = R.width - box.attr('width');
    var maxHeight = R.height - box.attr('height');
    
    // keep box within horizontal bounds
    if(newX < 0){
      newX = 0;
    } else if(newX > maxWidth) {
      newX = maxWidth;
    }

    // keep box within vertical bounds    
    if(newY < 0){
      newY = 0;
    } else if(newY > maxHeight) {
      newY = maxHeight;
    }
    
    // move box to new position
    box.attr({
      x: newX, 
      y: newY
    });
    
    // move sizer to new position
    box.sizer.attr({
      x: box.attr('x') + box.attr('width') - box.sizer.attr('width'), 
      y: box.attr('y') + box.attr('height') - box.sizer.attr('height')
     });
        
  }
  
  var up = function () {
      // restoring state
      this.attr({opacity: .5});
      this.sizer.attr({opacity: .5});        
  }
  
  var resize_start = function () {
      // storing original coordinates
      this.ox = this.attr("x");
      this.oy = this.attr("y");

      this.box.ow = this.box.attr("width");
      this.box.oh = this.box.attr("height");        
  }
  var resize_move = function (dx, dy) {
    // move will be called with dx and dy
    
    var newX = this.ox + dx;
    var newY = this.oy + dy;
    
    var minX = box.attr('x');
    var minY = box.attr('y');
    
    var maxX = R.width - this.attr('width');
    var maxY = R.height - this.attr('height');
    
    var newWidth = this.box.ow + dx;
    var newHeight = this.box.oh + dy;
    
    var minWidth = sizer.attr('width');
    var minHeight = sizer.attr('height');
    
    var maxWidth = R.width - box.attr('x');
    var maxHeight = R.height - box.attr('y');
    
    // keep sizer within horizontal bounds
    if(newX < minX){
      newX = minX;
    } else if(newX > maxX) {
      newX = maxX;
    }

    // keep sizer within vertical bounds    
    if(newY < minY){
      newY = minY;
    } else if(newY > maxY) {
      newY = maxY;
    }
    
    if(newWidth < minWidth){
      newWidth = minWidth;
    } else if(newWidth > maxWidth){
      newWidth = maxWidth;
    }
    
    if(newHeight < minHeight){
      newHeight = minHeight;
    } else if(newHeight > maxHeight){
      newHeight = maxHeight;
    }
    
    this.attr({
      x: newX, 
      y: newY
    });
    
    this.box.attr({
      width: newWidth, 
      height: newHeight
    });
      
  };   
  
  // add event lsiteners to box and resize widget
  box.drag(move, start, up);
  sizer.drag(resize_move, resize_start);
};


