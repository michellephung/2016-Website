 //Mortgage Calculator Javascript 
var MortgageCalculator= function(){


  var priceAmount = 700000;
  var interestRate = 5;
  var years= 30;
  var fixedMonthlyPayment = 0; 
  var total=0;
  var totalInterest=0;
  var totalMonthsOnTime;
  var downPayment=70000;
  var loanAmount = priceAmount-downPayment;
  
  var font_family = "Helvetica";
  var large_font_size = 20;
  var med_font_size =16;
  var small_font_size=14;
 
  this.price = $('#priceBox');
  this.rate= $('#interestBox');
  this.months = $('#termBox');
  this.downPayBox=$('#downPaymentBox');
  
  this.priceSlider = $('#priceSlider');
  this.interestSlider =$('#interestSlider');
  this.termSlider = $('#termSlider');
  this.downPaySlider =$('#downPaymentSlider');
  
  var heightBarBox=1270;
  var defaultWidthBarBox=1320;
  var bottomOfChart =  1220; 

  var fixedY = Raphael("fixedYearlyPaymentVisual",1100, 300); 
 
  this.pie = $('#pie');
  var pie= Raphael("pie");
  
  this.piePrinciple = $('#piePrinciple');
  this.pieInterest =$('#pieInterest');
  this.pieAmountP = $('#pieAmountP');
  this.pieAmountI = $('#pieAmountI');
  var div =25; //height   
  var offsetH=100;    //horizontal offset from left hand side (x position where graph starts)
  var spacingV=50;    //vertical offset from top of box of graph and graph not used in horizontal scroll
  
 this.numOfMonths = $('#numOfMonths');
 this.numOfYears =$('.numOfYears');
  
 this.yearSection =$('#yearSection');
 this.fixedSection=$('#fixedSection'); 
 var monthLength;
 
 this.extra =$('#extraPay');
 this.extraInfo = $('#extraInfo');
 
 this.extraAmt = $('#extra');  
  
 var principleColor="#0095cb";
 var extraPrincipleColor="#0095cb";
 var interestColor="#BE007F";
 var extraInterestColor="#D84AB0";
 
 
 var fixedx = 450;
 var fixedy = 50;
  
  this.addCommas =function(nStr){
  	nStr += '';
  	x = nStr.split('.');
  	x1 = x[0];
  	x2 = x.length > 1 ? '.' + x[1] : '';
  	var rgx = /(\d+)(\d{3})/;
  	while (rgx.test(x1)) {
  		x1 = x1.replace(rgx, '$1' + ',' + '$2');
  	}
  	return x1 + x2;
  }
  
  this.digits = function(number){
    var n= 1+Math.floor(Math.log(number)/Math.log(10));
    var b=40;
    switch(n){
      case 1: return 265+b;
      case 2: return 260+b;
      case 3: return 255+b;
      case 4: return 250+b;
      case 5: return 245+b;
      case 6: return 240+b;
      case 7: return 233+b;
      case 8: return 230+b;
      default: return 305;
      
    }
    
    
    
    
  }
  
  this.initialize = function(){ 
    this.initSliders();
    this.eventListener();   //detects changes in any of the onscreen controls (textboxes/ sliders)
    this.setVariables();
    this.refreshOnScreenVariables();  
     
  }
  

  
  this.getPriceAmount = function(){
    return priceAmount;  
  }
  

  
  this.getRate = function() {
   return ((0.01*interestRate)/12);  
  }
  
  this.getMonths = function(){
    return (years*12);  
  }
  
  this.getFixedMonthlyPayment = function(){
  
   return fixedMonthlyPayment;  
  }
  
  this.getTotal = function(){
    return total;
  }

  this.getInterestRate = function() {
    return interestRate;
  }
  
  this.getLoanAmount = function(){
    return loanAmount;
    
  }
  
  this.setPriceAmount = function(price) {
    if(price>2000000)  priceAmount=2000000;
    else if(price<1000) priceAmount=1000; 
    else priceAmount=price;
    this.setDownPayment(downPayment);
    this.setFixedMonthlyPayment();
    this.refreshOnScreenVariables();
  }
  
  this.setDownPayment = function(dp){
  
    if(dp >=(parseInt(priceAmount,10)) ){
    	downPayment = priceAmount - 100;
    	
    	}
    else if(dp<0) downPayment=0;
    else downPayment=dp;
  }
  
  this.setInterestRate = function(rate){
    if(rate>20) interestRate=20;
    else if(rate<1) interestRate=1;
    else interestRate=rate;
    this.setFixedMonthlyPayment();
    this.refreshOnScreenVariables();

  }
  
  this.setYears = function(numberOfYears){
    if(numberOfYears>50) years=50;
    else if(numberOfYears<16)years=15;
    else years=numberOfYears;
    this.setFixedMonthlyPayment();
    this.refreshOnScreenVariables();

  }
  
  this.setFixedMonthlyPayment = function(){
    var price=this.getPriceAmount();
    var rate=this.getRate();
    var months=this.getMonths();
    
    loanAmount=  priceAmount-downPayment;
    fixedMonthlyPayment=
      ((loanAmount*rate*Math.pow(1+rate,months))/(Math.pow(1+rate,months)-1));
  }

  
  //create an amortization schedule in array form (after initialize() )
  var loanAmt=[];
  var interestx=[];
  var principlex=[];
     
  var extraPayP = [];
  var extraPayI = [];
  var extraPayPayment = fixedMonthlyPayment + this.extra.val();
  var extraPayNewP =[];
  var extraPayTotalInterest;
  var extraPayLastMonth;
  var extraTotal=0;
     
  var self = this; 
  
  this.setVariables= function(){
        self.setPriceAmount(self.price.val());
        self.setDownPayment(self.downPayBox.val());
        self.setInterestRate(self.rate.val());
        self.setYears(self.months.val());
  }
  
  this.refreshOnScreenVariables= function(){

      this.price.val(priceAmount);
      this.rate.val(interestRate);
      this.months.val(years);
      this.downPayBox.val(downPayment);       
      
      this.priceSlider.slider("option","value",priceAmount);
      this.interestSlider.slider("option", "value",interestRate);
      this.termSlider.val(years);
      this.downPaySlider.slider("option","value",((downPayment/priceAmount)*100));
      
      $('#pay').html('$'+this.addCommas(fixedMonthlyPayment.toFixed(2))); 
      $('#totalPaid').html('$'+this.addCommas(parseFloat(total).toFixed(2)));
      $('#interestPaid').html('$'+parseFloat(totalInterest).toFixed(2)); 
      
      this.numOfMonths.html(this.getMonths());
      this.numOfYears.html(years);
      
     
      //onSchedule
      this.setOnScheduleTable();
      //withExtraPayments
      this.setExtraPaymentsTable();
      
      fixedY.clear();
      this.drawFixed();
      pie.clear();
      this.drawPie(total);
      this.setExtra(this.extra.val());
    
       
  }
  
  this.initSliders = function(){
    this.priceSlider.slider({     
      min: 1000,
      max: 2000000,
      value: 700000    
    });
    
    this.priceSlider.bind('slide', function(){
      self.setPriceAmount(self.priceSlider.slider("option","value"));
    });
    
    this.interestSlider.slider({
      min:1,
      max:20,
      value: 5,
      step:0.25
    });
    
    this.interestSlider.bind('slide', function(){ self.setInterestRate(self.interestSlider.slider("option","value"));}); 
    
        
    this.termSlider.slider({
      min:15,
      max:50,
      value:30
    });
    
    this.termSlider.bind('slide', function(){self.setYears(self.termSlider.slider("option", "value"));} );
    
    this.downPaySlider.slider({
      min:1,
      max:100,
      value:(downPayment/priceAmount)*100
    });
    
    this.downPaySlider.bind('slide', function(){
      self.setDownPayment((self.downPaySlider.slider("option", "value")*0.01*priceAmount).toFixed(0));
      self.setFixedMonthlyPayment();
      self.refreshOnScreenVariables();
    } );
  
  } 
  
  this.eventListener = function(){     

    this.price.change(function(){
      self.setPriceAmount(parseFloat(self.price.val())); 
    });
    
    this.downPayBox.change(function(){
      self.setDownPayment(this.value);
      self.setFixedMonthlyPayment();
      self.refreshOnScreenVariables();
    }); 
     
    this.rate.change(function(){
     self.setInterestRate(parseFloat(self.rate.val()));
    }) ;  
     
    this.months.change(function(){
      self.setYears(parseFloat(self.months.val()));
    });

    this.extra.change(function(){
      self.refreshOnScreenVariables();
    });
      
  }
  
  this.setOnScheduleTable = function(){
      var info= this.paymentTable(0);
      total = info.totalPaid;
      loanAmt = info.balance;
      interestx= info.interest;
      principlex=info.principle;
      totalInterest=info.totalInterest;
      totalMonthsOnTime=info.totalMonths;
  }
  
  this.setExtraPaymentsTable = function(){
    var info = this.paymentTable(this.extra.val());
    
    extraPayP = info.balance;
    extraPayI = info. interest;
    extraPayNewP = info. principle;
    extraPayTotalInterest = info .totalInterest;
    extraPayLastMonth=info.totalMonths;
    extraTotal=info.totalPaid;
    
  }
   
  this.paymentTable = function(extra){
    var months= this.getMonths();
    var interestRate=this.getRate();
    
    tableInfo=new Object();
    
    
    var balance=[];
    var interest=[];
    var principle=[];
    
    balance = [loanAmount];
    interest = [balance[0]*interestRate];
    principle =[fixedMonthlyPayment-interest[0]];
    
    theInterest=interest[0]; //initialize the total interest paid if extra payments are chosen

  

    for(var n = 1; n < months + 1; n++){
      balance.push(balance[n-1]-principle[n-1]-extra);
      interest.push(balance[n]*interestRate);
      principle.push(fixedMonthlyPayment-interest[n]);

 
      if( n != months)   theInterest = theInterest + interest[n];
      if( balance[n] < 0 ) break;
    }

    totalPaid = theInterest+loanAmount;
    totalMonths = (balance.length) - 1;
      
    tableInfo.balance = balance;
    tableInfo.interest = interest;
    tableInfo.principle = principle;
    tableInfo.totalInterest= theInterest;
    tableInfo.totalPaid = totalPaid;
    tableInfo.totalMonths = totalMonths;
  
    return tableInfo;
  }
  
  

  this.setExtra = function(xtra){
    if(xtra=="" || isNaN(xtra)) {
      this.extra.val(0);
      xtra=0;
    }
    
    if(xtra<0) {
      xtra=0; 
      this.extra.val(0);
    }
   
    if(parseFloat(xtra)>loanAmount){
      this.extra.val(loanAmount);
    }
    extraPayPayment = this.extra.val();
    var monthlySum = parseFloat(extraPayPayment)+parseFloat(fixedMonthlyPayment);
    
    $('.extraMonthyPayment').html(this.addCommas(monthlySum.toFixed(0)));
    $('.extraTotalSavings').html(this.addCommas((totalInterest-extraPayTotalInterest).toFixed(0)));
    $('.extraFinishedIn').html((extraPayLastMonth/12).toFixed(1));
    
  }

  
  this.getLoanForMonth = function(month){
    return loanAmt[month];
  }
  
  this.getInterestForMonth = function(month){
    return interestx[month];
  }

  this.getPrincipleForMonth = function(month){
    return principlex[month];
  }

    
  this.drawPie = function(total){
    var sqrtOfPi=1.772453851;
    
    var radiusL= (Math.sqrt(total)/sqrtOfPi)/(div);
    var radiusR= (Math.sqrt(extraTotal)/sqrtOfPi)/(div);
  
    var centerPoint=300;
    var overlap = (radiusL+radiusR)* 0.1; 
    
    var leftY = 140;
    var rightY = 140;
    
    var totalLabels = pie.set();
    var principleLabels = pie.set();
    var interestLabels = pie.set();
    var rightLabels= pie.set();
    var totalYlocation =leftY+radiusL+50;
    
    var font_size=med_font_size;
    var  pLabelLY, iLabelLY;    
    
    var leftX = centerPoint+overlap;
    var rightX= centerPoint+radiusR+radiusL; 
    var rightSide = rightX+radiusR-260;
    var leftAlignLabels=210-radiusL;
    
    this.extraAmt.html(this.extra.val());
    this.pieAmountP.html(this.addCommas(parseFloat(loanAmount).toFixed(0)));
    this.pieAmountI.html(this.addCommas(parseFloat(totalInterest).toFixed(0)));
    
    this.piePrinciple.css("color",principleColor);
    this.pieInterest.css("color",interestColor);
   
    
    if(radiusL>39 ){    
      pLabelLY=leftY-radiusL-10;
      iLabelLY=leftY+radiusL+10;          
      if(radiusR>53) rightSide=rightX+radiusR-290;
    }
    else{
      if(radiusR<12)rightSide=rightX+radiusR-250;
        pLabelLY=leftY-radiusL-10;
        iLabelLY=leftY+radiusL+10;
      
    } 
        
   leftX = centerPoint+overlap;
   rightX= centerPoint+radiusR+radiusL; 
      
    
    var normalPaymentPie = pie.g.piechart(
      leftX,
      leftY, 
      radiusL,
      [loanAmount/total, totalInterest/total ],
      {colors:[principleColor, interestColor], opacity:[1,1]}
    );
    var extraPaymentPie = pie.g.piechart(
      rightX,
      rightY, 
      radiusR, 
      [loanAmount/extraTotal, extraPayTotalInterest/extraTotal],
      {colors:[principleColor, interestColor], opacity:[.4,.4]}
    );
    
    totalLabels.push(
      pie.text(leftAlignLabels+13, totalYlocation, "Total:"),
      pie.text(this.digits(total), totalYlocation, "$"+this.addCommas(parseFloat(total).toFixed(0))),
      pie.text(this.digits(extraTotal)+rightSide, totalYlocation, "$"+this.addCommas(extraTotal.toFixed(0)))
    ); 
    totalLabels.attr({'font-family': font_family, "font-size": font_size, "fill":"black"});
     
    principleLabels.push(
      pie.text(leftAlignLabels,pLabelLY, "Principle:"),
      pie.text(this.digits(loanAmount),pLabelLY,"$"+this.addCommas(loanAmount.toFixed(0)))
    ); 
    principleLabels.attr({'font-family': font_family, "font-size": font_size, "fill":principleColor});
        
    interestLabels.push(
      pie.text(leftAlignLabels+5, iLabelLY, "Interest:"),
      pie.text(this.digits(totalInterest), iLabelLY,"$"+this.addCommas(parseFloat(totalInterest).toFixed(0))),  
      pie.text(rightSide+this.digits(extraPayTotalInterest),iLabelLY,"$"+this.addCommas(extraPayTotalInterest.toFixed(0)))
    );
    interestLabels.attr({'font-family': font_family, "font-size": font_size, "fill":interestColor});
 }

  this.drawFixed = function(){
    
    var yearlyAmount=12*fixedMonthlyPayment; 
    var rhsOfBox = fixedx;
    var height =fixedy;
     
    var width = (rhsOfBox-(years*3))/ (years);
    var spacingH=width+3;
    var h;  
    
    
    
    for(var i=0; i<years; i++){
      var interestYearlySum=0;
      var principleYearlySum=0;
      
      for(var x=1; x<12; x++){
        var monthlyIndex = (i*12)+x;
        interestYearlySum+=interestx[monthlyIndex];
        principleYearlySum+=principlex[monthlyIndex];
      }      
      var ratioI= interestYearlySum/yearlyAmount;
      var intr = (ratioI*height);
      var prin= height-intr;     
            
                                      //whereX, whereY, width, height
      var interestVisualY = fixedY. rect(spacingH * i + offsetH + 2,
                                        spacingV,
                                        width,
                                        intr);
                                        
      var principleVisualY = fixedY.rect(spacingH * i + offsetH + 2,
                                        spacingV + intr + 2,
                                        width,
                                        prin);
     
      interestVisualY.attr("fill", interestColor); 
      interestVisualY.attr("stroke", "none");

      principleVisualY.attr("fill", principleColor); 
      principleVisualY.attr("stroke", "none"); 
     
      h=intr+prin+2;
    } 
    
    height = spacingV+h;  
     
    this.termIndicator((years*spacingH)+offsetH-2,height,fixedY);
    this. amountIndicator(offsetH,spacingV,fixedY,(fixedMonthlyPayment*12).toFixed(0));  //for full amount
    }


  this.yAxisLabel = function(botPosition,string, here){
     var yLabel = here.text(10,botPosition,string); 
      yLabel.attr("font-family","Arial Rounded MT Bold");
      yLabel.attr("font-size",20);
      yLabel.rotate(-90);
  
  }

  this.xAxisLabel = function (position, string, here){
      var xLabel = here.text(102, position, string)
      xLabel.attr("font-family","Arial Rounded MT Bold");
      xLabel.attr("font-size",20);
  }
  

  this.termIndicator = function(x, y, canvas){
    var labelTerm = canvas.text(x-17, y+10, years+" years");
    labelTerm.attr({'font-family': font_family, "font-size": 12});
  
  };
  
  this.amountIndicator=function(x,y,canvas,amount){    
    var payAmount = canvas.text(x-40,y+3 ,"$"+this.addCommas(amount)+" /year");
    payAmount.attr({'font-family': font_family, "font-size": 12});
  };

  
  this.resizeCanvas = function(x, y, canvas){
      canvas.setSize(x,y); 
  };
  
  this.initialize();
}