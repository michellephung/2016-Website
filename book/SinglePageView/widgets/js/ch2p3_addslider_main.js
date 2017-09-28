// Generated by CoffeeScript 1.3.1
(function() {
  var arrowColor, back_button_listener, checkNumber, format, forward_button_listener, hideAllShowOne, highlightColor, highlightStep, max, min, updateForwardBackButtons;

  min = 1;
  max = 1;
  highlightColor = "#2196f3";
  arrowColor = "#ff9800";

  window.onload = function() {
    max = $('#maxNumber').data('max_number');
    updateForwardBackButtons();
    forward_button_listener();
    return back_button_listener();
  };

  forward_button_listener = function() {
    return $('#forward').click(function() {
      var next;
      next = $('.addShell:visible').attr('id');
      next = next.slice(-2);
      next = parseInt(next, 10);
      next++;
      next = format(next);
      if (parseInt(next, 10) > max) {
        hideAllShowOne('step' + format(min));
        highlightStep(min);
      } else {
        hideAllShowOne('step' + next);
        highlightStep(parseInt(next, 10));
      }
      return updateForwardBackButtons();
    });
  };

  back_button_listener = function() {
    return $('#back').click(function() {
      var prev;
      prev = $('.addShell:visible').attr('id');
      prev = prev.slice(-2);
      prev = parseInt(prev, 10);
      prev--;
      if (parseInt(prev, 10) < min) {
        hideAllShowOne('step' + format(max));
        highlightStep(max);
      } else {
        hideAllShowOne('step' + format(prev));
        highlightStep(prev);
      }
      return updateForwardBackButtons();
    });
  };

  updateForwardBackButtons = function() {
    var current, next, prev;
    current = parseInt($('.ex.circleNumber:visible').text(), 10);
    next = current + 1;
    prev = current - 1;
    if (prev === 0) {
      prev = '#';
      $('#prev_circle').addClass('circleGray');
    } else {
      $('#prev_circle').removeClass('circleGray');
    }
    if (next > max) {
      next = "#";
      $('#next_circle').addClass('circleGray');
    } else {
      $('#next_circle').removeClass('circleGray');
    }
    $('#back_txt').text(prev);
    $('#back_txt').html('&#8676;');
    $('#forward_txt').text(next);
    return $('#forward_txt').html('&#8677;');
  };

  hideAllShowOne = function(theone) {
    $('.addShell').css('display', 'none');
    return $('#' + theone).css('display', 'inline-block');
  };

  checkNumber = function(number) {
    if (number < min) {
      number = min;
    }
    if (number > max) {
      number = max;
    }
    return number;
  };

  format = function(numero) {
    if (numero <= 9) {
      return "0" + numero;
    } else {
      return numero;
    }
  };

  highlightStep = function(current) {
    $('.navigation span').css('color', '#000');
    $('#forward_txt,#back_txt').css('color', arrowColor);
    return $('.nav-' + format(current)).css('color', highlightColor);
  };

}).call(this);
