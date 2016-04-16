//SeesawView.js
var SeesawView = function(){


  var calsIn;           // slider
      calsOut=0;        // slider
      daysTillGoal=60;  // slider
      
  var calsOutMin=0,
      calsInMin=0,
      calsOutMax=0,
      calsInMax=0;
  

  var calorieDivisor=30;   
  var net=0,
      nnet,
      b;

  var fulcrumX =320, //change fulcrumX & fulcrumY to move entire seesaw around
      fulcrumY=450,  
      fulcrumHeight=75,
      fulcrumBase=60,
      sides = fulcrumBase/2;
 
  var seesaw,
      seesawLength=480, //this number should be 4x the number of days you want in the calendar (line 69)
      seesawWidth = 8,
      spaceAboveFulcrum=-8,
      seesawCenterX =fulcrumX+sides,
      seesawCenterY=fulcrumY-fulcrumHeight-seesawWidth-spaceAboveFulcrum-5;
  var slopeShrinker=4000;
   
  var indicatorPointerHeight = 20,
      indicatorX =seesawCenterX - 0.375*seesawLength,    //adjust 0.375 to move indicators left or right
      indicatorY = seesawCenterY - indicatorPointerHeight - seesawWidth*1.5 -5,
      indicatorArrowBaseL = 2;
      indicatorArrowStrokeWidth = 15,
      indicatorArrowWidth=50,
      indicatorLabelHeight =50,
      indicatorColor = "#0093D0",
      indicatorMidStroke = 3,
      indicatorIncrement =5,
      iconColor = 'white',
      handleColor='white' ;
      
  var calsWidth = indicatorArrowWidth+indicatorArrowStrokeWidth+indicatorArrowBaseL-indicatorMidStroke,
      halfStroke = indicatorArrowStrokeWidth/2, 
      halfMidStroke= indicatorMidStroke/2,
      calX = indicatorX -halfStroke +halfMidStroke,
      textX=calX+32,
      caloriesColor = '#75CEF4';
      
  var foodIndicator,
      foodCalories,
      foodLabel,
      foodArrow, foodCaloriesBox, foodLabelC, foodLabel, foodText, foodLabelText,
      foodHandle,
      foodLines;   
      
  var exerciseIndicator,
      exerciseIndicatorY = seesawCenterY + indicatorPointerHeight + seesawWidth*1.5 + seesawWidth, 
      exerciseArrow,
      exerciseCaloriesBox,
      exerciseLabel,
      exerciseLabelC,
      exerciseText,
      exerciseLabelText,
      exerciseHandle,
      eGripper;
  var ped, head;
      
  var calendarGroup = new Array(),
      days=seesawLength/4, 
      tickspace=2,
      calSmallTickWidth=1,
      calPixelsBelowFulcrum = 50,
      calendarLength = seesawLength/2,
      tickX=fulcrumX+sides,
      calY = fulcrumY+calPixelsBelowFulcrum,
      calYOffset =20,
      calSmallTickHeight=6,
      circleRadius =12,
      calendarVLines,
      verticalLineColor='#D8D8D8';
      
  var goalBall,
      goalBallRadius =18,
      gdate=35,    //gdate sets the days in the future where you want to goal ball on start up
      goalX=seesawCenterX+gdate*tickspace,  
      goalY=seesawCenterY,
      goalBallText, 
      goalBallColor = "#0093D0",
      goalSet,
      goalBallLabel,
      goalLabelOffsetX=0,
      goalLabelOffsetY=10,
      goalInvisible,
      line,
      moveYText=-2;;
      
    
  var c = Raphael("seesawCanvas",700,700);
  var self=this;
  var calc;
  
  var fontFamily = 'Helvetica, Arial, sans-serif',
      fontSize = 16,
      goalBallFontSize=15,
      textColor='white',
      darkGrey='grey',
      
      labelFontSize=10,
      labelsFontFamily='Verdana',
      labelColor='white',
      linesSet = c.set();
  var adjustmentsMade= 0;
  
  //starting conditions for the 'About You' section are set here, 
  //they will be reflected when page renders for the first time
  var person = new Object();    
    person.age = 28; 
    person.height=68; 
    person.currentWeight=135; 
    person.gender = 'Male';     //'Male' or 'Female'
    person.activityFactor="Lightly Active";
    /* Selections for activityFactor:  
        "Extremely Active", 
        "Very Active",
        "Moderately Active",
        "Lightly Active", 
        "Sedentary",  
        "Coma"   */
  
//-----------------------------Initialize()-------------------------------------  
  this.draw = function(){
    
    c.clear();   
    this.drawCalendar();
    calendarGroup[gdate].show();
    this.drawSeesaw();
    this.drawFoodIndicator();
    this.drawExerciseIndicator();
    this.drawGoalBall();
    this.hoverLines();
    goalSet.drag(moveGoal,startGoal);
    goalBallText.drag(moveGoal,startGoal);
    line.drag(moveGoal,startGoal);
    this.drawWeightScale();
  }
  
  this.initialize = function(){
    this.setInitialConditions();
    this.initSliders();
    this.eventListeners();
    this.startCalc();
    this.draw();   
  }
  
  this.setInitialConditions = function(){
    $('#ageText').html(person.age);
    $('#heightText').html(GetFormattedHeight(person.height));
    $('#weightText').html(person.currentWeight);
    $('#gender').val(person.gender);
    $('#activityLevel').val(person.activityFactor);
    
  }
//--------------------------Sliders and Form Elements ----------------------------  
  this.ageSlider = $('#age');
  this.heightSlider = $('#height');
  this.weightSlider = $('#weight');
  
  this.ageText = $('#ageText');
  this.heightText = $('#heightText');
  this.weightText = $('#weightText');
  
  var genderSelection =$('#gender');
  var activityLevelSelection=$('#activityLevel');
  
  this.initSliders = function(){
    this.ageSlider.slider({
      min:18,
      max:75,
      value:person.age
    });
    
    this.heightSlider.slider({
      min:58,
      max:84,
      value:person.height
    });
    
    this.weightSlider.slider({
      min:100,
      max:280,
      value:person.currentWeight
    });
    
    //event listeners
    this.ageSlider.bind('slide', function() {
      self.ageText.html(self.ageSlider.slider("option", "value"));
      person.age = self.ageSlider.slider("option", "value");
      self.startCalc(); 
      self.draw();
    });
    
    this.heightSlider.bind('slide', function() {
      self.heightText.html(GetFormattedHeight(self.heightSlider.slider("option", "value")));
      person.height = self.heightSlider.slider("option", "value");
      self.startCalc();
      self.draw();
    });
    
    this.weightSlider.bind('slide', function() {
      self.weightText.html(self.weightSlider.slider("option", "value"));
      person.currentWeight = self.weightSlider.slider("option", "value");
      self.startCalc(); 
      self.draw();
    });

  }
  
  this.eventListeners = function(){
    
    genderSelection.change(function(){
      person.gender = $('#gender :selected').text();
      self.startCalc(); 
      self.draw();
    })
    activityLevelSelection.change(function(){
      person.activityFactor = $('#activityLevel :selected').text();
      self.startCalc(); self.draw();
    })
  }

  
//---------------------------------start Calculator-----------------------------
  this.startCalc = function(){
    adjustmentsMade=0;
    calc = new WeightLossCalculator(person);
    calsInMin = calc.getFoodCalMin();
    
    var roundCalsInMin=calsInMin.toFixed(0) % 5;
    calsInMin=calsInMin-roundCalsInMin; 
    
    calsInMax = calc.getFoodCalMax();
    var roundCalsInMax=calsInMax.toFixed(0) % 5;
    calsInMax=calsInMax -roundCalsInMax;
    
    calsIn = calsInMin;
    calsOut = calsOutMin;
    calsOutMax= calc.getCalsOutMax();
    calc.setCalsIn(calsIn);
    calc.setCalsOut(calsOut);
    net = calc.dailyNetCals();
    
  }  
//-----------------------------Seesaw and Fulcrum ----------------------------- 
  
  this.drawSeesaw = function(){    
    var fulcrum= c.path(
      "M"+fulcrumX+","+fulcrumY+
      " l"+sides+",-"+fulcrumHeight+
      " l"+sides+"," +fulcrumHeight+
      " l-"+fulcrumBase+",0").attr({
      fill:darkGrey,
      stroke:darkGrey,
      "stroke-linejoin":"round",
      "stroke-linecap":"round",
      "stroke-width":6
    }); 
    
    nnet=-1*net/slopeShrinker, 
    b=seesawCenterY-(nnet*seesawCenterX);
  
    
    var mx=seesawCenterX-seesawLength/2,
        my=mx*(nnet)+b,
        lx=mx+seesawLength,
        ly=(seesawLength+mx)*(nnet)+b;
    
    indicatorY=indicatorX*nnet+b-spaceAboveFulcrum*10;
    exerciseIndicatorY=indicatorX*nnet+b+spaceAboveFulcrum*10;
    
    
    
    seesaw = c.path("M"+mx+','+my+'L'+lx+' '+ly).attr({
      stroke:darkGrey,
      'stroke-width':seesawWidth/2,
      "stroke-linecap":"round"
    });   
     

  }
  
//---------------------------Goal Ball functions()----------------------------   
  
  this.drawGoalBall = function(){
    goalSet = c.set();    
    var goalY = goalX*nnet+b;
    moveYText=-2;    
    
    goalSet.push(
      goalBall = c.circle(goalX,goalY,goalBallRadius ).attr({
        fill:goalBallColor, 
        stroke:"none",
      }),    
      
      goalBallText = c.text(goalX,goalY+moveYText,calc.goalWeight(gdate)).attr({
        fill:textColor,
        'font-family':fontFamily,
        'font-size':goalBallFontSize
      }),
      
      goalBallLabel =c.text(goalX+goalLabelOffsetX,goalY+goalLabelOffsetY+moveYText,'lbs').attr({
        fill:labelColor,
        'font-family':labelsFontFamily,
        'font-size':labelFontSize,

      }),
      
      line = c.path("M"+goalX+' '+(goalY+goalBallRadius)+'V'+(calY+calYOffset-circleRadius)).attr({
        stroke:goalBallColor,
        'stroke-width':2
      }),
      
      goalInvisible = c.rect(goalX-goalBallRadius*1.5,goalY-goalBallRadius*1.5,goalBallRadius*3,calY-goalY+70).attr({
        fill:'black', 
        stroke:'none',
        opacity:0
      })
    );
    
    if(gdate==0)goalSet.attr('cursor', 'e-resize');
    else if(gdate==(days-1)) goalSet.attr('cursor','w-resize');
    else goalSet.attr('cursor','ew-resize');
   
  };
  
  var startGoal = function(){
    goalBall.ox = goalBall.attr('cx');
  }
  
  var moveGoal = function(dx,dy){
    if(typeof line!='undefined' )line.hide();
    calendarGroup[gdate].hide();
  
    goalX = goalBall.ox+dx;
    var minX = seesawCenterX;
    var maxX = seesawCenterX + (seesawLength*0.5)-2;
    if(goalX < minX) goalX = minX;
    if (goalX > maxX) goalX = maxX;
    
    goalY = goalX*nnet+b;
       
    gdate = ((goalX-seesawCenterX)/2).toFixed(0); 
    if(gdate>(days-1)) gdate=days-1;
    else      calendarGroup[gdate].show();   
    
    goalBall.attr('cx', goalX);
    goalBall.attr('cy', goalY);
    goalBallText.attr({
      x:goalX,
      y:goalY+moveYText,
      text:calc.goalWeight(gdate)    
    });
    goalBallLabel.attr({x:goalX+goalLabelOffsetX,y:goalY+goalLabelOffsetY+moveYText});
    
    goalInvisible.attr({
      x:goalX-goalBallRadius*1.5,
      y:goalY-goalBallRadius*1.5,
      height:calY-goalY+70
    });

    goalSet.push(
      line=  c.path("M"+goalX+' '+(goalY+goalBallRadius)+'V509').attr({
        stroke:goalBallColor,
        'stroke-width':2       
      })
    )
    
 
    line.drag(moveGoal,startGoal);    
    if(gdate==0)goalSet.attr('cursor', 'e-resize');
    else if(gdate==(days-1)) goalSet.attr('cursor','w-resize');
    else goalSet.attr('cursor','ew-resize');
  } 
  
//-----------------------------Drag function helpers---------------------------------------
  var start = function(){}
  var endDrag = function(){   
     linesSet.attr({stroke:indicatorColor}); 
  }
//---------------------------Food Indicator functions()---------------------------
  this.drawFoodIndicator = function(){  

    indicatorY=(indicatorX+indicatorArrowWidth/2)*nnet+b-50;
    foodIndicator = c.set();
    
    if(calsIn < calsInMin) {calsIn = calsInMin; }
    if(calsIn >calsInMax) {calsIn = calsInMax;}
    
    var calsInHeight = calsIn/calorieDivisor;
    var foodCalY = indicatorY-calsInHeight-halfStroke +5; 
    
    var hamburgerX = calX+12;
    var hamburgerY = foodCalY-30;
    var hamburgerWidth = calsWidth*0.65;
    var hamburgerTopHeight = 20;
    var burgerPattyHeight = 5;
    var spaceY =3;
    var burgerBotY=hamburgerY+burgerPattyHeight+(2*spaceY);
    var hamburgerBotHeight = 8;
    var f=5;
    var hamburgerBotWidth =hamburgerWidth-(4*f);
    var  xLine=indicatorX+24, yLine=indicatorY+23;
    
    foodHandle = c.set();
    
   
    
    foodIndicator.push(
      foodLabelC = c.circle(calX + calsWidth/2, foodCalY - indicatorLabelHeight, calsWidth/2),
      foodLabel =  c.rect(calX, foodCalY - indicatorLabelHeight, calsWidth, indicatorLabelHeight ),
      foodText = c.text(textX, foodCalY - 2*foodLabelC.attr('r'), calsIn.toFixed(0)),
      foodLabelText = c.text(indicatorX+27,foodCalY-1.68*foodLabelC.attr('r') ,"cals"),
     
      hamburgerTopBun = c.path("M"+hamburgerX+","+hamburgerY+
                            ' C'+hamburgerX+','+(hamburgerY-hamburgerTopHeight)+
                            ' ' +(hamburgerX+hamburgerWidth)+','+(hamburgerY-hamburgerTopHeight)+
                            ' ' +(hamburgerX+hamburgerWidth)+','+(hamburgerY)+'z'),
      hamburgerMeat = c.rect(hamburgerX+1,hamburgerY+spaceY,hamburgerWidth-2,burgerPattyHeight,2),
       
      hamburgerBotBun = c.path('M' +hamburgerX+','+burgerBotY+
                                 ' C'+(hamburgerX)+','+(burgerBotY+hamburgerBotHeight)+
                                 ' ' +(hamburgerX+f)+','+(burgerBotY+hamburgerBotHeight)+
                                 ' ' +(hamburgerX+(f*2))+','+(burgerBotY+hamburgerBotHeight)+
                                 ' h'+(hamburgerBotWidth)+
                                 ' C'+(hamburgerX+hamburgerBotWidth+(3*f))+','+(burgerBotY+hamburgerBotHeight)+
                                 ' ' +(hamburgerX+hamburgerBotWidth+(4*f))+','+(burgerBotY+hamburgerBotHeight)+
                                 ' ' +(hamburgerX+hamburgerBotWidth+(4*f))+','+burgerBotY+'z'
                                 ) 
                                 
                                 
      );
     foodHandle.push(
      foodArrow = c.path(
        'M '  +indicatorX +','+indicatorY+
        ' l'  +(indicatorArrowWidth/2)+','  +indicatorPointerHeight+
        ' l'  + indicatorArrowBaseL +' ,0'+
        ' l'  +(indicatorArrowWidth/2)+', -'+indicatorPointerHeight+
        ' l -'+(indicatorArrowWidth+indicatorArrowBaseL) + ',0'),
       
       foodLines = c.path("M"+xLine+','+yLine+'h5'+
                          " m"+(-10)+','+(-3)+'h15'+
                          ' m'+(-19)+','+(-3)+'h23') 
        
      );
      
    foodIndicator.push(
        foodCaloriesBox = c.rect(calX,foodCalY,calsWidth, calsInHeight)
    );
    

    foodIndicator.attr({
      fill: indicatorColor,
      stroke: indicatorColor,
      "stroke-width": indicatorMidStroke,
      
    });
    hamburgerTopBun.attr({stroke:"none",fill:iconColor});
    hamburgerMeat.attr({stroke:iconColor,fill:iconColor});
    hamburgerBotBun.attr({stroke:"none",fill:iconColor});
    
    foodHandle.attr({      cursor:'ns-resize' });
    
    foodLines.attr({
      stroke:indicatorColor,
      'stroke-width':1.5,
      "stroke-linecap":"round"
    });
    
    foodArrow.attr({
      fill:indicatorColor,
      stroke:indicatorColor,
      "stroke-linejoin":"round",
      "stroke-linecap":"round",
      "stroke-width":indicatorArrowStrokeWidth
    });
    
    foodCaloriesBox.attr({fill: caloriesColor});
    
    foodText.attr({
      fill: textColor,
      'stroke-width':0,
      'font-size':fontSize
    });
    
    foodLabelText.attr({
      fill: labelColor,
      'font-size':labelFontSize,
      'stroke-width':0,
      'font-family':labelsFontFamily
    });
    if(calsIn==calsInMin) foodHandle.attr('cursor','s-resize');
    if(calsIn==calsInMax) foodHandle.attr('cursor','n-resize');
    foodHandle.drag(moveFood,start,endDrag);
    linesSet.push(foodLines);
    if(adjustmentsMade==1) linesSet.attr({stroke:handleColor});
    
    
  }
    
  var moveFood = function(dx, dy){
  adjustmentsMade=1;
    //up--dy  is negative, down --dy is positive
   // calsIn=calsIn-dy;
    calsIn=calsIn+dy*indicatorIncrement;
   
    if(calsIn < calsInMin) {calsIn = calsInMin; }
    if(calsIn >calsInMax) {calsIn = calsInMax;}
    
    foodText.attr('text', calsIn.toFixed(0)); 
    calc.setCalsIn(calsIn);
    calc.setCalsOut(calsOut);
    net = calc.dailyNetCals();
   
    self.draw(); 
    
  }
  

//-------------------------Exercise Indicator functions() ---------------------------------  
  this.drawExerciseIndicator = function(){
    
    exerciseIndicatorY =(indicatorX+indicatorArrowWidth/2)*nnet+b+50;
    exerciseIndicator = c.set();
    exerciseHandle = c.set();
    var xLine = indicatorX+24;
    var yLine = exerciseIndicatorY-23;
    var pedLR=1;       //move pedestrian icon left(-) or right(+)
    var pedUpDown=-4; //move pedestrian icon up(-) or down(+)
    
    
    if(calsOut < calsOutMin) calsOut = calsOutMin;
    if(calsOut > calsOutMax) calsOut = calsOutMax;
    var calsOutHeight =calsOut/calorieDivisor+4;
    
    exerciseIndicator.push(
      exerciseLabel = c.rect(calX, exerciseIndicatorY+calsOutHeight, calsWidth,indicatorLabelHeight ),
      exerciseLabelC = c.circle(calX+calsWidth/2, exerciseIndicatorY+calsOutHeight+indicatorLabelHeight, calsWidth/2),     
      exerciseText = c.text(textX,exerciseIndicatorY+2*exerciseLabelC.attr('r')+calsOutHeight+pedUpDown-2,calsOut.toFixed(0)),
      exerciseLabelText = c.text(indicatorX+27, exerciseIndicatorY+2.29*exerciseLabelC.attr('r')+calsOutHeight+pedUpDown,"cals"),
//      
      ped = c.path("M 352.11907,183.39702 C 359.92764,177.94448 369.62104,174.30946 380.05491,175.04993 C 393.71991,176.2616 405.02888,184.67601 411.76041,195.04257 L 452.01495,274.74386 L 506.80959,312.44042 C 511.52166,316.00813 514.3489,321.93188 513.8777,328.25952 C 513.13723,338.08755 504.45356,345.49223 494.49089,344.68444 C 491.52902,344.54981 489.17299,343.33814 486.27843,342.05915 L 426.50246,300.92951 C 424.61763,299.31394 423.20401,297.63106 421.99233,295.54429 L 406.91371,265.6563 L 388.94053,345.22297 L 459.62158,428.69392 C 461.16983,431.31922 462.24687,434.21377 462.92003,437.24296 L 481.97025,538.08126 C 481.90294,540.30266 482.23951,541.7836 482.10488,543.60111 C 480.89321,558.47779 467.90136,569.5175 453.02468,568.30582 C 440.7733,567.43072 431.61842,558.20853 428.72386,547.03419 L 410.68336,452.52353 L 353.39806,389.65105 L 339.935,450.90796 C 339.59842,453.80252 335.76145,459.8609 334.54978,462.35156 L 279.55319,555.17934 C 273.96602,563.72838 264.81114,569.1136 254.24264,568.30582 C 239.36597,567.16146 228.25894,554.1023 229.47062,539.29293 C 229.80719,535.05207 231.55739,530.74389 233.03833,527.7147 L 284.33258,441.68577 L 326.94315,252.39519 L 299.07462,275.01313 L 284.33258,342.46304 C 282.38043,351.01208 274.50454,358.08019 265.14772,357.33972 C 255.31969,356.53193 247.84769,347.98289 248.58816,337.95292 L 248.99205,335.59688 L 266.62866,256.97263 C 267.50375,253.47223 269.4559,250.57768 272.14851,248.28896 L 352.11907,183.39702 z" ).scale(.09,.09),
      head = c.circle(374.84402,349,4)   
    );
    
    exerciseHandle.push(
      exerciseArrow = c.path("M"+indicatorX+', '+exerciseIndicatorY+
        ' l'+(indicatorArrowWidth/2)+',-'  +indicatorPointerHeight+
        ' l'  + indicatorArrowBaseL +' ,0'+
        ' l'  +(indicatorArrowWidth/2)+', '+indicatorPointerHeight+
        ' l -'+(indicatorArrowWidth+indicatorArrowBaseL) + ',0'),
      handleLines=c.path("M"+xLine+','+yLine+
                      ' h5 m'+(-10)+','+(3)+'h15'+
                      'm'+(-19)+','+(3)+'h23')
    
    );
    
    exerciseIndicator.push(
      exerciseCaloriesBox = c.rect(calX, exerciseIndicatorY, calsWidth,calsOutHeight)
    );
    
    
    
    ped.translate((calX+calsWidth/2)-370+pedLR,exerciseIndicatorY+calsOutHeight-337+pedUpDown); 
    head.translate((calX+calsWidth/2)-370+pedLR,exerciseIndicatorY+calsOutHeight-337+pedUpDown);
    //the 370 and 338 refers to the absolute coordinates of the ped path and head circle coordinates

    exerciseIndicator.attr({
      fill: indicatorColor,
      stroke:indicatorColor,
      "stroke-width": indicatorMidStroke,
      
    });
    
    exerciseHandle.attr({cursor:"ns-resize"});
    
    ped.attr({fill:iconColor,stroke:'none'});
    head.attr({fill:iconColor,stroke:'none'});
    
    
    handleLines.attr({
      stroke:indicatorColor,
      'stroke-width':1.5,
      "stroke-linecap":"round"
    });  
    
    exerciseArrow.attr({
      fill:indicatorColor,
      stroke:indicatorColor,
      "stroke-linejoin":"round",
      "stroke-linecap":"round",
      "stroke-width":indicatorArrowStrokeWidth,
      cursor:"ns-resize"
    });
    
    exerciseCaloriesBox.attr({ fill: caloriesColor});
    
    exerciseText.attr({
      fill: textColor,
      'stroke-width':0,
      'font-size':fontSize
    });
    exerciseLabelText.attr({
      fill:labelColor,
      'stroke-width':0,
      'font-size':labelFontSize,
      'font-family':labelsFontFamily
    });
    
    if(calsOut==calsOutMax) exerciseHandle.attr('cursor','s-resize');  
    if(calsOut==calsOutMin) exerciseHandle.attr('cursor','n-resize');
    exerciseHandle.drag(moveExercise, start, endDrag);  
    linesSet.push(handleLines); 
    if(adjustmentsMade==1) linesSet.attr({stroke:handleColor}); 
    
  }
  
  var moveExercise = function(dx,dy){
   adjustmentsMade=1;

    calsOut = calsOut - dy*indicatorIncrement;
    if(calsOut < calsOutMin) calsOut = calsOutMin;
    if(calsOut > calsOutMax) calsOut = calsOutMax;
    
    exerciseText.attr('text', calsOut.toFixed(0));
    calc.setCalsOut(calsOut);
    calc.setCalsIn(calsIn);
    net = calc.dailyNetCals();
    
    self.draw();
    
  }
  
//---------------------------Calendar ---------------------------------------------------------
  var getMonth= function(monthNumber){


    var mon=new Array(12);
     mon[0]="Jan";
     mon[1]="Feb";
     mon[2]="Mar";
     mon[3]="Apr";
     mon[4]="May";
     mon[5]="Jun";
     mon[6]="Jul";
     mon[7]="Aug";
     mon[8]="Sep";
     mon[9]="Oct";
     mon[10]="Nov";
     mon[11]="Dec";
  
    return mon[monthNumber];
    
  }


  this.drawCalendar = function(){
    var d= new Date();  //today
   
    var tickspaceX=tickX; 
    for(var i=0; i<days;i++){
    
      calendarGroup[i] = c.set();
      var tick=c.rect(tickspaceX,calY, calSmallTickWidth,calSmallTickHeight). attr({
            fill:darkGrey,
            stroke:'none'
          }) 
          
      if(d.getDate()==1){
        tick.attr('height',calSmallTickHeight*2);
        c.text(tickspaceX+8,calY-10,getMonth(d.getMonth())).attr({
          fill:darkGrey
        });
        calendarVLines = c.path("M"+tickspaceX+' '+(calY-20)+' v-230').attr({
          stroke: verticalLineColor,
          'stroke-width':.5
        });
      }

      calendarGroup[i].push( 
           c.text(tickspaceX,calY+calYOffset,d.getDate()).attr({
            fill:darkGrey,
            'font-family':fontFamily,
            'font-size':12
          }),
          
          c.circle(tickspaceX,calY+calYOffset, circleRadius).attr({
            fill:'none',
            stroke:goalBallColor,
            'stroke-width':2
          })
      );    
      
      if(i==0) calendarGroup[i].attr('cursor', 'e-resize');
      else if(i+1==days)calendarGroup[i].attr('cursor', 'w-resize');
      else calendarGroup[i].attr('cursor', 'ew-resize');
      
      calendarGroup[i].drag(moveGoal,startGoal);    
      calendarGroup[i].hide();
      tickspaceX=tickspaceX+tickspace;
      d.setDate(d.getDate()+1);   
      
    }
  }
//---------------------------------Yaxis (right-hand-side weight Scale Indicator)-------------------
  this.drawWeightScale = function(){
    scaleX=seesawCenterX+seesawLength/2;
    var offset =40;
   
    var maxY=90, sy=maxY, 
        minY=60;
        
    var minWeight = (person.currentWeight-((calc.getCalsOutMax()*days)/3500)).toFixed(0);    
    var maxWeight= parseFloat((person.currentWeight+((calc.getAddCals()*days)/3500)).toFixed(0));
    
    var lbsAboveActualMaxWeight = (10- ((maxWeight+10)%10));
    var topWeight = maxWeight + lbsAboveActualMaxWeight; 
    
    var scaleWeight = new Array();
    var last=topWeight;
    
    for(var i=0; i<6; i++){
    
      scaleWeight[i]=last;
      
      
      var scaleNet = -((3500/days)*(scaleWeight[i]-person.currentWeight))/slopeShrinker;
      
      sy = (scaleX*scaleNet)+(seesawCenterY-(scaleNet*seesawCenterX));
      
      c.text(scaleX+offset, sy, scaleWeight[i]+' lbs.').attr({
        fill:darkGrey,
        stroke:'none'
      });      
      last=scaleWeight[i]-20;
    }
  }
  
  this.hoverLines = function(){
  

  
    goalSet.mouseover(function(){ linesSet.attr({stroke:handleColor});  });
    foodIndicator.mouseover(function(){ linesSet.attr({stroke:handleColor}); });
    foodHandle.mouseover(function(){       linesSet.attr({stroke:handleColor});     });
    exerciseIndicator.mouseover(function(){ linesSet.attr({stroke:handleColor}); });
    exerciseHandle.mouseover(function(){ linesSet.attr({stroke:handleColor}); });
            
    goalSet.mouseout( function(){ linesSet.attr({ stroke:indicatorColor});  });
    foodIndicator.mouseout(function(){       linesSet.attr({stroke:indicatorColor});   });
    foodHandle.mouseout(function(){ linesSet.attr({stroke:indicatorColor});      });
    exerciseIndicator.mouseout(function(){ linesSet.attr({stroke:indicatorColor});   });
    exerciseHandle.mouseout(function(){ linesSet.attr({stroke:indicatorColor});   });
 


  }
//---------------------------------call automatic functions-----------------------------------------


  this.initialize();
  

}


