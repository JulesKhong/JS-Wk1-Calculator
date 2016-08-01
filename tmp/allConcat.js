var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#calculator-form').submit(function(event) {
    event.preventDefault();

    var number1 = parseInt($('#number1').val());
    var number2 = parseInt($('#number2').val());
    var operator = $('#arithmetic').val();

    var simpleCalculator = new Calculator('hot pink');
    var total;
    if (operator === "add") {
      total = simpleCalculator.addition(number1, number2);
    } else if ( operator === 'subtract') {
      total = simpleCalculator.subtraction(number1, number2);
    } else if ( operator === 'multiply') {
      total = simpleCalculator.multiplication(number1, number2);
    } else if ( operator === 'divide') {
      total = simpleCalculator.division(number1, number2);
    } else {
      total;
    }
      $('#solution').append("<li>" + total + "</li>");
  });
});

var Calculator =  require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator('hot pink');
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
        $('#solution').append("<li>" + element + "</li>");
    });
  });
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});
