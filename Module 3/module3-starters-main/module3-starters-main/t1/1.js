// Wait for the HTML content to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get the element with id "target"
    var targetElement = document.getElementById("target");

    // Add HTML code using innerHTML property
    targetElement.innerHTML = `
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
    `;

    // Add class "my-list" to the element with id "target"
    targetElement.classList.add("my-list");
});