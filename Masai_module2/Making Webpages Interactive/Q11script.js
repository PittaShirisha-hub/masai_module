/* 1. Select <h1> by id and change text */
let heading = document.getElementById("mainHeading");
heading.textContent = "Welcome to the DOM World!";

/* 2. Select all <p> elements and change their text color */
let paragraphs = document.getElementsByTagName("p");

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "blue";
}

/* 3. Select the first <div> with class "container" */
let containerDiv = document.querySelector(".container");
containerDiv.style.backgroundColor = "yellow";
