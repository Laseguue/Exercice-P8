var button = document.getElementById("myButton");

var paragraph = document.createElement("p");

button.addEventListener("click", function() {
    paragraph.textContent = "Bonjour, vous avez cliqué sur le bouton !";
    document.body.appendChild(paragraph);
});