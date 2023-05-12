function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return (a * b);
}

function divide(a, b) {
    if (b == 0) {
        alert("Are you nuts? You can't divide by 0!")
    }
    else {
        return (a / b);
    }
}

let num1
let num2
let operator
let result
let currentValue = '';
let previousOperator = null;
let firstOperand = '';
let secondOperand = '';


function operate(operator, num1, num2) {
    
    if (operator == "add") {
        result = add(num1, num2);
    }
    if (operator == "subtract") {
        result = subtract(num1, num2);
    }if (operator == "multiply") {
        result = multiply(num1, num2);
    }if (operator == "divide") {
        result = divide(num1, num2);
    }
    return result;
}

const numButtons = document.querySelectorAll('.number-buttons');
numButtons.forEach((button => {
    button.addEventListener('click', () => {
    let buttonContent = button.innerText;
    if (previousOperator == null) {
        currentValue += buttonContent;
    }
    else {
        currentValue = buttonContent;
        previousOperator = null;
    }
    display.textContent = currentValue;
})
}))

const operButtons = document.querySelectorAll(".operator-buttons");
operButtons.forEach((button => {
    button.addEventListener('click', () => {
        let buttonContent = button.innerText;
        previousOperator = button.innerText;
        display.textContent = buttonContent;
    })
}))

const display = document.querySelector(".display");
console.log(display);
function updateDisplay() {
    display.textContent = numButtons.innerHTML;
}

