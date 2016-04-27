// Generated by CoffeeScript 1.3.1
(function() {
  var black, blue, botOpacity, darkgray, fontfamily, gray, green, orange, purple, red, teal, topOpacity, white, yellow;

  black = '#000';
  white = "#fff";
  gray = black;
  red = '#f00';
  orange = "#FFA347";
  yellow = '#FFE303';
  green = gray;
  purple = "#8B008B";
  blue = '#8B008B';
  red = '#999';
  darkgray = '#5f5f5f';
  teal = gray;
  fontfamily = '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif';
  topOpacity = 0.4;
  botOpacity = 0.7;

  window.onload = function() {
    var background0, background1, background2, background3, bot_fa0, bot_fa1, bot_fa2, bot_fa3, bottomRowY, carryX, carryY_top, carry_0, carry_1, carry_2, carry_3, carry_4, changedBit, clicked, connect_dot, connection_dot_radius, fa0_bot_half_rect, fa0_bot_text, fa0_bot_whole_rect, fa0_top_half_rect, fa0_top_text, fa0_top_whole_rect, fa1_bot_half_rect, fa1_bot_text, fa1_bot_whole_rect, fa1_top_half_rect, fa1_top_text, fa1_top_whole_rect, fa2_bot_half_rect, fa2_bot_text, fa2_bot_whole_rect, fa2_top_half_rect, fa2_top_text, fa2_top_whole_rect, fa3_bot_half_rect, fa3_bot_text, fa3_bot_whole_rect, fa3_top_half_rect, fa3_top_text, fa3_top_whole_rect, fa_0, fa_1, fa_2, fa_3, firstColumnX, fourthColumnX, fulladder0, fulladder1, fulladder2, fulladder3, getCarry, getSum, highlightOnHover, plus, r, secondColumnX, sumLine, sumY, sum_0, sum_1, sum_2, sum_3, sum_4, textSet, thirdColumnX, toggle, topRowY, top_fa0, top_fa1, top_fa2, top_fa3, unhighlight;
    r = new Raphael('ripple-column-widget-ralph', 900, 800);
    topRowY = 159.671;
    bottomRowY = 284.671;
    firstColumnX = 142.746;
    secondColumnX = 330.387;
    thirdColumnX = 518.021;
    fourthColumnX = 705.138;
    carryX = 55;
    carryY_top = topRowY - 75;
    sumY = 740;
    connection_dot_radius = 1.605;
    connect_dot = [];
    fa_3 = r.set().push(background3 = r.rect(firstColumnX - 75, topRowY - 150, 195, 770).attr({
      fill: white,
      stroke: 'none',
      'fill-opacity': 0
    }), fulladder3 = r.path("M194.075,259.671v12.499h61.062v124.832		h-49.717v8.081 M54.595,694.756v-23.587h68.189v-38.921 M138.046,534.874v62.344h-9.33v10.463 M102.356,534.662v62.132h14.061		v10.695 M193.497,560.072v136.93 M205.421,454.219v-49.136v16.919H96.177v89.649 M108.39,511.651v-77.149h84.789v20.065v-38.865		v-31.2 M187.241,535.479v-25.978h-13.494v-112.5 M131.772,511.662v-27.16h67.77l0.012-5.341v56.529 M143.962,511.651v-14.649		h29.785 M193.603,537.63c3.182,0.066,12.088-5.088,12.088-5.088v4.877c-1.271,20.781-12.193,22.689-12.193,22.689		s-11.133-4.172-12.404-22.902v-4.664C181.093,532.542,190.212,537.56,193.603,537.63z M205.903,529.149		c0,0-8.891,5.078-12.193,5.088c-3.352,0.011-12.404-5.088-12.404-5.088 M199.759,482.472 M187.028,451.537v4.665		c0.92,18.731,12.406,22.901,12.406,22.901s10.922-1.908,12.193-22.688v-4.878c0,0-8.906,5.155-12.086,5.09		C196.149,456.556,187.028,451.537,187.028,451.537z M186.817,448.144c0,0,9.053,5.1,12.406,5.09		c3.303-0.01,12.191-5.09,12.191-5.09 M91.075,511.761v11.713c0,6.18,5.01,11.188,11.184,11.188c6.18,0,11.188-5.009,11.188-11.188		v-11.713 M113.235,511.761h-22.16 M149.231,512.026v11.715c0,6.179-5.008,11.188-11.188,11.188		c-6.176,0-11.184-5.009-11.184-11.188v-11.715 M149.021,512.026h-22.16 M122.778,609.704c3.18,0.064,12.086-5.091,12.086-5.091		v4.878c-1.271,20.782-12.193,22.69-12.193,22.69s-11.133-4.171-12.404-22.903v-4.665		C110.267,604.613,119.386,609.634,122.778,609.704z M167.497,84.503h-49.859v312.499h56.109").attr({
      stroke: darkgray
    }), top_fa3 = r.set().push(fa3_top_whole_rect = r.rect(firstColumnX, topRowY, 100, 100).attr({
      opacity: topOpacity
    }), fa3_top_half_rect = r.rect(firstColumnX, topRowY, 100, 50).attr({
      opacity: botOpacity
    }), fa3_top_text = r.text(firstColumnX + 50, topRowY + 50, 1)).attr({
      fill: blue,
      opacity: 0.25,
      stroke: 'none'
    }), bot_fa3 = r.set().push(fa3_bot_whole_rect = r.rect(firstColumnX, bottomRowY, 100, 100).attr({
      opacity: topOpacity
    }), fa3_bot_half_rect = r.rect(firstColumnX, bottomRowY, 100, 50).attr({
      opacity: botOpacity
    }), fa3_bot_text = r.text(firstColumnX + 50, bottomRowY + 50, 1)).attr({
      fill: blue,
      opacity: 0.25,
      stroke: 'none'
    }), carry_3 = r.text(firstColumnX + 50, topRowY - 75, 1), sum_3 = r.text(firstColumnX + 50, sumY, 1), connect_dot[3] = r.set().push(r.circle(205.414, 421.919, connection_dot_radius), r.circle(193.164, 434.669, connection_dot_radius), r.circle(199.414, 484.586, connection_dot_radius), r.circle(173.748, 497.169, connection_dot_radius)).attr({
      fill: darkgray,
      stroke: darkgray
    }));
    fa_2 = r.set().push(background2 = r.rect(secondColumnX - 75, topRowY - 150, 195, 770).attr({
      fill: white,
      stroke: 'none',
      'fill-opacity': 0
    }), fulladder2 = r.path("M309.559,633.004 M315.976,608.437v-10.463		h9.33v-62.343 M303.677,608.245V597.55h-14.061v-62.132 M380.757,560.828v136.174 M283.437,512.407v-90.405h109.244v-25v58.472		 M380.438,384.502v15.839v16.117v38.865v-20.821h-84.791v77.905 M362.202,403.252v106.25h12.299v26.733 M386.813,536.448v-56.531		l-0.014,4.585h-67.768v27.916 M362.202,497.002h-30.98v15.405 M368.353,533.298v4.665c1.271,18.729,12.404,22.902,12.404,22.902		s10.922-1.909,12.193-22.69v-4.877c0,0-8.906,5.156-12.088,5.089C377.47,538.316,368.353,533.298,368.353,533.298z		 M368.563,529.905c0,0,9.053,5.1,12.404,5.089c3.305-0.011,12.193-5.089,12.193-5.089 M387.021,483.228 M386.8,457.384		c3.182,0.065,12.088-5.09,12.088-5.09v4.877c-1.273,20.781-12.193,22.689-12.193,22.689s-11.486-4.17-12.404-22.902v-4.664		C374.29,452.294,383.407,457.312,386.8,457.384z M398.675,448.901c0,0-8.891,5.078-12.193,5.088		c-3.352,0.01-12.404-5.088-12.404-5.088 M300.706,512.517v11.713c0,6.181-5.008,11.188-11.188,11.188		c-6.176,0-11.184-5.008-11.184-11.188v-11.713 M300.495,512.517h-22.16 M314.118,512.783v11.715c0,6.179,5.01,11.188,11.186,11.188		c6.18,0,11.188-5.009,11.188-11.188v-11.715 M336.278,512.783h-22.16 M297.526,605.37v4.664		c1.271,18.732,12.404,22.904,12.404,22.904s10.922-1.909,12.193-22.691v-4.877c0,0-8.906,5.156-12.088,5.09		C306.644,610.39,297.526,605.37,297.526,605.37z M380.387,259.669v11.5h62.251v125.833h-50 M355.138,84.502h-50v318.75h56.25		 M223.888,84.502h43.75v587.5h42.293v-39.063").attr({
      stroke: darkgray
    }), top_fa2 = r.set().push(fa2_top_whole_rect = r.rect(secondColumnX, topRowY, 100, 100).attr({
      opacity: topOpacity
    }), fa2_top_half_rect = r.rect(secondColumnX, topRowY, 100, 50).attr({
      opacity: botOpacity
    }), fa2_top_text = r.text(secondColumnX + 50, topRowY + 50, 1)).attr({
      fill: blue,
      opacity: 0.25,
      stroke: 'none'
    }), bot_fa2 = r.set().push(fa2_bot_whole_rect = r.rect(secondColumnX, bottomRowY, 100, 100).attr({
      opacity: topOpacity
    }), fa2_bot_half_rect = r.rect(secondColumnX, bottomRowY, 100, 50).attr({
      opacity: botOpacity
    }), fa2_bot_text = r.text(secondColumnX + 50, bottomRowY + 50, 1)).attr({
      fill: blue,
      opacity: 0.25,
      stroke: 'none'
    }), carry_2 = r.text(secondColumnX + 50, topRowY - 75, 1), sum_2 = r.text(secondColumnX + 50, sumY, 1), connect_dot[2] = r.set().push(r.circle(380.387, 434.620, connection_dot_radius), r.circle(386.887, 484.370, connection_dot_radius), r.circle(392.639, 422.010, connection_dot_radius), r.circle(361.806, 497.169, connection_dot_radius)).attr({
      fill: darkgray,
      stroke: darkgray
    }));
    fa_1 = r.set().push(background1 = r.rect(thirdColumnX - 75, topRowY - 150, 195, 770).attr({
      fill: white,
      'fill-opacity': 0,
      stroke: 'none'
    }), fulladder1 = r.path("M567.638,259.669v12.333h62.5v124.667h-50		 M498.559,633.382 M512.804,535.631v62.343h-9.33v10.463 M477.114,535.418v62.132h14.061v10.695 M568.257,560.828v136.174		 M580.181,455.474v-58.472v25H470.937v90.405 M483.147,512.407v-77.905h84.791v20.821v-38.865v-16.117v-15.839 M506.53,512.418		v-27.916h67.77l0.014-4.585v56.531 M518.72,512.407v-15.405h30.982 M568.362,538.387c3.182,0.067,12.086-5.089,12.086-5.089v4.877		c-1.271,20.781-12.191,22.69-12.191,22.69s-11.133-4.173-12.406-22.902v-4.665C555.851,533.298,564.97,538.316,568.362,538.387z		 M580.661,529.905c0,0-8.891,5.078-12.193,5.089c-3.352,0.011-12.404-5.089-12.404-5.089 M574.519,483.228 M561.788,452.294v4.664		c0.92,18.732,12.406,22.902,12.406,22.902s10.92-1.908,12.193-22.689v-4.877c0,0-8.906,5.155-12.088,5.09		C570.907,457.312,561.788,452.294,561.788,452.294z M561.577,448.901c0,0,9.053,5.098,12.404,5.088		c3.303-0.01,12.193-5.088,12.193-5.088 M465.835,512.517v11.713c0,6.181,5.008,11.188,11.184,11.188		c6.18,0,11.188-5.008,11.188-11.188v-11.713 M487.995,512.517h-22.16 M523.989,512.783v11.715c0,6.179-5.008,11.188-11.188,11.188		c-6.176,0-11.184-5.009-11.184-11.188v-11.715 M523.778,512.783h-22.16 M497.536,610.46c3.182,0.066,12.088-5.09,12.088-5.09v4.877		c-1.273,20.782-12.193,22.691-12.193,22.691s-11.133-4.172-12.404-22.904v-4.664C485.026,605.37,494.144,610.39,497.536,610.46z		 M542.638,84.001h-50v319.251h57.064v106.25h12.299v26.733 M497.431,632.938v39.063h-42.293l0,0l0.001-587.5h-43.751").attr({
      stroke: darkgray
    }), top_fa1 = r.set().push(fa1_top_whole_rect = r.rect(thirdColumnX, topRowY, 100, 100).attr({
      opacity: topOpacity
    }), fa1_top_half_rect = r.rect(thirdColumnX, topRowY, 100, 50).attr({
      opacity: botOpacity
    }), fa1_top_text = r.text(thirdColumnX + 50, topRowY + 50, 1)).attr({
      fill: blue,
      opacity: 0.25,
      stroke: 'none'
    }), bot_fa1 = r.set().push(fa1_bot_whole_rect = r.rect(thirdColumnX, bottomRowY, 100, 100).attr({
      opacity: topOpacity
    }), fa1_bot_half_rect = r.rect(thirdColumnX, bottomRowY, 100, 50).attr({
      opacity: botOpacity
    }), fa1_bot_text = r.text(thirdColumnX + 50, bottomRowY + 50, 1)).attr({
      fill: blue,
      opacity: 0.25,
      stroke: 'none'
    }), carry_1 = r.text(thirdColumnX + 50, topRowY - 75, 1), sum_1 = r.text(thirdColumnX + 50, sumY, 1), connect_dot[1] = r.set().push(r.circle(567.870, 434.620, connection_dot_radius), r.circle(574.263, 484.370, connection_dot_radius), r.circle(549.743, 497.169, connection_dot_radius), r.circle(580.306, 422.010, connection_dot_radius)).attr({
      fill: darkgray,
      stroke: darkgray
    }));
    fa_0 = r.set().push(background0 = r.rect(fourthColumnX - 75, topRowY - 150, 195, 770).attr({
      fill: white,
      'fill-opacity': 0,
      stroke: 'none'
    }), fulladder0 = r.path("M690.822,608.437v-10.463h9.33v-62.343		 M678.523,608.245V597.55h-14.061v-62.132 M755.605,560.828v136.174 M658.285,512.407v-90.405h109.244v-25v57.972 M755.287,384.502		v31.956v38.865v-20.821h-84.791v77.905 M737.051,403.252v106.25h12.299v26.733 M761.662,536.448v-56.531l-0.014,4.585h-67.77		v27.916 M737.051,497.002h-30.982v15.405 M743.199,533.298v4.665c1.273,18.729,12.406,22.902,12.406,22.902		s10.92-1.909,12.191-22.69v-4.877c0,0-8.906,5.156-12.086,5.089C752.318,538.316,743.199,533.298,743.199,533.298z		 M743.412,529.905c0,0,9.053,5.1,12.404,5.089c3.303-0.011,12.193-5.089,12.193-5.089 M761.867,483.228 M761.648,457.384		c3.18,0.065,12.086-5.09,12.086-5.09v4.877c-1.271,20.781-12.193,22.689-12.193,22.689s-11.486-4.17-12.404-22.902v-4.664		C749.137,452.294,758.256,457.312,761.648,457.384z M773.523,448.901c0,0-8.891,5.078-12.193,5.088		c-3.354,0.01-12.406-5.088-12.406-5.088 M675.555,512.517v11.713c0,6.181-5.01,11.188-11.188,11.188		c-6.176,0-11.186-5.008-11.186-11.188v-11.713 M675.342,512.517h-22.16 M688.967,512.783v11.715		c0,6.179,5.008,11.188,11.184,11.188c6.18,0,11.188-5.009,11.188-11.188v-11.715 M711.127,512.783h-22.16 M672.375,605.37v4.664		c1.271,18.732,12.404,22.904,12.404,22.904s10.92-1.909,12.191-22.691v-4.877c0,0-8.906,5.156-12.086,5.09		C681.492,610.39,672.375,605.37,672.375,605.37z M755.138,259.502v12.5h62.5v125h-50.108 M737.107,403.252h-56.97V84.169h37.5		 M684.779,632.938v38.564h-42.142V84.001h-43.75").attr({
      stroke: darkgray
    }), top_fa0 = r.set().push(fa0_top_whole_rect = r.rect(fourthColumnX, topRowY, 100, 100).attr({
      opacity: topOpacity
    }), fa0_top_half_rect = r.rect(fourthColumnX, topRowY, 100, 50).attr({
      opacity: botOpacity
    }), fa0_top_text = r.text(fourthColumnX + 50, topRowY + 50, 1)).attr({
      fill: blue,
      opacity: 0.25,
      stroke: 'none'
    }), bot_fa0 = r.set().push(fa0_bot_whole_rect = r.rect(fourthColumnX, bottomRowY, 100, 100).attr({
      opacity: topOpacity
    }), fa0_bot_half_rect = r.rect(fourthColumnX, bottomRowY, 100, 50).attr({
      opacity: botOpacity
    }), fa0_bot_text = r.text(fourthColumnX + 50, bottomRowY + 50, 1)).attr({
      fill: blue,
      opacity: 0.25,
      stroke: 'none'
    }), carry_0 = r.text(fourthColumnX + 50, topRowY - 75, 0), sum_0 = r.text(fourthColumnX + 50, sumY, 0), connect_dot[0] = r.set().push(r.circle(736.945, 496.995, connection_dot_radius), r.circle(761.570, 484.370, connection_dot_radius), r.circle(755.195, 434.620, connection_dot_radius), r.circle(767.445, 421.870, connection_dot_radius)).attr({
      fill: darkgray,
      stroke: darkgray
    }));
    carry_4 = r.text(carryX, carryY_top, 1);
    sum_4 = r.text(carryX, sumY, 1);
    sumLine = r.path("M18,683 h800").attr({
      'stroke-width': '5px'
    });
    plus = r.text(48.5781, 328, "+");
    textSet = r.set().push(plus, carry_4, sum_4, fa0_top_text, fa0_bot_text, carry_0, sum_0, fa1_top_text, fa1_bot_text, carry_1, sum_1, fa2_top_text, fa2_bot_text, carry_2, sum_2, fa3_top_text, fa3_bot_text, carry_3, sum_3).attr({
      fill: black,
      opacity: 1,
      'font-family': fontfamily,
      'font-size': '50px'
    });
    unhighlight = function(number) {
      switch (number) {
        case 0:
          fulladder0.attr({
            stroke: darkgray
          });
          return connect_dot[0].attr({
            fill: darkgray,
            stroke: darkgray
          });
        case 1:
          fulladder1.attr({
            stroke: darkgray
          });
          return connect_dot[1].attr({
            fill: darkgray,
            stroke: darkgray
          });
        case 2:
          fulladder2.attr({
            stroke: darkgray
          });
          return connect_dot[2].attr({
            fill: darkgray,
            stroke: darkgray
          });
        case 3:
          fulladder3.attr({
            stroke: darkgray
          });
          return connect_dot[3].attr({
            fill: darkgray,
            stroke: darkgray
          });
      }
    };
    highlightOnHover = function(number) {
      fulladder0.attr({
        stroke: darkgray
      });
      fulladder1.attr({
        stroke: darkgray
      });
      fulladder2.attr({
        stroke: darkgray
      });
      fulladder3.attr({
        stroke: darkgray
      });
      connect_dot[0].attr({
        fill: darkgray,
        stroke: darkgray
      });
      connect_dot[1].attr({
        fill: darkgray,
        stroke: darkgray
      });
      connect_dot[2].attr({
        fill: darkgray,
        stroke: darkgray
      });
      connect_dot[3].attr({
        fill: darkgray,
        stroke: darkgray
      });
      switch (number) {
        case 0:
          fulladder0.attr({
            stroke: green
          });
          return connect_dot[0].attr({
            fill: green,
            stroke: green
          });
        case 1:
          fulladder1.attr({
            stroke: teal
          });
          return connect_dot[1].attr({
            fill: teal,
            stroke: teal
          });
        case 2:
          fulladder2.attr({
            stroke: green
          });
          return connect_dot[2].attr({
            fill: green,
            stroke: green
          });
        case 3:
          fulladder3.attr({
            stroke: teal
          });
          return connect_dot[3].attr({
            fill: teal,
            stroke: teal
          });
      }
    };
    toggle = function(bit) {
      if (bit === 0 || bit === '0') {
        return 1;
      } else {
        return 0;
      }
    };
    changedBit = function(textToChange) {
      return textToChange.attr('text', toggle(textToChange.attr('text')));
    };
    clicked = function(textToChange) {
      var a0, a1, a2, a3, b0, b1, b2, b3, c1, c2, c3;
      changedBit(textToChange);
      /*
      		 
      		   (f3 f2 f1 f0)
      
      		 c4 c3 c2 c1 c0
      			a3 a2 a1 a0
      		 +  b3 b2 b1 b0
      		 ---------------
      		 s4	s3 s2 s1 s0
      */

      a0 = parseInt(fa0_top_text.attr('text'));
      a1 = parseInt(fa1_top_text.attr('text'));
      a2 = parseInt(fa2_top_text.attr('text'));
      a3 = parseInt(fa3_top_text.attr('text'));
      b0 = parseInt(fa0_bot_text.attr('text'));
      b1 = parseInt(fa1_bot_text.attr('text'));
      b2 = parseInt(fa2_bot_text.attr('text'));
      b3 = parseInt(fa3_bot_text.attr('text'));
      sum_0.attr('text', getSum(a0 + b0));
      carry_1.attr('text', getCarry(a0 + b0));
      c1 = parseInt(carry_1.attr('text'));
      sum_1.attr('text', getSum(c1 + a1 + b1));
      carry_2.attr('text', getCarry(c1 + a1 + b1));
      c2 = parseInt(carry_2.attr('text'));
      sum_2.attr('text', getSum(c2 + a2 + b2));
      carry_3.attr('text', getCarry(c2 + a2 + b2));
      c3 = parseInt(carry_3.attr('text'));
      sum_3.attr('text', getSum(c3 + a3 + b3));
      carry_4.attr('text', getCarry(c3 + a3 + b3));
      return sum_4.attr('text', getCarry(c3 + a3 + b3));
    };
    getSum = function(value) {
      if (value > 1) {
        return value - 2;
      } else {
        return value;
      }
    };
    getCarry = function(value) {
      if (value > 1) {
        return 1;
      } else {
        return 0;
      }
    };
    fa_0.hover(function() {
      return highlightOnHover(0);
    }, function() {
      return unhighlight(0);
    });
    fa_1.hover(function() {
      return highlightOnHover(1);
    }, function() {
      return unhighlight(1);
    });
    fa_2.hover(function() {
      return highlightOnHover(2);
    }, function() {
      return unhighlight(2);
    });
    fa_3.hover(function() {
      return highlightOnHover(3);
    }, function() {
      return unhighlight(3);
    });
    top_fa0.click(function() {
      return clicked(fa0_top_text);
    });
    bot_fa0.click(function() {
      return clicked(fa0_bot_text);
    });
    top_fa1.click(function() {
      return clicked(fa1_top_text);
    });
    bot_fa1.click(function() {
      return clicked(fa1_bot_text);
    });
    top_fa2.click(function() {
      return clicked(fa2_top_text);
    });
    bot_fa2.click(function() {
      return clicked(fa2_bot_text);
    });
    top_fa3.click(function() {
      return clicked(fa3_top_text);
    });
    return bot_fa3.click(function() {
      return clicked(fa3_bot_text);
    });
  };

}).call(this);