'use strict';

//first, wait for the HTML content to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    //to get the element with id "target"
    var targetElement = document.getElementById("target");

    //array
    const students = [
        {
            name: 'John',
            id: '2345768',
        },
        {
            name: 'Paul',
            id: '2134657',
        },
        {
            name: 'Jones',
            id: '5423679',
        },
    ];

    //looping through the students array
    for (var i = 0; i < students.length; i++) {
        //creating <option> element
        var optionElement = document.createElement("option");

        //to set value and text content for the <option> element
        optionElement.value = students[i].id;
        optionElement.textContent = students[i].name;

        //appending the <option> element to the select element
        targetElement.appendChild(optionElement);
    }
});
