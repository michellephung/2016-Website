var screenResolutionView = function(calc){

  var products ={
    //name: [width_px,height_px,diagonal_inches]  
    'iPhone 4': [640,960, 3.5],
    'BlackBerry Storm 2':[360,480,3.25],
    'Amazon Kindle':[600,800,6],
    'Amazon Kindle DX':[824,1200,9.7],
    'Apple Air 11-inch':[1366,768,11.6],
    'Apple Air 13-inch':[1440,900,13.3]

  };

  var width = new Array();
  var height = new Array();
  var diagonal = new Array();
  var rectangle= new Array();
  var wLine = new Array();
  var hLine= new Array();
  
  var widthTextBox = new Array();
  var heightTextBox = new Array();
  var diagonalTextBox = new Array();
  var wLengthText=new Array();
  var hLengthText=new Array();
  var shapeAttr = new Array();
  var textAttr = new Array();
  var hideShow = new Array();
  var hidden = new Array();
  var close = new Array();
  var isShown = new Array();
  var isCustom = new Array();
  var hideShow = new Array();
  
  var onScreenBoxes = 4;
  var onScreenShown =0;
  
  var colors = new Array("#0095cb",'#BE007F','#00B211','#f95b00', 'red', 'brown','purple', 'gray','black','#0000FF');
  var background = '#f3f3f3';
  
  //initialize
  width[0]= 200;
  height[0]=350;
  diagonal[0]=3.5;

  widthTextBox[0] = $('#pxWidth0');
  heightTextBox[0] = $('#pxHeight0');
  diagonalTextBox[0] = $('#diagonalInput0');
  addCustom = $('#addCustom');
  addProduct = $('#addProduct');
  productElement=$('#products');
  
  var y=5;
  var x=1;
  var xOffset=15;
  var yOffset=15;
  var measureEndLength =14;
  var fontSize=12;
  var elements=10;
  
  var numberOfRectangles=1;
  var xSize=600;
  var ySize=600;
  var c=Raphael('resolutionCanvas',xSize,ySize);
  
  var initialize = function(){
    setInitalValues();
    addHtml();
    initializeArray();
    initializeProducts();
    eventListeners();
    draw();
  };
  
  var setInitalValues = function(){
    widthTextBox[0].val(width[0]);
    heightTextBox[0].val(height[0]);
    diagonalTextBox[0].val(diagonal[0]);
    calc.setDimensions(diagonal[0], width[0],height[0]);
    hideShowFN(0);
  }
  
  var addHtml= function(){
    for(var index=1; index<onScreenBoxes; index++){
      $('#addAnother'+index).html("<fieldset><label>Dimensions</label> <div class='horizontal'>  <span class='input'>  <input type='text' id='pxWidth"+(index)+"' value='"+(index*75)+"' style='color:"+colors[index]+"'/> </span> <div class='labeltxt'>Horizontal (pixels)</div> </div>  <span id='by'>x</span>  <div class= 'vertical'> <span class='input'>  <input type='text' id='pxHeight"+(index)+"' value='"+(index*75)+"' style='color:"+colors[index]+"' />  </span> <div class='labeltxt'>Vertical (pixels)</div> </div>  <div class='diagonal'> <span class='input'><input type='text' id='diagonalInput"+(index)+"' value='"+(index*3)+"' style='color:"+colors[index]+"''/></span>  <div class='labeltxt'>Diagonal (inches)</div> </div> <div class='dimInfo' id='info"+(index)+"'><span id='DPI"+(index)+"'></span><span class='aspectRatio' id='as"+(index)+"'>AspectRatio:</span><span class='hideShow' id='hideShow"+(index)+"'>- hide</span></div></fieldset>").css({color: colors[index]}).hide();

      widthTextBox[index]=$('#pxWidth'+index);
      heightTextBox[index]=$('#pxHeight'+index);
      diagonalTextBox[index]=$('#diagonalInput'+index);
      hideShowFN(index);
    }
  }
  
  var initializeArray = function(){
      for(var i=1; i<onScreenBoxes;i++){
        width[i] = $('#pxWidth'+i).val();
        height[i] = $('#pxHeight'+i).val();
        diagonal[i] = $('#diagonalInput'+i).val();
        isCustom[i] = 'yes';
        isShown[i] = 'no'
    
      }
      $.each(products, function(key,value){
        width[i]  = value[0];
        height[i] =value[1];
        diagonal[i] = value[2];
        isCustom[i]='no';
        isShown[i]='no';
        products[key].index=i;
        i++;
      });
  }
  
  var initializeProducts= function(){
    var string="";
    var key_name;
    
    $.each(products, function(key,value){      
      key_name=key;
      key_name=key_name.replace(/ /g,"_");
      string = string+"<span class='products' id='"+key_name+"'>+ "+ key+"</span>";
    })
    productElement.html(string);
    productElement.hide();
  }
  
  var eventListeners = function(){
    
    for(var i=0; i<onScreenBoxes;i++){
     widthTextBox[i].change(function(){    draw();        });
     heightTextBox[i].change(function(){   draw();        });
     diagonalTextBox[i].change(function(){ draw();        });

    }
    
    addCustom.hover(function(){
      addCustom.css({color:'green'});
    }, function(){
      addCustom.css({color:'black'});
    });
    
    addProduct.hover(function(){
      addProduct.css({color:'green'});
    }, function(){
      addProduct.css({color:'black'});
    });
  
    addCustom.click(function(){
      widthTextBox[0].css('color', colors[0]);
      heightTextBox[0].css('color', colors[0]);
      diagonalTextBox[0].css('color', colors[0]);
      $('.firstDim').css('color', colors[0]);
      $('#hideShow0').css('display', 'visible');
      
      
      onScreenShown++;
      $('#addAnother'+onScreenShown).show();
      isShown[onScreenShown]='yes';
      
      if(onScreenShown==3){        addCustom.hide();      }
      
      draw();
    });
  
    addProduct.click(function(){
      if(addProduct.html()=="+ Add an existing product screen"){
        addProduct.html('Add an existing product screen');
        productElement.show();
      }else if(addProduct.html()=="Add an existing product screen"){
        addProduct.html("+ Add an existing product screen");
        productElement.hide();
      }
    });
          
   $.each(products, function(key,value){
        
        var key_name=key.replace(/ /g,"_");
        var me=$('#'+key_name);
        var index=products[key].index;
        
        me.click(function(){
          if(me.html()=='+ '+key){
            me.html('- '+key);
            console.log("showme");
            me.css('color', colors[index]);
            isShown[index]='yes';
            draw();
              
          }else if(me.html()=='- '+key){
            me.html('+ '+key);
            me.css('color','black');
            console.log("hideme");
            isShown[index]='no';
            draw();
          } 
      });
    }); 
  }

  var hideShowFN = function(number){
    hideShow[number]=$('#hideShow'+number);
  
    hideShow[number].click(function(){
       if(hideShow[number].html()=='+ show'){
          hideShow[number].html('- hide');
          shapeAttr[number].show();
          hidden[number].show();
          textAttr[number].show();
          isShown[number]='yes';

        }else{
          hideShow[number].html('+ show');
          shapeAttr[number].hide();
          hidden[number].hide();
          textAttr[number].hide();
          isShown[number]='no';
        }   
        
    draw();
         
   });    
  }

  var draw = function(){
    c.clear();

    for(var i=0; i<elements;i++){
      shapeAttr[i] = c.set();
      textAttr[i] = c.set();
      hidden[i]=c.set();
      
      for(var j=0;j<onScreenBoxes;j++){
        width[j]=$('#pxWidth'+j).val();
        height[j]=$('#pxHeight'+j).val();
        diagonal[j]=$('#diagonalInput'+j).val();
      }
      calc.setDimensions(diagonal[i],width[i],height[i]);

      var xTextOffset =30;
      var yTextOffset =90;
      var widthLineY=y+parseFloat(height[i])+yOffset;
      var heightLineX=x+parseFloat(width[i])+xOffset;
      
      var widthInches =calc.getWidthInches()+'", '+width[i]+"px, " +calc.getDotsPerInch()+"ppi";
      var heightInches=calc.getHeightInches()+'", '+height[i]+'px';
      
      if((width[i]>xSize) || (height[i]>ySize)){
         if(width[i]>xSize) xSize=parseFloat(width[i])+40;   
         if(height[i]>ySize) ySize = parseFloat(height[i])+40;
         c.setSize(xSize,ySize); 
         
         $('#resolutionCanvas').css({
          height:ySize,
          width:xSize
         });
      }

      shapeAttr[i].push(
        rectangle[i]= c.rect(x,y,width[i],height[i]),       
        wLine[i] = c.path("M"+x+" "+(widthLineY)+" v"+ measureEndLength+" m 0 -"+measureEndLength/2+" h"+width[i]+"m0 "+measureEndLength/2+" v -"+measureEndLength ),        
        hLine[i] = c.path("M"+(heightLineX)+" "+y+" h"+measureEndLength+" m-"+measureEndLength/2+" 0 v"+height[i]+"m-"+measureEndLength/2+" 0 h"+measureEndLength)
      );
      
      hidden[i].push(
        widthBox = c.rect(xTextOffset-x,widthLineY, widthInches.length*(fontSize-5.5), fontSize+2,8),
        heightBox = c.rect(heightLineX,y+yTextOffset-measureEndLength/2, heightInches.length*(fontSize-5), fontSize+2,8)
          .rotate(-90,heightLineX+measureEndLength/2,y+yTextOffset)
      );
      
      textAttr[i].push(
        wLengthText = c.text(2*x+xTextOffset,widthLineY+measureEndLength/2, widthInches ),
        hLengthText = c.text(heightLineX+measureEndLength/2,y+yTextOffset,heightInches).rotate(-90,heightLineX+measureEndLength/2,y+yTextOffset)
      );
    
      $('#DPI'+i).html('Dots per Inch: '+calc.getDotsPerInch());
      $('#as'+i).html('Aspect Ratio: '+calc.getAspectRatio());
      
      shapeAttr[i].attr({
          fill:colors[i],
          stroke:colors[i],
          'stroke-width':1,
          'stroke-opacity':1,
          'fill-opacity':0.2,
          
      });
      
      textAttr[i].attr({
        fill:colors[i],
        'text-anchor':'start',
        stroke:colors[i],
        'stroke-width':0,
        'font-size':fontSize
      });

      hidden[i].attr({
        fill:background,
        'fill-opacity':1,
        stroke:background
      });
      
      if(isShown[i]=='no'){
          shapeAttr[i].hide();
          hidden[i].hide();
          textAttr[i].hide();
      }
    }   
  }
  initialize();
 }