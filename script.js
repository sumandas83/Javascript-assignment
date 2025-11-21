// Greeting button functionality
document.getElementById("greetBtn").addEventListener("click", function () {
    let name = document.getElementById("username").value;
    let header = document.getElementById("greeting");

    if (name.trim() !== "") {
        header.textContent = "Hello, " + name;
    } else {
        alert("Please enter your name!");
    }
});

// Changing box colors when clicked
const boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
    box.addEventListener("click", function () {
        const selectedColor = this.getAttribute("color");

        // Apply background color
        this.style.backgroundColor = selectedColor;

        // Text color logic
        if (selectedColor === "yellow") {
            this.style.color = "black";   
        } else {
            this.style.color = "white";   
        }
    });
});

