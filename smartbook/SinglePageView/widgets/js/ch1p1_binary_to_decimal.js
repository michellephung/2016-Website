/*
Binary to Decimal Widget Javascript by Michelle Phung
Mar 8, 2013
*/


$(document).ready(function(){
	$("#topB").click(function() {
  			updateValueOnScreen(this,"+");
	});
	$("#topD").click(function() {
  			updateValueOnScreen(this,"+");
	});
	$("#botB").click(function() {
 			updateValueOnScreen(this,"-");
	});
	$("#botD").click(function() {
  			updateValueOnScreen(this,"-");
	});
	$("#topD").click();
	$("#botD").click(); //this is incase your html values are inaccurate,
						//it makes sure the base 10 matches the base 2
	
}) // end DOM ready


//functions
function updateValueOnScreen(id,incOrDec){

	if(id.id[3]=='B'){
		base = 2;
		idName="#binary";
		oppoName="#decimal";
		oppoBase=10;
	}else{
		base =10;
		idName="#decimal";
		oppoName="#binary";
		oppoBase=2;
	}
	value = parseInt($(idName).html(),base);
	
	if(incOrDec=="+"){ if(parseInt(value,10)<31)value++;
	}
	else {
		if(parseInt(value,10)>-31) value--; 
	}
	$(idName).html(value.toString(base));
	$(oppoName).html(value.toString(oppoBase));

	$('#equalVariable_mainEqual').val(value);
	$('#equalVariable_mainEqual').trigger('change');
}

function updateFromExplainTrigger(){
	decimal= parseInt($('#equalVariable_mainExplained').val(),10);
	binary = decimal.toString(2);
	$('#binary').html(binary);
	$('#decimal').html(decimal);
	$('#equalVariable_mainExplained').val(decimal);
	$('#equalVariable_mainEqual').val(decimal);
}