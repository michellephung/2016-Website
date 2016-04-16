//SeesawCalc.js
function BMR(gender, currentWeight, height, age){
  if(typeof gender =='string') gender=gender.toLowerCase();
  if(typeof gender=='string' &&
    typeof currentWeight =='number' &&
    typeof height=='number'&&
    typeof age == 'number'){
    
    if(gender=="female") bmr= 655+(4.35*currentWeight)+(4.7*height)-(4.7*age);
    else if(gender=="male") bmr= 66+(6.23*currentWeight)+(12.7*height)-(6.8*age);
    else{ 
      bmr =-1; 
    }
  }else{
    bmr = -1;
  }
  
  return bmr;
}

function SeesawGoalDateCalculator(daysTillGoal){
  //very simple function that returns the date goaldate (goaldate = today's date + number of days until goal)
  var date = new Date();
  this.todayDate=date;
  date.setDate(date.getDate()+daysTillGoal);
  this.goalDate=date;   
}

function  GetFormattedHeight(height){
    var feet = Math.floor(height/12);
    var inches = height%12; 
    return parseFloat(feet)+"'"+parseFloat(inches)+'"';
  }

function WeightLossCalculator(args){

  var currentWeight;
  var height;
  var calsIn;
  var calsOut;
  var gender;
  var age;
  var activityFactor;
  var foodCalMin;
  var foodCalMax;
  var bmr;
  var netCalsPerDay;
  var calsOutMax =1000; //calories exercised off should not be more than 2 lbs a week, or 0.285lbs=1001 calories a day
  var additionalMaxCals=1500;
  
  this.initialize = function(){
    bmr = this.bmr();
    foodCalMin = bmr*activityFactor;
    foodCalMax = foodCalMin+additionalMaxCals;

  }

  this.getFoodCalMax =function(){
    return foodCalMax;
  }
  this.setCurrentWeight = function(w){
    if(w>280) currentWeight=280;
    else if(w<100) currentWeight=100;
    else currentWeight = w;
  }

  this.getCurrentWeight = function(){
    return currentWeight;
  }  
 
  this.setHeight = function(h){
    if(h>84) height =84;  
    else if(h<48) height=48;
    else height = h;
  }
  
  this.getHeight = function(){
    return height;
  }

  this.setCalsIn = function(ci){
    if(ci>foodCalMax) calsIn=foodCalMax;
    else if(ci<foodCalMin) calsIn = foodCalMin;
    else    calsIn = ci;
  }
  
  this.getCalsIn = function(){
    return calsIn;
  }
  
  this.getFormattedHeight =function(){
    return GetFormattedHeight(height);
  }

  
  this.setCalsOut = function(co){
    //this is the max you can lose per day  
    if(co>calsOutMax) calsOut = calsOutMax;
    calsOut = co;
  }
  
  this.getCalsOut = function(){
    return calsOut;
  }
  
  this.getCalsOutMax = function(){
    return calsOutMax;
  }
  
  this.getAddCals= function(){
    return additionalMaxCals;
  }
  
  this.setGender = function(g){
    gender = g;
  }
  
  this.setAge = function(a){
    if(a<18) age=18;
    if(a>75)  age =75;
    age = a;
  }
  
  this.bmr = function(){
     return BMR(gender, currentWeight, height, age);
  }
  
  this.setActivityFactor = function(af){
    if(typeof af == 'string') af=af.toLowerCase();
    if(af == "extremely active") activityFactor = 1.9;
    else if(af == "very active")activityFactor = 1.725;
    else if(af == "moderately active")activityFactor = 1.55;
    else if(af == "lightly active")activityFactor = 1.375;
    else if(af == "sedentary")activityFactor = 1.2;
    else if(af == "coma")activityFactor = 1.0;
    else activityFactor = 0;   
  }
  
  this.getActivityFactor = function(){
    return activityFactor;
  }
  
  this.getFoodCalMin = function(){
    return foodCalMin;
  }
  
  this.dailyNetCals = function(){
    netCalsPerDay = this.getCalsIn() - (this.getCalsOut()+(this.bmr()*activityFactor));
    return parseFloat(netCalsPerDay.toFixed(0));
    
  }
  
  this.goalWeight = function(daysTilGoal){
    var goalWeightCals, goalWeightLbs;
    goalWeightCals = (currentWeight*3500)+(daysTilGoal*this.dailyNetCals());    
    goalWeightLbs = goalWeightCals/3500;
    return parseFloat(goalWeightLbs.toFixed(0));
  }
  
  if(typeof args !== 'undefined'){
    if(typeof args.currentWeight !== 'undefined') 
      this.setCurrentWeight(args.currentWeight);
    if(typeof args.height !== 'undefined') this.setHeight(args.height);
    if(typeof args.calsIn !== 'undefined') this.setCalsIn(args.calsIn);
    if(typeof args.calsOut !== 'undefined') this.setCalsOut(args.calsOut);
    if(typeof args.gender !== 'undefined') this.setGender(args.gender);
    if(typeof args.age !== 'undefined') this.setAge(args.age);
    if(typeof args.activityFactor !== 'undefined') this.setActivityFactor(args.activityFactor);  
  }
  
  this.initialize();
  
}



