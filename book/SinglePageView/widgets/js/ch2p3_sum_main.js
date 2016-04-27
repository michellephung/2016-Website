/*
Adding Widget by Michelle Phung
Feb 28, 2013
*/

$(document).ready(function(){

	updateSum();

	for (var i=0; i<6; i++)	{
		$("#top"+i).click(function() {
  			incrementValueOnScreen(this.id[3]);
  			updateSum();
		});
		$("#bot"+i).click(function() {
  			
			decrementValueOnScreen(this.id[3]);
			updateSum();
		});
	}
	

}) // end DOM ready

addendIDsFromNum = ['zero',
					'one',
					'two',
					'three',
					'four',
					'five']
//functions
function incrementValueOnScreen(idNumber){
	var idName=addendIDsFromNum[parseInt(idNumber,10)];	
	var digit = parseInt($('#'+idName).html());

	if(digit==9) $('#'+idName).text('9');
	else{ 
		digit++;
		var numAsString = digit.toString();
		$('#'+idName).text(numAsString);
	}
}

function decrementValueOnScreen(idNumber){
	var idName=addendIDsFromNum[parseInt(idNumber,10)];	
	var digit = parseInt($('#'+idName).html());

	if(digit==0) $('#'+idName).text('0');
	else{ 
		digit--;
		var numAsString = digit.toString();
		$('#'+idName).text(numAsString);
	}
}

function updateSum(){

	var sum=[ 	parseInt($('#two').text(),10)+parseInt($('#five').text(),10), 	//sum0
				parseInt($('#one').text(),10)+parseInt($('#four').text(),10), 	//sum1
				parseInt($('#zero').text(),10)+parseInt($('#three').text(),10),	//sum2
				0																//sum3
			]; 

	//put carries on top if there are any		
	for(var i=0; i<sum.length; i++){
		if(sum[i]>9){
			$('#carry'+[i+1]).text('1');
			sumbit=sum[i]-10;
			$('#sum'+i).text(sumbit);
			sum[i+1]=sum[i+1]+1;
		}else{
			$('#carry'+(i+1)).text('');
			$('#sum'+i).text(sum[i]);
		}
	}

	//take care of leading zeros in the sum
	if($('#sum3').text()=='0' && $('#sum2').text()=='0' && $('#sum1').text()=='0') {
		$('#sum1').text('');
		$('#sum2').text('');
		$('#sum3').text('');
		
	}

	if($('#sum3').text()=='0' && $('#sum2').text()=='0') {
		$('#sum2').text('');
		$('#sum3').text('');
	}

	if($('#sum3').text()=='0') $('#sum3').text('') //final carryout has a blank instead of 0

}
