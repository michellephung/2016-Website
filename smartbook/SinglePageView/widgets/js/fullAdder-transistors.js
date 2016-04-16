// Generated by CoffeeScript 1.3.1

/*

fullAdder-transistors.coffee 
by Michelle Phung for DDO 2013

(coffeescript file for digital design book fulladder with transistors)

May 15th, 2012
*/


(function() {
  var black, blue, connection_dot_r, fontfamily, gray, orange, red, signals, teal, white;

  black = '#000';

  white = "#66FFFF";

  gray = '#808080';

  blue = '#7922A2';

  orange = white;

  teal = '#18e99f';

  lightPurple = "#a43bd6";
  
  darkPurple ="#7922a3";

  red = "#f00";

  fontfamily = '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif';

  connection_dot_r = 1.7;

  $(function() {
    var and1_gate1, and1_gate2, and1_gate3, and1_gnd1, and1_gnd2, and1_pwr1, and1_pwr2, and1_transistor_gates, and2_gate1, and2_gate2, and2_gate3, and2_gnd1, and2_gnd2, and2_pwr1, and2_pwr2, and2_transistor_gates, both_view, carryOut, choose_view_circles, dots, fa, full_adder_gates, full_adder_skeleton, full_adder_transistors, gate_view, gnd_txt, inputA, inputB, inputCI, input_signal_text, linetype, makeMovingLine, or_gate1, or_gate2, or_gate3, or_gnd1, or_gnd2, or_gnd3, or_pwr1, or_pwr2, or_transistor_gates, output_signal_text, overDots, pwr_txt, showWires, showWiresHelper, signal_text, startx, starty, sum, toggle, transistor_gate_path, transistor_view, updateGates, xor1_gate1, xor1_gate2, xor1_gate3, xor1_gate4, xor1_gate5, xor1_gnd1, xor1_gnd2, xor1_gnd3, xor1_gnd4, xor1_pwr1, xor1_pwr2, xor1_transistor_gates, xor2_gate1, xor2_gate2, xor2_gate3, xor2_gate4, xor2_gate5, xor2_gnd1, xor2_gnd2, xor2_gnd3, xor2_gnd4, xor2_pwr1, xor2_pwr2, xor2_transistor_gates;
    fa = new Raphael("fullAdder-transistors-ralph", 680, 390);
    labels=fa.set().push(
        sumLabel = fa.text(655,70,"sum"),
        carryoutLabel=fa.text(655,215,"carry\nout")
    ).attr({
      fill:gray,
      'font-family': fontfamily,
      'font-size': "14px"
    });
    full_adder_gates = fa.set().push(fa.path("M627.312,264.243h16.049 M569.385,250.259		h-24.671v-22h-147 M568.934,279.259h-25.22v33.152h-146.5 M457.128,97.509H644.36 M342.958,326.979H116.714V69.394h-32.5h124.5		 M84.214,98.259h32.504h91.643h-56.646v199.928h191.244 M84.214,141.259h249.5v-29h65.427 M399.641,83.226H266.349l16.146,0.033		v159.793h60.487 M310.714,141.259v73.051h32.244 M392.214,126.759h11c44.166-3,54-29.25,54-29.25s-4.5-25.75-53.5-28.75h-11.5		c0,0,12.155,21,12,28.5C404.048,105.259,392.214,126.759,392.214,126.759z M384.214,126.259c0,0,12.024-21.346,12-29.25		c-0.023-7.787-12-28.75-12-28.75 M274.154,82.743 M213.214,83.259c0.155-7.5-12-28.5-12-28.5h11.5c49,3,53.5,28.75,53.5,28.75		s-9.834,27.084-54,29.25h-11C201.214,112.759,213.048,91.259,213.214,83.259z M193.214,55.259c0,0,11.977,20.963,12,28.75		c0.024,7.904-12,29.25-12,29.25 M343.214,286.259h27.62c14.57,0,26.38,11.811,26.38,26.381c0,14.561-11.81,26.369-26.38,26.369		h-27.62 M343.214,286.759v52.25 M343.843,254.634h27.62c14.57,0,26.38-11.809,26.38-26.369c0-14.57-11.81-26.381-26.38-26.381		h-27.62 M343.843,202.384v52.25 M562.154,293.759h11c44.166-3,54-29.25,54-29.25s-4.5-25.75-53.5-28.75h-11.5		c0,0,12.155,21,12,28.5C573.988,272.259,562.154,293.759,562.154,293.759z"), overDots = fa.set().push(fa.circle(117, 69, connection_dot_r), fa.circle(152, 98, connection_dot_r), fa.circle(283, 83, connection_dot_r), fa.circle(311, 141, connection_dot_r)).attr({
      fill: teal
    })).attr({
      stroke: teal
    }).hide();
    transistor_gate_path = "v10.5 m0,-5.5 h-3";
    full_adder_transistors = fa.set().push(full_adder_skeleton = fa.path("M568.456,282.9v-16.389h-9.389v-9.389h9.389v-7.889h13.389v-19.166		 M593.928,282.9v-16.389h-9.389v-9.389h9.389v-7.889h-12.084 M605.909,262.234h-4.318v-20.176h-19.746 M625.897,229.99v26.979		h-4.695h-4.693v9.389h9.389l-0.023,16.648 M572.371,261.746h2.528 M625.874,243.006h18.383 M359.343,288.99v13.338h-9.889v9.338		h9.389v3.838h-9.389v9.336h9.889v7.314 M359.343,299.135h6.563v14.443h5.938 M390.624,289.135v19.82h-9.389v9.361h9.389v13.834		 M359.343,207.49v13.338h-9.889v9.338h9.389v3.838h-9.389v9.336h9.889v7.314 M359.343,217.135h6.563v14.943h5.938 M390.624,207.635		v19.82h-9.389v9.361h9.389v13.834 M457.757,76.518v10.389h-7.303l-0.105,14.01h-4.695h-4.693v9.389h9.389v20.045 M477.146,130.475		v-8.389h-8.389v-8.889h8.421v-8.32h-8.889v-9.389h8.889l-0.016-8.582h-19.238 M644.257,86.928H477.178 M394.037,130.35v-13.389		h-9.389v-9.389h9.389v-7.889h13.389V76.518 M420.009,130.35v-13.389h-9.889v-9.389h9.889v-7.889h-13.584 M430.401,105.766h-4.229		v-19.26h-18.746 M244.812,50.982v10.389h-7.408v14.01h-4.695h-4.693v9.389h9.389v20.045 M264.201,104.939v-8.389h-8.389v-8.889		h8.421v-8.32h-8.889v-9.389h8.889l-0.016-8.582h-19.238 M194.48,60.971h18.746v19.26h4.229 M207.064,104.814V91.426h-9.889v-9.389		h9.889v-7.889H193.48 M181.091,104.814V91.426h-9.389v-9.389h9.389v-7.889h13.389V50.982 M390.462,217.832h142v44.336h15.671		 M390.462,299.984h141.5v-25.652h39.22h1.189v-12.586 M158.462,86.467h-76h42.5v233.586h209.744 M334.706,307.26H137.462V99.832		h19.646H82.462 M399.785,112.643h-1.875v12.189h-26.361h-2.587h-286.5 M334.206,225.383h-33.244V125.332 M264.233,61.371		l17.864,0.021v32.406 M157.108,99.832h28.096V87.107h1.636 M334.23,238.125h-45.487V94.332l-7.146-0.033h88.063v3.844v13.625h2.805"), signal_text = fa.set(), pwr_txt = fa.set(), gnd_txt = fa.set(), xor1_transistor_gates = fa.path("M170,81.5" + transistor_gate_path + "M195.5,81.5" + transistor_gate_path + "M226.5,74.75" + transistor_gate_path + "M253.5,69.5" + transistor_gate_path + "M254,87" + transistor_gate_path).attr({
      stroke: black
    }), signal_text.push(xor1_gate1 = fa.text(163, 86, "0"), xor1_gate2 = fa.text(190, 86, "0"), xor1_gate3 = fa.text(221, 80, "1"), xor1_gate4 = fa.text(248, 74, "0"), xor1_gate5 = fa.text(248, 92, "0")), pwr_txt.push(xor1_pwr1 = fa.text(195, 46, "pwr"), xor1_pwr2 = fa.text(245, 46, "pwr")), gnd_txt.push(xor1_gnd1 = fa.text(183, 110, "gnd"), xor1_gnd2 = fa.text(208, 110, "gnd"), xor1_gnd3 = fa.text(236, 110, "gnd"), xor1_gnd4 = fa.text(265, 110, "gnd")), xor2_transistor_gates = fa.path("M383,107" + transistor_gate_path + "M408.5,107" + transistor_gate_path + "M439,100.75" + transistor_gate_path + "M466.5,95" + transistor_gate_path + "M466.5,112.5" + transistor_gate_path).attr({
      stroke: black
    }), signal_text.push(xor2_gate1 = fa.text(376, 112, "0"), xor2_gate2 = fa.text(403, 112, "0"), xor2_gate3 = fa.text(434, 106, "1"), xor2_gate4 = fa.text(461, 100, "0"), xor2_gate5 = fa.text(461, 118, "0")).attr({
      'font-family': fontfamily
    }), pwr_txt.push(xor2_pwr1 = fa.text(405, 71, "pwr"), xor2_pwr2 = fa.text(455, 71, "pwr")), gnd_txt.push(xor2_gnd1 = fa.text(394, 135, "gnd"), xor2_gnd2 = fa.text(419, 135, "gnd"), xor2_gnd3 = fa.text(447, 135, "gnd"), xor2_gnd4 = fa.text(476, 135, "gnd")), and1_transistor_gates = fa.path("M347,220" + transistor_gate_path + "M347,233.5" + transistor_gate_path + "M379.5,227" + transistor_gate_path).attr({
      stroke: black
    }), signal_text.push(and1_gate1 = fa.text(340, 225, "0"), and1_gate2 = fa.text(340, 238.5, "0"), and1_gate3 = fa.text(374.5, 232, "1")), pwr_txt.push(and1_pwr1 = fa.text(360, 202, "pwr"), and1_pwr2 = fa.text(390, 202, "pwr")), gnd_txt.push(and1_gnd1 = fa.text(360, 255, "gnd"), and1_gnd2 = fa.text(390, 255, "gnd")), and2_transistor_gates = fa.path("M347,301.5" + transistor_gate_path + "M347,315" + transistor_gate_path + "M379.5,308.25" + transistor_gate_path).attr({
      stroke: black
    }), signal_text.push(and2_gate1 = fa.text(340, 307, "0"), and2_gate2 = fa.text(340, 320.5, "0"), and2_gate3 = fa.text(374.5, 314, "1")), pwr_txt.push(and2_pwr1 = fa.text(360, 285, "pwr"), and2_pwr2 = fa.text(390, 285, "pwr")), gnd_txt.push(and2_gnd1 = fa.text(360, 335, "gnd"), and2_gnd2 = fa.text(390, 335, "gnd")), or_transistor_gates = fa.path("M557,256.75" + transistor_gate_path + "M583,256.75" + transistor_gate_path + "M615,256.75" + transistor_gate_path).attr({
      stroke: black
    }), signal_text.push(or_gate1 = fa.text(551, 263, "0"), or_gate2 = fa.text(577.5, 263, "0"), or_gate3 = fa.text(609.5, 263, "1")), pwr_txt.push(or_pwr1 = fa.text(580, 225, "pwr"), or_pwr2 = fa.text(625, 225, "pwr")), gnd_txt.push(or_gnd1 = fa.text(569, 286, "gnd"), or_gnd2 = fa.text(595, 286, "gnd"), or_gnd3 = fa.text(625, 286, "gnd")), input_signal_text = fa.set().push(inputA = fa.text(75, 85, "0"), inputB = fa.text(75, 100, "0"), inputCI = fa.text(75, 125, "0")).attr({
      fill: blue,
      'font-size': '16px'
    }), output_signal_text = fa.set().push(sum = fa.text(655, 87, "0"), carryOut = fa.text(655, 243, "0")).attr({
      fill: black,
      'font-size': '16px'
    }), dots = fa.set().push(fa.circle(125, 87, connection_dot_r), fa.circle(138, 100, connection_dot_r), fa.circle(289, 94, connection_dot_r), fa.circle(301, 125, connection_dot_r)).attr({
      fill: black
    })).attr({
      'font-family': fontfamily
    });
    choose_view_circles = fa.set().push(
      startx = 340, starty = 370, 
      transistor_view = fa.circle(startx, starty, 20).attr({
      fill: darkPurple
    }), gate_view = fa.circle(startx + 25, starty, 20).attr({
      fill: lightPurple
    }), both_view = fa.rect(startx + 5, starty - 25, 15, 55).attr({
      fill: orange
    })).attr({
      stroke: 'none',
      'fill-opacity': 0.4
    });
    both_view.attr({
      'fill-opacity': 0
    });
    signal_text.attr({
      'font-size': '8px'
    });
    pwr_txt.attr({
      'font-size': '10px'
    });
    full_adder_skeleton.attr({
      'stroke-width': '1px'
    });
    transistor_view.hover(function() {
      full_adder_gates.hide();
      full_adder_transistors.show();
      return showWires();
    });
    gate_view.hover(function() {
      full_adder_gates.show();
      return full_adder_transistors.hide();
    });
    both_view.hover(function() {
      full_adder_gates.show();
      full_adder_transistors.show();
      return showWires();
    });
    inputA.click(function() {
      this.attr('text', toggle(this.attr('text')));
      return updateGates();
    });
    inputB.click(function() {
      this.attr('text', toggle(this.attr('text')));
      return updateGates();
    });
    inputCI.click(function() {
      this.attr('text', toggle(this.attr('text')));
      return updateGates();
    });
    toggle = function(bit) {
      if (bit === '0' || bit === 0) {
        return 1;
      } else {
        return 0;
      }
    };
    updateGates = function() {
      var a, b, c, sig, thesum;
      a = inputA.attr('text');
      b = inputB.attr('text');
      c = inputCI.attr('text');
      sig = signals[a][b][c];
      xor1_gate1.attr('text', sig.xor1_1);
      xor1_gate2.attr('text', sig.xor1_2);
      xor1_gate3.attr('text', sig.xor1_3);
      xor1_gate4.attr('text', sig.xor1_4);
      xor1_gate5.attr('text', sig.xor1_5);
      xor2_gate1.attr('text', sig.xor2_1);
      xor2_gate2.attr('text', sig.xor2_2);
      xor2_gate3.attr('text', sig.xor2_3);
      xor2_gate4.attr('text', sig.xor2_4);
      xor2_gate5.attr('text', sig.xor2_5);
      and1_gate1.attr('text', sig.and1_1);
      and1_gate2.attr('text', sig.and1_2);
      and1_gate3.attr('text', sig.and1_3);
      and2_gate1.attr('text', sig.and2_1);
      and2_gate2.attr('text', sig.and2_2);
      and2_gate3.attr('text', sig.and2_3);
      or_gate1.attr('text', sig.or_1);
      or_gate2.attr('text', sig.or_2);
      or_gate3.attr('text', sig.or_3);
      thesum = parseInt(a) + parseInt(b) + parseInt(c);
      if (thesum === 3) {
        sum.attr('text', 1);
        carryOut.attr('text', 1);
      }
      if (thesum === 2) {
        sum.attr('text', 0);
        carryOut.attr('text', 1);
      }
      if (thesum === 1) {
        sum.attr('text', 1);
        carryOut.attr('text', 0);
      }
      if (thesum === 0) {
        sum.attr('text', 0);
        carryOut.attr('text', 0);
      }
      return showWires();
    };
    makeMovingLine = function(path, dashType, color, width, htmlid) {
      var i, interval, move, name;
      full_adder_transistors.push(name = fa.path(path).attr({
        'stroke-dasharray': dashType,
        'stroke-width': width,
        stroke: color
      }));
      name.node.id = htmlid;
      $('#' + htmlid).hide();
      i = 0;
      move = function() {
        $('#' + htmlid).attr('stroke-dashoffset', i--);
        if (i < -50) {
          return i = 0;
        }
      };
      return interval = window.setInterval(move, 51);
    };
    showWires = function() {
      var a, and1_1, and1_2, and1_3, and2_1, and2_2, and2_3, b, c, co_, or_1, or_2, or_3, sum_, xor1_1, xor1_2, xor1_3, xor1_4, xor1_5, xor2_1, xor2_2, xor2_3, xor2_4, xor2_5;
      a = parseInt(inputA.attr('text'));
      b = parseInt(inputB.attr('text'));
      c = parseInt(inputCI.attr('text'));
      xor1_1 = parseInt(xor1_gate1.attr('text'));
      xor1_2 = parseInt(xor1_gate2.attr('text'));
      xor1_3 = parseInt(xor1_gate3.attr('text'));
      xor1_4 = parseInt(xor1_gate4.attr('text'));
      xor1_5 = parseInt(xor1_gate5.attr('text'));
      xor2_1 = parseInt(xor2_gate1.attr('text'));
      xor2_2 = parseInt(xor2_gate2.attr('text'));
      xor2_3 = parseInt(xor2_gate3.attr('text'));
      xor2_4 = parseInt(xor2_gate4.attr('text'));
      xor2_5 = parseInt(xor2_gate5.attr('text'));
      and1_1 = and1_gate1.attr('text');
      and1_2 = and1_gate2.attr('text');
      and1_3 = and1_gate3.attr('text');
      and2_1 = and2_gate1.attr('text');
      and2_2 = and2_gate2.attr('text');
      and2_3 = and2_gate3.attr('text');
      or_1 = or_gate1.attr('text');
      or_2 = or_gate2.attr('text');
      or_3 = or_gate3.attr('text');
      sum_ = sum.attr('text');
      co_ = carryOut.attr('text');
      showWiresHelper(a, ['inputA']);
      showWiresHelper(b, ['inputB']);
      showWiresHelper(c, ['inputC']);
      showWiresHelper(c, ['inputC']);
      showWiresHelper(xor1_2, ['']);
      showWiresHelper(xor1_3, ['xor1_t3']);
      showWiresHelper(xor1_4, ['xor1_t4']);
      showWiresHelper(xor1_5 & xor1_4, ['xor1_t5']);
      showWiresHelper(xor2_1, ['xor1_out']);
      showWiresHelper(xor2_2, ['xor2_t2']);
      showWiresHelper(xor2_3, ['xor2_t3']);
      showWiresHelper(xor2_4, ['xor2_t4']);
      showWiresHelper(xor2_5 & xor2_4, ['xor2_t5']);
      showWiresHelper(and1_1 & and1_2, ['and1_t2', 'and1_out']);
      showWiresHelper(and1_3, ['and1_t3']);
      showWiresHelper(and2_1 & and2_2, ['and2_t2', 'and2_out']);
      showWiresHelper(and2_3, ['and2_t3']);
      showWiresHelper(or_3, ['or_t3']);
      showWiresHelper(co_, ['carryout']);
      return showWiresHelper(sum_, ['sum']);
    };
    showWiresHelper = function(input, correspondingWiresArray) {
      var name, _i, _j, _len, _len1, _results, _results1;
      if (input === 1 || input === '1') {
        _results = [];
        for (_i = 0, _len = correspondingWiresArray.length; _i < _len; _i++) {
          name = correspondingWiresArray[_i];
          _results.push($('#' + name).show());
        }
        return _results;
      } else {
        _results1 = [];
        for (_j = 0, _len1 = correspondingWiresArray.length; _j < _len1; _j++) {
          name = correspondingWiresArray[_j];
          _results1.push($('#' + name).hide());
        }
        return _results1;
      }
    };
    linetype = "- ";
    makeMovingLine("M82,86.5 h77 m-34,0.5 v233 h210 M194.5,52 v22 h-13.5 v31", linetype, orange, 2, "inputA");
    makeMovingLine("M82,100 h103 v-13 h2 m-49.5,13 v207.25 h197 m25,-18 v26 M194.5,52 v22 h12.75 v31 ", linetype, orange, 2, "inputB");
    makeMovingLine("M82,125 h316 v-13 h2 m-99,12 v101.5 h33 m25.25,-18 v27 m48,-158 v23 h12.5 v31", linetype, orange, 2, "inputC");
    makeMovingLine("M194.5,52 v9 h18.75 v19.25 h4 m27.5,-29 v10 h-7.5 v43", linetype, orange, 2, "xor1_t3");
    makeMovingLine("M244.75,52 v9.5 h19.5 v26 ", linetype, orange, 2, "xor1_t4");
    makeMovingLine("M244.75,52 v9.5 h19.5 v43 ", linetype, orange, 2, "xor1_t5");
    makeMovingLine("M244.75,52 v9.5 h37.5 v32.75 h87.5 v17.5 h3 m34.5,-35 v23 h-13.25 v31	m-105.25,-36 v143.25 h45", linetype, orange, 2, "xor1_out");
    makeMovingLine("M407.5,77 v22.5 h12.5 v31", linetype, orange, 2, "xor2_t2");
    makeMovingLine("M407.5,77 v9.5 h18.75 v19.25 h4 m27.5,-29 v10 h-7.5 v43", linetype, orange, 2, "xor2_t3");
    makeMovingLine("M457.75,77 v10  h19.5 v26", linetype, orange, 2, "xor2_t4");
    makeMovingLine("M457.75,77 v10  h19.5 v43", linetype, orange, 2, "xor2_t5");
    makeMovingLine("M457.75,77 v10  h187 ", linetype, orange, 2, "sum");
    makeMovingLine("M359.5,234 v17 ", linetype, orange, 2, "and1_t2");
    makeMovingLine("M359.5,208 v9 h6.5 v15 h6 M390.5,208 v43 ", linetype, orange, 2, "and1_t3");
    makeMovingLine("M390.5,208 v9.75 h142 v44.5 h15 m34.375,-32 v19 h-13.5 v33 ", linetype, orange, 2, "and1_out");
    makeMovingLine("M359.5,315 v17 ", linetype, orange, 2, "and2_t2");
    makeMovingLine("M359.5,290 v9 h6.5 v14.5 h6 M390.5,289 v43 ", linetype, orange, 2, "and2_t3");
    makeMovingLine("M390.5,290 v10 h141.5 v-25.5 h40.5 v-12.5 h2 m7.375,-32 v19 h12 v34", linetype, orange, 2, "and2_out");
    makeMovingLine("M581.875,231 v11 h19.5 v20.125 h4 m20.5,-32 v53", linetype, orange, 2, "or_t3");
    makeMovingLine("M626,230 v13 h18 ", linetype, orange, 2, "carryout");
    return $('#xor2_t3 , #xor1_t3 , #and1_t3, #and2_t3, #or_t3').show();
  });

  signals = [];

  signals[0] = [];

  signals[1] = [];

  signals[0][0] = [];

  signals[0][1] = [];

  signals[1][0] = [];

  signals[1][1] = [];

  signals[0][0][0] = {
    xor1_1: 0,
    xor1_2: 0,
    xor1_3: 1,
    xor1_4: 0,
    xor1_5: 0,
    xor2_1: 0,
    xor2_2: 0,
    xor2_3: 1,
    xor2_4: 0,
    xor2_5: 0,
    and1_1: 0,
    and1_2: 0,
    and1_3: 1,
    and2_1: 0,
    and2_2: 0,
    and2_3: 1,
    or_1: 0,
    or_2: 0,
    or_3: 1
  };

  signals[0][0][1] = {
    xor1_1: 0,
    xor1_2: 0,
    xor1_3: 1,
    xor1_4: 0,
    xor1_5: 0,
    xor2_1: 0,
    xor2_2: 1,
    xor2_3: 0,
    xor2_4: 0,
    xor2_5: 1,
    and1_1: 1,
    and1_2: 0,
    and1_3: 1,
    and2_1: 0,
    and2_2: 0,
    and2_3: 1,
    or_1: 0,
    or_2: 0,
    or_3: 1
  };

  signals[0][1][0] = {
    xor1_1: 0,
    xor1_2: 1,
    xor1_3: 0,
    xor1_4: 0,
    xor1_5: 1,
    xor2_1: 1,
    xor2_2: 0,
    xor2_3: 0,
    xor2_4: 0,
    xor2_5: 1,
    and1_1: 0,
    and1_2: 1,
    and1_3: 1,
    and2_1: 1,
    and2_2: 0,
    and2_3: 1,
    or_1: 0,
    or_2: 0,
    or_3: 1
  };

  signals[0][1][1] = {
    xor1_1: 0,
    xor1_2: 1,
    xor1_3: 0,
    xor1_4: 0,
    xor1_5: 1,
    xor2_1: 1,
    xor2_2: 1,
    xor2_3: 0,
    xor2_4: 1,
    xor2_5: 1,
    and1_1: 1,
    and1_2: 1,
    and1_3: 0,
    and2_1: 1,
    and2_2: 0,
    and2_3: 1,
    or_1: 1,
    or_2: 0,
    or_3: 0
  };

  signals[1][0][0] = {
    xor1_1: 1,
    xor1_2: 0,
    xor1_3: 0,
    xor1_4: 1,
    xor1_5: 0,
    xor2_1: 1,
    xor2_2: 0,
    xor2_3: 0,
    xor2_4: 1,
    xor2_5: 0,
    and1_1: 0,
    and1_2: 1,
    and1_3: 1,
    and2_1: 0,
    and2_2: 1,
    and2_3: 1,
    or_1: 0,
    or_2: 0,
    or_3: 1
  };

  signals[1][0][1] = {
    xor1_1: 1,
    xor1_2: 0,
    xor1_3: 0,
    xor1_4: 1,
    xor1_5: 0,
    xor2_1: 1,
    xor2_2: 1,
    xor2_3: 0,
    xor2_4: 1,
    xor2_5: 1,
    and1_1: 1,
    and1_2: 1,
    and1_3: 0,
    and2_1: 0,
    and2_2: 1,
    and2_3: 1,
    or_1: 1,
    or_2: 0,
    or_3: 0
  };

  signals[1][1][0] = {
    xor1_1: 1,
    xor1_2: 1,
    xor1_3: 0,
    xor1_4: 1,
    xor1_5: 1,
    xor2_1: 0,
    xor2_2: 0,
    xor2_3: 1,
    xor2_4: 0,
    xor2_5: 0,
    and1_1: 0,
    and1_2: 0,
    and1_3: 1,
    and2_1: 1,
    and2_2: 1,
    and2_3: 0,
    or_1: 0,
    or_2: 1,
    or_3: 0
  };

  signals[1][1][1] = {
    xor1_1: 1,
    xor1_2: 1,
    xor1_3: 0,
    xor1_4: 1,
    xor1_5: 1,
    xor2_1: 0,
    xor2_2: 1,
    xor2_3: 0,
    xor2_4: 0,
    xor2_5: 1,
    and1_1: 1,
    and1_2: 0,
    and1_3: 1,
    and2_1: 1,
    and2_2: 1,
    and2_3: 0,
    or_1: 0,
    or_2: 1,
    or_3: 0
  };

}).call(this);
