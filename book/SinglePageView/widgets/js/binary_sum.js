/*
Adding Widget Javascript by Michelle Phung
Feb 28, 2013
*/
$(document).ready(function(){

	updateSum();

	for (var i=0; i<6; i++)	{
		$("#top"+i).click(function() {			
  			toggle(this.id[3])
  			updateSum();
  
		});
		$("#bot"+i).click(function() {		
			toggle(this.id[3])
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

}

function decrementValueOnScreen(idNumber){
	var idName=addendIDsFromNum[parseInt(idNumber,10)];	
	var digit = parseInt($('#'+idName).html());
}

function toggle(idNumber){
	var idName=addendIDsFromNum[parseInt(idNumber,10)];	
	var digit = parseInt($('#'+idName).html());

	if(digit == '0' || digit ==0){	$('#'+idName).html('1');	}
	else{	$('#'+idName).html('0'); }
}

function updateSum(){
	var sum=[ 	parseInt($('#two').text(),2)+parseInt($('#five').text(),2), 	//sum0
				parseInt($('#one').text(),2)+parseInt($('#four').text(),2), 	//sum1
				parseInt($('#zero').text(),2)+parseInt($('#three').text(),2),	//sum2
				0																//sum3
			]; //sums without carrying

	//put carries on top if there are any		
	for(var i=0; i<sum.length; i++){
		if(sum[i]>1){
			$('#carry'+[i+1]).text('1');
			sumbit=sum[i]-2;
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
