(function() {

	var button,
		symbol,
		disabledColor = "#A9A4AC",
		interactiveColor = "#7922A2";

	$(function() {

		binaryequaldecimal();
		binaryequaldecimal_2();
		pg7_and();
		pg7_or();
		pg7_not();
		
		$( "#chromeinstructions" )
			.fadeOut( 10000 )
			.click(function(){
				$(this).hide();
			});
		//listeners
		
		$('.page1').click(function(){
			 $(".main").moveTo(30);
		});

		$('#page2_scrollInstruction').click(function(){
			$(".main").moveTo(3);
		});
	});

	var binaryequaldecimal = function(){
		$("#w1_inc").click(function(){
			var current = $('#binary').text();
			if(current == "1111") current = "1110";
			var inc = parseInt(current,2)+1;
			$('#binary').text(inc.toString(2));
			$('#decimal').text(inc.toString(10));
			if(parseInt(inc,10) == 15){
				$("#w1_inc").css('color',disabledColor);
				$("#w1_dec").css('color',interactiveColor);
			}else{
				$("#w1_inc").css('color',interactiveColor);
				$("#w1_dec").css('color',interactiveColor);
			}
		});
		$("#w1_dec").click(function(){
			var current = $('#binary').text();
			if(current == "-1111") current = "-1110";
			var dec = parseInt(current,2)-1;

			$('#binary').text(dec.toString(2));
			$('#decimal').text(dec.toString(10));

			if(parseInt(dec,10) == -15){
				$("#w1_dec").css('color',disabledColor);
				$("#w1_inc").css('color',interactiveColor);
			}else{
				$("#w1_inc").css('color',interactiveColor);
				$("#w1_dec").css('color',interactiveColor);
			}
		});
	};
	var binaryequaldecimal_2 = function(){
		$("#w2_inc").click(function(){
			var current = $('#w2_binarynumber').text();
			if(current == "1111") current = "1110";
			var inc = parseInt(current,2)+1;
			$('#w2_binarynumber').text(inc.toString(2));
			$('#w2_decimalnumber').text(inc.toString(10));
			if(parseInt(inc,10) == 15){
				$("#w2_inc").css('color',disabledColor);
				$("#w2_dec").css('color',interactiveColor);
			}else{
				$("#w2_inc").css('color',interactiveColor);
				$("#w2_dec").css('color',interactiveColor);
			}
			updateFromEqualTrigger();
		});
		$("#w2_dec").click(function(){
			var current = $('#w2_binarynumber').text();
			if(current == "0") current = "1";
			var dec = parseInt(current,2)-1;

			$('#w2_binarynumber').text(dec.toString(2));
			$('#w2_decimalnumber').text(dec.toString(10));

			if(parseInt(dec,10) == 0){
				$("#w2_dec").css('color',disabledColor);
				$("#w2_inc").css('color',interactiveColor);
			}else{
				$("#w2_inc").css('color',interactiveColor);
				$("#w2_dec").css('color',interactiveColor);
			}
			updateFromEqualTrigger();
		});

		navigator.sayswho= function(){
		    var ua= navigator.userAgent, tem,
		    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
		    if(/trident/i.test(M[1])){
		        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
		        return 'IE '+(tem[1] || '');
		    }
		    if(M[1]=== 'Chrome'){
		        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
		        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
		    }
		    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
		    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);

		    return M[0];
	 	};

  		if (navigator.sayswho() === 'Firefox') {
   			$('#halfadder').css('top', '-360px');
   			$('#fa-transistor').css('transform', 'scale(1.4)');
   			$('.gateTrans_label p').css({
   				top: '25px',
   				position: 'relative'
   			});	
  		}

	};
	var pg7_and = function(){
		var paper = new Raphael("and_gate_", 0, 0);
		var andgate = paper.path("M170.871,78.002h-25.262c-0.893-16-13.633-28-29.172-28H91.797h-5.926v4.623v8.377h-31v4h31v25h-31v4h31 v6.761v5.239h5.926h24.641c15.539,0,28.279-12,29.172-27h25.262V78.002z M116.438,103.002H90.871v-48h25.566 c13.273,0,24.07,10.728,24.07,24S129.711,103.002,116.438,103.002z").attr({
     		'fill': '#3a3939',
      		'stroke':"#3a3939"
    	});


    	var in_x = paper.text(45,65,"T")
    		.attr({
    			'fill': interactiveColor,
      			'stroke':"none",
      			'font-size': '25px'
    		});

    	var in_y = paper.text(45,95,"F")
    		.attr({
    			'fill': interactiveColor,
      			'stroke':"none",
      			'font-size': '25px'
    		});
		
		var shorten_output_line = paper.rect(165,77,10,5).attr({
    		'fill': '#a5a5a5',
      		'stroke':"#a5a5a5"
    	});
    	
    	var out_z = paper.text(173,80,"F")
    		.attr({
    			'fill': '#3a3939',
      			'stroke':"none",
      			'font-size': '25px'
    		});

    	in_x.click(function(){
    		toggle(in_x, in_x.attr('text'), out_z);
    	});

    	in_y.click(function(){
    		toggle(in_y, in_y.attr('text'),out_z);
    	});

		var toggle = function(in_, clicked, out){
			if(clicked=="T" ){
				in_.attr("text", "F");
			}else{
				in_.attr("text", "T");
			}
			if(in_x.attr('text')==="T" & in_y.attr('text')==="T"){
				out_z.attr("text", "T");
			}else{
				out_z.attr("text", "F");
			}
		}
	};	
	var pg7_or = function(){
		var orpaper = new Raphael("ORgate", 0, 0);
		var orgate = orpaper.path("M141.311,78.012c-2.05-6.26-11.95-26.34-55.33-29h-15.99l2.17,3.75c1.78,3.08,3.96,7.14,5.96,11.25h-20.25v4h22.12c2.23,4.99,3.88,9.56,3.83,11.95c-0.06,2.81-1.89,7.86-4.16,13.05h-21.79v4h19.98c-2.16,4.6-4.39,8.87-5.72,11.29l-2.04,3.71h15.35c41.3-1.87,53.68-25.02,55.87-30h20.56v-4H141.311z M85.271,107.012h-6.78c3.51-6.73,10.2-20.4,10.33-26.95c0.08-3.68-2.27-9.84-4.95-15.62c-0.06-0.14-0.13-0.29-0.2-0.43c-1.77-3.8-3.67-7.4-5.08-10h7.16c42.37,2.62,49.88,22.17,50.96,26.04C134.901,84.152,123.771,105.252,85.271,107.012z").attr({
     		'fill': '#3a3939',
      		'stroke':"#3a3939"
    	});

    	var in_x = orpaper.text(45,65,"T")
    		.attr({
    			'fill': interactiveColor,
      			'stroke':"none",
      			'font-size': '25px'
    		});

    	var in_y = orpaper.text(45,95,"F")
    		.attr({
    			'fill': interactiveColor,
      			'stroke':"none",
      			'font-size': '25px'
    		});

    	var out_z = orpaper.text(173,80,"T")
    		.attr({
    			'fill': '#3a3939',
      			'stroke':"none",
      			'font-size': '25px'
    		});
    	in_x.click(function(){
    		toggle(in_x, in_x.attr('text'), out_z);
    	});

    	in_y.click(function(){
    		toggle(in_y, in_y.attr('text'),out_z);
    	});

		var toggle = function(in_, clicked, out){
			if(clicked=="T" ){
				in_.attr("text", "F");
			}else{
				in_.attr("text", "T");
			}
			if(in_x.attr('text')==="T" || in_y.attr('text')==="T"){
				out_z.attr("text", "T");
			}else{
				out_z.attr("text", "F");
			}
		}
	};
	var pg7_not = function(){
		var notpaper = new Raphael("NOTgate", 0, 0);
		var notgate = notpaper.path("M127.511,78.522C126.78099999999999,76.492,124.851,75.042,122.571,75.042C120.161,75.042,118.131,76.682,117.521,78.892L86.87100000000001,55.501999999999995V77.52199999999999H62.87100000000001V81.52199999999999H86.87100000000001V106.702L117.641,82.082C118.37100000000001,84.10199999999999,120.311,85.54199999999999,122.571,85.54199999999999C124.67099999999999,85.54199999999999,126.481,84.31199999999998,127.321,82.52199999999999H150.871V78.52199999999999H127.511ZM90.871,98.382V63.58200000000001L113.121,80.58200000000001L90.871,98.382ZM122.571,83.542C120.92099999999999,83.542,119.56099999999999,82.302,119.351,80.712L119.621,80.50200000000001L119.321,80.272C119.331,78.492,120.791,77.042,122.571,77.042C124.371,77.042,125.821,78.502,125.821,80.292S124.371,83.542,122.571,83.542Z").attr({
     		'fill': '#3a3939',
      		'stroke':"#3a3939"
    	});

    	var in_x = notpaper.text(45,80,"T")
    		.attr({
    			'fill': interactiveColor,
      			'stroke':"none",
      			'font-size': '25px'
    		});

    	var out_z = notpaper.text(173,80,"F")
    		.attr({
    			'fill': '#3a3939',
      			'stroke':"none",
      			'font-size': '25px'
    		});
    	in_x.click(function(){
    		toggle(in_x, in_x.attr('text'), out_z);
    	});
    	
		var toggle = function(in_, clicked, out){
			if(clicked=="T" ){
				in_.attr("text", "F");
			}else{
				in_.attr("text", "T");
			}
			if(in_x.attr('text')==="T"){
				out_z.attr("text", "F");
			}else{
				out_z.attr("text", "T");
			}
		}
	};

	

}).call(this);