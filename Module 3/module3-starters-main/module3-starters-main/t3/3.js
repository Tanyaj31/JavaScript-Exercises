'use strict';

// First, wait for the HTML content to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    //To get the element with id "target"
    var targetElement = document.getElementById("target");

    //Array
    const names = ['John', 'Paul', 'Jones'];

    //Empty string to store the HTML content
    var htmlContent = '';

    //To loop through the array and create <li> elements
    for (var i = 0; i < names.length; i++) {
        htmlContent += '<li>' + names[i] + '</li>';
    }

    //To add HTML code to the element with id "target" using innerHTML (as given)
    targetElement.innerHTML = htmlContent;
});
