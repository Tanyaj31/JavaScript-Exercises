'use strict';

document.addEventListener("DOMContentLoaded", function () {
    var calculationInput = document.getElementById('calculation');
    var calculateButton = document.getElementById('start');
    var resultParagraph = document.getElementById('result');

    calculateButton.addEventListener('click', function () {
        //getting the input from the user
        var userInput = calculationInput.value;

        //using mathematical expressions to match the inputs
        var pattern = /^(\d+)\s*([-+*/])\s*(\d+)$/;

        //checking if the input matches the pattern
        if (pattern.test(userInput)) {
            //extracting the matched values using RegExp.exec
            var matches = pattern.exec(userInput);

            //extraction
            var num1 = parseInt(matches[1]);
            var operator = matches[2];
            var num2 = parseInt(matches[3]);

            //calculation
            switch (operator) {
                case '+':
                    resultParagraph.textContent = 'Result: ' + (num1 + num2);
                    break;
                case '-':
                    resultParagraph.textContent = 'Result: ' + (num1 - num2);
                    break;
                case '*':
                    resultParagraph.textContent = 'Result: ' + (num1 * num2);
                    break;
                case '/':
                    //checking if the second number is not zero before division
                    if (num2 !== 0) {
                        resultParagraph.textContent = 'Result: ' + Math.floor(num1 / num2);
                    } else {
                        resultParagraph.textContent = 'Cannot divide by zero';
                    }
                    break;
                default:
                    resultParagraph.textContent = 'Invalid operator';
            }
        } else {
            resultParagraph.textContent = 'Invalid input. Please enter a valid calculation.';
        }
    });
});
