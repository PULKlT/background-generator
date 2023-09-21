var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var rand = document.getElementById("random");

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

function generateRandomColor() {
    // Get a random number between 0 and 16777215.
    var randomNumber = Math.floor(Math.random() * 16777215);
    // Convert the random number to a hexadecimal string.
    var hexString = randomNumber.toString(16);
    // Pad the hexadecimal string with zeros to make it 6 characters long.
    return '#' + hexString.padStart(6, '0');
  }

function randomize() {
    var c1 = generateRandomColor();
    var c2 = generateRandomColor();
    body.style.background = "linear-gradient(to right, " + c1 + ", " + c2 + ")";
    css.textContent = body.style.background + ";";
}



body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
css.textContent = body.style.background + ";";
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
rand.addEventListener("click", randomize);