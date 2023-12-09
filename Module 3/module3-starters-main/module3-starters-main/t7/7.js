'use strict';

document.addEventListener("DOMContentLoaded", function () {
    var triggerElement = document.getElementById('trigger');
    var targetImageElement = document.getElementById('target');

    // Event listener for mouse is over
    triggerElement.addEventListener('mouseover', function () {
        targetImageElement.src = 'img/picB.jpg';
    });

    // Event listener for mouse off
    triggerElement.addEventListener('mouseout', function () {
        targetImageElement.src = 'img/picA.jpg';
    });
});
