const display = document.getElementById('display');
let isError = false; // Flag to track if error is active

function appendtoDisplay(input) {
    if (isError) return; // Block all input after error
    display.value += input;
}

function cleardisplay() {
    display.value = "";
    isError = false; // Reset error state
}

function calculate() {
    try {
        display.value = eval(display.value);
        isError = false;
    } catch (error) {
        display.value = "Error";
        isError = true;
    }
}

// Optional: Keyboard support
// document.addEventListener('keydown', (e) => {
//     if (isError) return; // Don't accept keyboard input during error

//     if (/\d|\+|\-|\*|\/|\./.test(e.key)) {
//         appendtoDisplay(e.key);
//     } else if (e.key === 'Enter') {
//         calculate();
//     } else if (e.key === 'Backspace') {
//         display.value = display.value.slice(0, -1);
//     } else if (e.key === 'Escape') {
//         cleardisplay(); // lowercase, same as your button
//     }
// });
