// First, wait for the HTML content to be fully loaded!
document.addEventListener("DOMContentLoaded", function () {
    //To get the element with id "target"
    var targetElement = document.getElementById("target");

    //To create the list items
    var listItem1 = document.createElement("li");
    listItem1.textContent = "First item";

    var listItem2 = document.createElement("li");
    listItem2.textContent = "Second item";
    listItem2.classList.add("my-item"); // Adding class "my-item" to the second list item (given in question)

    var listItem3 = document.createElement("li");
    listItem3.textContent = "Third item";

    // To append the list items to the element with id "target"
    targetElement.appendChild(listItem1);
    targetElement.appendChild(listItem2);
    targetElement.appendChild(listItem3);
});
