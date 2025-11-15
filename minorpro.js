// selecting display
let display = document.getElementById("display");
let input = "";

// function to handle button press
function press(value) {
    if (input == "0" && value != ".") {
        input = "";
    }
    input += value;
    display.innerText = input;
}

// Clear display
function clearDisplay() {
    input = "0";
    display.innerText = input;
}

// Square function
function square() {
    if (input !== "") {
        input = String(eval(input) ** 2);
        display.innerText = input;
    }
}

// Calculate expression
function calculate() {
    try {
        input = String(eval(input));
        display.innerText = input;
    } catch (e) {
        display.innerText = "Error";
    }
}
