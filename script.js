let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value);  // Evaluate the expression
    } catch (error) {
        display.value = 'Error';  // Show 'Error' if something goes wrong
    }
}
