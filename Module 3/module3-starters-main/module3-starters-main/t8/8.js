'use strict';

document.addEventListener("DOMContentLoaded", function () {
    var num1Input = document.getElementById('num1');
    var num2Input = document.getElementById('num2');
    var operationSelect = document.getElementById('operation');
    var calculateButton = document.getElementById('start');
    var resultParagraph = document.getElementById('result');

    calculateButton.addEventListener('click', function () {
        //parsing the input values as integers
        var num1 = parseInt(num1Input.value);
        var num2 = parseInt(num2Input.value);

        //checking if the input values are valid numbers or not
        if (isNaN(num1) || isNaN(num2)) {
            resultParagraph.textContent = 'Please enter valid numbers';
            return;
        }

        //getting the selected operation from the dropdown list
        var selectedOperation = operationSelect.value;

        //performing the operation selected by the user and displaying the result
        switch (selectedOperation) {
            case 'add':
                resultParagraph.textContent = 'Result: ' + (num1 + num2);
                break;
            case 'sub':
                resultParagraph.textContent = 'Result: ' + (num1 - num2);
                break;
            case 'multi':
                resultParagraph.textContent = 'Result: ' + (num1 * num2);
                break;
            case 'div':
                //checking if the second number is not zero before division
                if (num2 !== 0) {
                    resultParagraph.textContent = 'Result: ' + (num1 / num2);
                } else {
                    resultParagraph.textContent = 'Cannot divide by zero';
                }
                break;
            default:
                resultParagraph.textContent = 'Invalid operation';
        }
    });
});
