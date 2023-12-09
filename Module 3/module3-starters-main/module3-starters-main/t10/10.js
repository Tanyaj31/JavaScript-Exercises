'use strict';

document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById('source');
    var targetParagraph = document.getElementById('target');

    form.addEventListener('submit', function (event) {
        //preventing the default form submission
        event.preventDefault();

        //using querySelector with attribute selectors
        var firstNameInput = form.querySelector('input[name="firstname"]');
        var lastNameInput = form.querySelector('input[name="lastname"]');

        //getting the values
        var firstName = firstNameInput.value;
        var lastName = lastNameInput.value;

        //displaying the result
        targetParagraph.textContent = 'Your name is ' + firstName + ' ' + lastName;
    });
});
