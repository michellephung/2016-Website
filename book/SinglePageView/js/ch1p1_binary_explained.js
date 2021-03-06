// Generated by CoffeeScript 1.3.1
(function() {

  var bit0equation, bit0sum, bit1equation, bit1sum, bit2equation, bit2sum, bit3equation, bit3sum, black, interactive, decimal, fontfamily, gray, decimal_eq , totalsum, white;

  black = '#3a3939';
  white = "#fff";
  gray = '#808080';
  interactive = '#ff9800';
  decimal_eq  = '#2196f3'; //horizontal equation
  fontfamily = 'font-family: "Source Sans Pro";';

  this.bit0text = null;
  this.bit1text = null;
  this.bit2text = null;
  this.bit3text = null;
  bit0equation = null;
  bit1equation = null;
  bit2equation = null;
  bit3equation = null;
  bit0sum = null;
  bit1sum = null;
  bit2sum = null;
  bit3sum = null;
  decimal = null;
  totalsum = null;

  window.onload = function() {
    var isFirefox = navigator.sayswho()==='Firefox';
   
    var bit0Hline, bit0Vline, bit0down_arrow, bit0superscript, bit0up_arrow, bit1Hline, bit1Vline, bit1down_arrow, bit1superscript, bit1up_arrow, bit2Hline, bit2Vline, bit2down_arrow, bit2superscript, bit2up_arrow, bit3Hline, bit3Vline, bit3down_arrow, bit3superscript, bit3up_arrow, bits_explained, buttonH, buttonW, clickingBit, corner, down_triangle_path, equal_sign, fontsize, plus, toggle, up_triangle_path;
    bits_explained = new Raphael("binaryexplained-widget-ralph", 600, 340);
    buttonW = 80;
    buttonH = 80;
    corner = 5;
    fontsize = "60px";
    up_triangle_path = "h10 l-5,-10 l -5,10z";
    down_triangle_path = "h10 l-5,10 l -5,-10z";
    this.bit0text = bits_explained.text(80, 60, "0").attr({
      'font-size': fontsize,
      'fill': interactive,
      'font-family': fontfamily
    });


    bit0up_arrow = bits_explained.path("M78,100" + up_triangle_path).attr({
      'fill': gray,
      'stroke': gray
    });
    bit0down_arrow = bits_explained.path("M78,144" + down_triangle_path).attr({
      'fill': gray,
      'stroke': gray
    });
    bit0Vline = bits_explained.rect(82, 94, 2, 50).attr({
      'fill': gray,
      'stroke': gray
    });
    this.bit0equation = bits_explained.text(85, 164, "2 x 0 = 0").attr({
      'fill': gray,
      'font-size': '20px',
      'font-family': fontfamily
    });

    var bit0superscript_x = 56;
    if(isFirefox) bit0superscript_x += 4;

    bit0superscript = bits_explained.text(bit0superscript_x, 158, "3").attr({
      'fill': gray,
      'font-size': '12px',
      'font-family': fontfamily
    });
    bit0Hline = bits_explained.path("M140,163 h275 v-32").attr({
      'stroke': decimal_eq ,
      'stroke-width': '2px'
    });



    this.bit1text = bits_explained.text(170, 60, "1").attr({
      'font-size': fontsize,
      'fill': interactive,
      'font-family': fontfamily
    });
    bit1up_arrow = bits_explained.path("M166,100" + up_triangle_path).attr({
      'fill': gray,
      'stroke': gray
    });
    bit1down_arrow = bits_explained.path("M166,194" + down_triangle_path).attr({
      'fill': gray,
      'stroke': gray
    });
    bit1Vline = bits_explained.rect(170, 94, 2, 100).attr({
      'fill': gray,
      'stroke': gray
    });
    this.bit1equation = bits_explained.text(171, 214, "2 x 1 = 4").attr({
      'fill': gray,
      'font-size': '20px',
      'font-family': fontfamily
    });

    var bit1superscript_x = 142;
    if(isFirefox) bit1superscript_x += 4;

    bit1superscript = bits_explained.text(bit1superscript_x, 206, "2").attr({
      'fill': gray,
      'font-size': '12px',
      'font-family': fontfamily
    });
    bit1Hline = bits_explained.path("M225,213 h220 v-80").attr({
      'stroke': decimal_eq ,
      'stroke-width': '2px'
    });


    this.bit2text = bits_explained.text(260, 60, "1").attr({
      'font-size': fontsize,
      'fill': interactive,
      'font-family': fontfamily
    });
    bit2up_arrow = bits_explained.path("M258,100" + up_triangle_path).attr({
      'fill': gray,
      'stroke': gray
    });
    bit2down_arrow = bits_explained.path("M258,244" + down_triangle_path).attr({
      'fill': gray,
      'stroke': gray
    });
    bit2Vline = bits_explained.rect(262, 94, 2, 150).attr({
      'fill': gray,
      'stroke': gray
    });
    this.bit2equation = bits_explained.text(265, 264, "2 x 1 = 2").attr({
      'fill': gray,
      'font-size': '20px',
      'font-family': fontfamily
    });

    var bit2superscript_x = 236;
    if(isFirefox) bit2superscript_x += 4;

    bit2superscript = bits_explained.text(bit2superscript_x, 258, "1").attr({
      'fill': gray,
      'font-size': '12px',
      'font-family': fontfamily
    });
    bit2Hline = bits_explained.path("M315,265 h159 v-131").attr({
      'stroke': decimal_eq ,
      'stroke-width': '2px'
    });


    this.bit3text = bits_explained.text(350, 60, "0").attr({
      'font-size': fontsize,
      'fill': interactive,
      'font-family': fontfamily
    });
    bit3up_arrow = bits_explained.path("M348,100" + up_triangle_path).attr({
      'fill': gray,
      'stroke': gray
    });
    bit3down_arrow = bits_explained.path("M348,294" + down_triangle_path).attr({
      'fill': gray,
      'stroke': gray
    });
    bit3Vline = bits_explained.rect(352, 94, 2, 200).attr({
      'fill': gray,
      'stroke': gray
    });
    this.bit3equation = bits_explained.text(354, 315, "2 x 0 = 0").attr({
      'fill': gray,
      'font-size': '20px',
      'font-family': fontfamily
    });

    var bit3superscript_x = 325;
    if(isFirefox) bit3superscript_x += 4;

    bit3superscript = bits_explained.text(bit3superscript_x, 308, "0").attr({
      'fill': gray,
      'font-size': '12px',
      'font-family': fontfamily
    });
    bit3Hline = bits_explained.path("M405,315 h97 v-181").attr({
      'stroke': decimal_eq ,
      'stroke-width': '2px'
    });


    equal_sign = bits_explained.text(420, 60, "=").attr({
      'font-size': fontsize,
      'fill': black,
      'font-family': fontfamily
    });
    decimal = bits_explained.text(490, 60, "6").attr({
      'font-size': fontsize,
      'fill': black,
      'font-family': fontfamily
    });

    this.totalsum = bits_explained.text(528, 120, " 6").attr({
      'font-size': '18px',
      'fill': decimal_eq ,
      'text-anchor': 'start',
      'font-family': fontfamily
    });

    this.bit3sum = bits_explained.text(498, 120, "0").attr({
      'font-size': '18px',
      'fill': decimal_eq ,
      'text-anchor': 'start',
      'font-family': fontfamily
    });
    this.bit2sum = bits_explained.text(470, 120, "2").attr({
      'font-size': '18px',
      'fill': decimal_eq ,
      'text-anchor': 'start',
      'font-family': fontfamily
    });
    this.bit1sum = bits_explained.text(440, 120, "4").attr({
      'font-size': '18px',
      'fill': decimal_eq ,
      'text-anchor': 'start',
      'font-family': fontfamily
    });
    this.bit0sum = bits_explained.text(410, 120, "0").attr({
      'font-size': '18px',
      'fill': decimal_eq ,
      'text-anchor': 'start',
      'font-family': fontfamily
    });




    if (isFirefox) {
      plus = bits_explained.text(425, 120, "+ \u00a0\u00a0+ \u00a0\u00a0\u00a0+\u00a0\u00a0 \u00a0 =\u00a0 ").attr({
        'font-size': '18px',
        'fill': decimal_eq ,
        'text-anchor': 'start',
        'font-family': fontfamily
      });
    } else {
      plus = bits_explained.text(425, 120, "+ \u00a0\u00a0+  \u00a0\u00a0+\u00a0\u00a0 =").attr({
        'font-size': '18px',
        'fill': decimal_eq ,
        'text-anchor': 'start',
        'font-family': fontfamily
      });
    }
    

    clickingBit = function(bit, equation, exponent, individual_sum) {
      var this_;
      this_ = this;
      return bit.click(function() {
        var eq, first_sum, neweq, one, sum, three, two, z, zero;
        z = toggle(bit.attr('text'));
        bit.attr('text', z);
        eq = equation.attr('text');
        first_sum = Math.pow(2, exponent) * z;
        neweq = "2 x " + z + " = " + first_sum;
        equation.attr('text', neweq);
        individual_sum.attr('text', first_sum);
        zero = parseInt(this_.bit0sum.attr('text'), 10);
        one = parseInt(this_.bit1sum.attr('text'), 10);
        two = parseInt(this_.bit2sum.attr('text'), 10);
        three = parseInt(this_.bit3sum.attr('text'), 10);
        sum = zero + one + two + three;
        this_.totalsum.attr('text', sum);
        decimal.attr('text', sum);
        $('#equalVariable_mainExplained').val(sum);
        updateWidget2(sum)
        return $('#equalVariable_mainExplained').trigger('change');
      });
    };
    clickingBit(bit0text, this.bit0equation, 3, this.bit0sum);
    clickingBit(bit1text, this.bit1equation, 2, this.bit1sum);
    clickingBit(bit2text, this.bit2equation, 1, this.bit2sum);
    clickingBit(bit3text, this.bit3equation, 0, this.bit3sum);

    return toggle = function(bit) {
      if (bit === '0' || bit === 0) {
        return 1;
      }
      if (bit === '1' || bit === 1) {
        return 0;
      }
    };

  };

  this.updateFromEqualTrigger = function() {
    var binary, binary_places, decimal_from_outside, one, sum, three, two, zero;
    $('#w2_decimalnumber').val($('#w2_decimalnumber').val());
    decimal_from_outside = parseInt($('#w2_decimalnumber').text(), 10);

    binary = decimal_from_outside.toString(2);
    if (parseInt(binary, 2) < 0 || parseInt(binary, 2) > 15) {
      return 0;
    }
    binary_places = binary.length;
    if (binary_places === 3) {
      binary = "0" + binary;
    }
    if (binary_places === 2) {
      binary = "00" + binary;
    }
    if (binary_places === 1) {
      binary = "000" + binary;
    }
    this.bit0text.attr('text', binary[0]);
    this.bit1text.attr('text', binary[1]);
    this.bit2text.attr('text', binary[2]);
    this.bit3text.attr('text', binary[3]);
    decimal.attr('text', decimal_from_outside);
    if (binary[0] === '0') {
      this.bit0equation.attr('text', "2 x 0 = 0");
      this.bit0sum.attr('text', 0);
    } else {
      this.bit0equation.attr('text', "2 x 1 = 8");
      this.bit0sum.attr('text', 8);
    }
    if (binary[1] === '0') {
      this.bit1equation.attr('text', "2 x 0 = 0");
      this.bit1sum.attr('text', 0);
    } else {
      this.bit1equation.attr('text', "2 x 1 = 4");
      this.bit1sum.attr('text', 4);
    }
    if (binary[2] === '0') {
      this.bit2equation.attr('text', "2 x 0 = 0");
      this.bit2sum.attr('text', 0);
    } else {
      this.bit2equation.attr('text', "2 x 1 = 2");
      this.bit2sum.attr('text', 2);
    }
    if (binary[3] === '0') {
      this.bit3equation.attr('text', "2 x 0 = 0");
      this.bit3sum.attr('text', 0);
    } else {
      this.bit3equation.attr('text', "2 x 1 = 1");
      this.bit3sum.attr('text', 1);
    }
    zero = parseInt(this.bit0sum.attr('text'), 10);
    one = parseInt(this.bit1sum.attr('text'), 10);
    two = parseInt(this.bit2sum.attr('text'), 10);
    three = parseInt(this.bit3sum.attr('text'), 10);
    sum = zero + one + two + three;
    return this.totalsum.attr('text', sum);
 
  };

  var updateWidget2 = function(sum){
    //update above equation (w2)
    $('#w2_binarynumber').text(sum.toString(2));
    $('#w2_decimalnumber').text(sum.toString(10));
  };

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

}).call(this);
