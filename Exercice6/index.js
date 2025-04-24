const display = document.getElementById("display");

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    if (display.value === "") {
        display.value = "";
        return;
    }
    if (display.value.match(/\d+\s*\/\s*0$/)) {
        display.value = "Division by zero is not allowed";
        return;
    }
    try {
        const result = eval(display.value);
        if (isNaN(result) || !isFinite(result)) {
            display.value = "Erreur";
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = "Erreur";
    }
}