// Generated by CoffeeScript 1.3.1
(function() {
  var and_path, black, clickable, fontfamily, gray, lightGray, or_path, orange, red, white, xor_path;

  black = '#000';
  white = "#707070";
  gray = '#fff';
  orange = '#c0d9d9';
  clickable = '#ff9800';
  red = '#f00';
  fontfamily = '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif';

  and_path = 'M409.757,343.526H363.21v-89.121h46.547c24.575,0,44.567,19.993,44.567,44.568\
			C454.324,323.54,434.332,343.526,409.757,343.526z M368.21,338.526h41.547c21.818,0,39.567-17.743,39.567-39.553\
			c0-21.818-17.75-39.568-39.567-39.568H368.21V338.526z';

  xor_path = 'M345.174,152.697l-4.356-2.454l1.227-2.178c4.687-8.322,16.845-31.828,16.817-40.544 \
			c-0.025-8.584-12.143-31.663-16.81-39.831l-1.24-2.171l4.341-2.48l1.24,2.171c0.712,1.246,17.434,30.647,17.469,42.296\
			c0.037,11.814-16.747,41.745-17.461,43.013L345.174,152.697z M371.421,151.078h-20.002l2.039-3.705\
			c4.619-8.394,16.646-32.117,16.831-40.981c0.17-8.215-12.072-31.229-16.804-39.403l-2.172-3.752l20.914,0.005\
			c71.139,4.355,78.447,41.547,78.724,43.128l0.115,0.657l-0.228,0.627c-0.152,0.419-3.864,10.39-15.604,20.75\
			c-10.697,9.441-30.442,21.038-63.751,22.672L371.421,151.078z M359.824,146.078h11.474c17.481-0.864,42.126-5.25,60.387-21.212\
			c9.246-8.083,13.181-15.998,14.185-18.276c-0.591-2.171-3.096-9.539-11.368-17.184c-16.587-15.331-43.129-19.976-62.504-21.17\
			h-12.066c4.816,8.695,15.545,29.131,15.356,38.259l0,0C375.089,116.071,364.374,137.427,359.824,146.078z';

  or_path = "M800,430 h-20.002	l2.039-3.705			c4.619-8.394,16.646-32.117,16.831-40.981c0.17-8.215-12.072-31.229-16.804-39.403l-2.172-3.752l20.914,0.005			c71.139,4.355,78.447,41.547,78.724,43.128l0.115,0.657l-0.228,0.627c-0.152,0.419-3.864,10.39-15.604,20.75			c-10.697,9.441-30.442,21.038-63.751,22.672z ";

  window.onload = function() {
    var and_a_across1, and_a_across2, and_a_down1, and_a_down2, and_b_across1, and_b_across2, and_b_down1, and_b_down2, and_gate1, and_gate2, animationSTART, bottomANDOutputPathToORgate, bottomDot1, bottomDot2, carry1, carry2, drawORgate, extendCarryIn, fadeInGateLabels, fadeInInputLabels, fadeInOutputLabels, fadeInTitle, fadeOutTitle, firstSequenceTime, fullAdderTitle, halfAdderTitle, half_adder, orGateOutput, orGatePaths, or_gate, pushAND1right, pushAND2Left, pushDownAND1, r, reloadPageAppears, revealHA2, secondSequenceTime, second_half_adder, shortenANDoutputs, start, sum1, sum2, thirdSequenceTime, title, topANDOutputPathToORgate, topDot1, topDot2, xor_a1, xor_a2, xor_b1, xor_b2, xor_b2_part1, xor_b2_part2, xor_path1, xor_path2;
    r = new Raphael("transformingAdders-ralph", 1000, 600);
    start = r.text(580, 50, "start").attr({
      'font-size': '48px',
      'font-family': fontfamily,
      fill: clickable,
      'cursor': 'pointer'
    });
    start.click(function() {
      start.animate({
        fill: white
      }, 200, function() {
        start.hide();
        return animationSTART();
      });
      return fadeOutTitle();
    });
    title = r.set().push(
      fullAdderTitle = r.text(590, 20, "Full Adder").attr('fill', '#fff'), 
      halfAdderTitle = r.text(590, 20, "Half Adder").attr('fill', black)).attr({
      'font-size': '18px',
      'font-family': fontfamily
    });
    half_adder = r.set().push(xor_a1 = r.rect(178.999, 87.08, 186.667, 5), xor_b1 = r.rect(178.25, 126.641, 187.46, 5), and_a_down1 = r.rect(238.333, 126.641, 5, 195), and_b_down1 = r.rect(281.666, 87, 5, 190), and_a_across1 = r.rect(281.666, 276.888, 83.364, 5), and_b_across1 = r.rect(238.333, 318.641, 126, 5), sum1 = r.rect(448.488, 106.8, 174.511, 5), carry1 = r.rect(451.824, 298.974, 172.426, 5), and_gate1 = r.path(and_path), xor_path1 = r.path(xor_path), topDot1 = r.circle(284, 90, 6), bottomDot1 = r.circle(241, 130, 6)).attr({
      fill: black,
      stroke: 'none'
    });
    second_half_adder = r.set().push(xor_a2 = r.rect(178.999, 87.08, 186.667, 5), xor_b2_part1 = r.path("M367,129.25 h-100"), xor_b2_part2 = r.path("M270.25,129.25 h-92"), and_a_down2 = r.rect(238.333, 127, 5, 195), and_b_down2 = r.rect(281.666, 87, 5, 190), and_a_across2 = r.rect(281.666, 276.888, 83.364, 5), and_b_across2 = r.rect(238.333, 318.641, 126, 5), sum2 = r.rect(448.488, 106.8, 174.511, 5), carry2 = r.rect(451.824, 298.974, 172.426, 5), and_gate2 = r.path(and_path), xor_path2 = r.path(xor_path), topDot2 = r.circle(284, 90, 6), bottomDot2 = r.circle(241, 130, 6)).attr({
      fill: black,
      stroke: 'none'
    });
    xor_b2 = r.set().push(xor_b2_part1, xor_b2_part2).attr({
      stroke: black,
      'stroke-width': '5.5px'
    });
    or_gate = r.path(or_path).attr({
      'stroke-width': '5.5px',
      fill: 'none',
      stroke: 'none'
    });
    orGatePaths = r.set().push(topANDOutputPathToORgate = r.path("M741.5,321"), bottomANDOutputPathToORgate = r.path("M741.5,451.5"), orGateOutput = r.path("M880,386.25")).attr({
      stroke: black,
      'stroke-width': '5.5px'
    });
    firstSequenceTime = 1500;
    secondSequenceTime = 1800;
    thirdSequenceTime = 1500;
    animationSTART = function() {
      second_half_adder.attr({
        fill: gray,
        stroke: gray
      });
      xor_b2.attr({
        stroke: gray
      });
      second_half_adder.animate({
        transform: "t270,100",
        fill: black,
        stroke: 'none'
      }, 2500, "linear", function() {
        revealHA2();
        return pushDownAND1();
      });
      return xor_b2.animate({
        stroke: black
      }, 2500);
    };
    revealHA2 = function() {
      return second_half_adder.animate({
        transform: "...t0,-80.5"
      }, firstSequenceTime);
    };
    pushDownAND1 = function() {
      var first_half_adder_push_down, moveDownANDgate;
      moveDownANDgate = 150;
      first_half_adder_push_down = r.set().push(and_a_across1, and_b_across1, and_gate1, carry1);
      and_a_down1.animate({
        height: and_a_down1.attr('height') + moveDownANDgate
      }, firstSequenceTime);
      and_b_down1.animate({
        height: and_b_down1.attr('height') + moveDownANDgate
      }, firstSequenceTime);
      return first_half_adder_push_down.animate({
        transform: "t0," + moveDownANDgate
      }, firstSequenceTime, function() {
        pushAND1right();
        pushAND2Left();
        return extendCarryIn();
      });
    };
    pushAND1right = function() {
      var first_half_adder_push_right, pushRight;
      pushRight = 220;
      first_half_adder_push_right = r.set().push(and_gate1, carry1);
      first_half_adder_push_right.animate({
        transform: "...t" + pushRight + ",0"
      }, secondSequenceTime);
      and_a_across1.animate({
        width: and_a_across1.attr('width') + pushRight
      }, secondSequenceTime);
      return and_b_across1.animate({
        width: and_b_across1.attr('width') + pushRight
      }, secondSequenceTime);
    };
    pushAND2Left = function() {
      var pushLeft, second_half_adder_push_left;
      pushLeft = 50;
      second_half_adder_push_left = r.set().push(and_a_across2, and_b_across2, and_a_down2, and_b_down2, and_gate2, carry2);
      second_half_adder_push_left.animate({
        transform: "...t-" + pushLeft + ",0"
      }, secondSequenceTime);
      and_a_across2.animate({
        transform: "...t-" + pushLeft + ",0"
      }, secondSequenceTime);
      and_b_across2.animate({
        transform: "...t-" + pushLeft + ",0"
      }, secondSequenceTime);
      topDot2.animate({
        transform: "...t-" + pushLeft + ",0"
      }, secondSequenceTime);
      return bottomDot2.animate({
        transform: "...t-" + pushLeft + ",0"
      }, secondSequenceTime);
    };
    extendCarryIn = function() {
      xor_b2.attr({
        fill: 'none',
        stroke: black
      });
      xor_b2_part1.animate({
        path: "M367,129 h-100 v50"
      }, secondSequenceTime);
      xor_b2_part2.animate({
        path: "M270,177 h-92"
      }, secondSequenceTime, function() {
        xor_b2_part2.animate({
          path: "M270,177 h-362"
        }, thirdSequenceTime);
        return shortenANDoutputs();
      });
      and_a_down2.animate({
        y: and_a_down2.attr('y') + 50,
        height: and_a_down2.attr('height') - 50
      }, secondSequenceTime);
      return bottomDot2.animate({
        transform: "...t-50,47"
      }, secondSequenceTime);
    };
    shortenANDoutputs = function() {
      var shortenBy;
      shortenBy = 100;
      carry1.animate({
        width: carry1.attr('width') - shortenBy
      }, thirdSequenceTime);
      return carry2.animate({
        width: carry2.attr('width') - shortenBy
      }, thirdSequenceTime, function() {
        return drawORgate();
      });
    };
    drawORgate = function() {
      var across, down, timeToDrawOutputs;
      or_gate.attr({
        stroke: white
      });
      or_gate.animate({
        stroke: black
      }, thirdSequenceTime - 200);
      down = 40;
      across = 50;
      timeToDrawOutputs = 1100;
      topANDOutputPathToORgate.animate({
        path: "M741.5,321 v" + down + "h" + across
      }, timeToDrawOutputs);
      return bottomANDOutputPathToORgate.animate({
        path: "M741.5,451.5 v-" + down + "h" + across
      }, timeToDrawOutputs, function() {
        return orGateOutput.animate({
          path: "M880,386.25 h10"
        }, 500, function() {
          return fadeInInputLabels();
        });
      });
    };
    fadeInInputLabels = function() {
      var inputA, inputB, inputC, inputlabels;
      inputlabels = r.set().push(inputA = r.text(160, 90, "Input A"), inputB = r.text(160, 130, "Input B"), inputC = r.text(160, 195, "Carry In")).attr({
        'font-size': '20px',
        'font-family': fontfamily,
        'text-anchor': 'end',
        fill: white
      });
      return inputlabels.animate({
        fill: black
      }, 700, function() {
        return fadeInOutputLabels();
      });
    };
    fadeInOutputLabels = function() {
      var carry_out_label, outputLabels, sum_out_label;
      return outputLabels = r.set().push(sum_out_label = r.text(900, 130, "Sum"), carry_out_label = r.text(900, 385, "Carry Out")).attr({
        'font-size': '20px',
        'font-family': fontfamily,
        'text-anchor': 'start',
        fill: white
      }).animate({
        fill: black
      }, 500, function() {
        return fadeInGateLabels();
      });
    };
    fadeInGateLabels = function() {
      var and1_label, and2_label, andTime, gateLabels, or1_label, orTime, xor1_label, xor2_label, xorTime;
      gateLabels = r.set().push(xor1_label = r.text(383, 107, "XOR"), xor2_label = r.text(655, 125, "XOR"), and1_label = r.text(605, 320, "AND"), and2_label = r.text(605, 450, "AND"), or1_label = r.text(815, 385, "OR")).attr({
        'font-size': '20px',
        'font-family': fontfamily,
        'text-anchor': 'start',
        fill: white
      });
      xorTime = 800;
      andTime = 800;
      orTime = 800;
      xor1_label.animate({
        fill: black
      }, xorTime, function() {
        and1_label.animate({
          fill: black
        }, andTime);
        return and2_label.animate({
          fill: black
        }, andTime, function() {
          return or1_label.animate({
            fill: black
          }, orTime, function() {
            return fadeInTitle();
          });
        });
      });
      return xor2_label.animate({
        fill: black
      }, xorTime);
    };
    fadeOutTitle = function() {
      return halfAdderTitle.animate({
        fill: white
      }, 200, function() {
        return halfAdderTitle.hide();
      });
    };
    fadeInTitle = function() {
      return fullAdderTitle.animate({
        fill: black
      }, 0, function() {
        return reloadPageAppears();
      });
    };
    return reloadPageAppears = function() {
      var reloadPage;
      reloadPage = r.text(500, 500, "replay").attr({
        'font-size': '30px',
        'font-family': fontfamily,
        fill: clickable,
        cursor: 'pointer'
      });
      return reloadPage.click(function() {
        return location.reload();
      });
    };
  };

}).call(this);
