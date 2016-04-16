//---------------------------------------- screenResolutionCalculator() --------------------------------------------
function greatestCommonDenominato(a,b){ 
  return (b==0)?a: greatestCommonDenominato(b,a%b);  
}

function screenResolutionCalculator(diagonal_Inches,pixel_Width,pixel_Height){

  var diagonalInches ;
  var pixelHeight  ; 
  var pixelWidth ;
  var ratio ;
  var diagonalPixels;
  var widthInches=0;
  var heightInches=0;
  var dotsPerInch=0;
  var aspectRatio=0;
  var gcd=0;
  
  this.initialize = function(){
    this.setDimensions(diagonal_Inches,pixel_Width,pixel_Height);
  }

  this.getDiagonal = function(){
    return diagonalInches;
  }
  
  this.getPixelWidth = function(){
    return pixelWidth;
  }
  

  this.getPixelHeight = function(){
    return pixelHeight;
  }

  this.getWidthInches=function(){

    return parseFloat(widthInches.toFixed(2));
    
  }
  
  this.getHeightInches=function(){
    return parseFloat(heightInches.toFixed(2));
  }
  
  this.getDotsPerInch = function(){
    return parseFloat(dotsPerInch.toFixed(2));
  }
  
  this.getAspectRatio = function(){
    return aspectRatio;
  }
  
  this.setDiagonal = function(dInches){
    this.setDimensions(dInches,pixelWidth,pixelHeight);
  }
  
  this.setPixelWidth = function(pWidth){
    this.setDimensions(diagonalInches, pWidth,pixelHeight);
  }
  
  this.setPixelHeight = function(pHeight){
    this.setDimensions(diagonalInches,pixelWidth,pHeight);
  }
  
  this.setDimensions=function(diagonal,pxWidth, pxHeight){
    diagonalInches = diagonal;
    pixelHeight = pxHeight;
    pixelWidth = pxWidth;
    ratio = pixelHeight/pixelWidth;
    diagonalPixels = Math.sqrt((pixelWidth*pixelWidth)+(pixelHeight*pixelHeight));

    gcd = greatestCommonDenominato(pixelWidth,pixelHeight);
    
    aspectRatio = (pixelWidth/gcd)+':'+(pixelHeight/gcd);
   
    widthInches = Math.sqrt((diagonalInches*diagonalInches)/(1+(ratio*ratio)));
    heightInches= widthInches*ratio;
    
    dotsPerInch = diagonalPixels/diagonalInches;
  }
  
  this.initialize();

}