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
let result = null;
let currentValue = '';
let previousOperator = null;
let firstOperand = '';
let secondOperand = '';
let oper = '';



function operate(operator, num1, num2) {
    
    if (operator == "+") {
        result = add(num1, num2);
    }
    else if (operator == "-") {
        result = subtract(num1, num2);
    } else if (operator == "*") {
        result = multiply(num1, num2);
    } else if (operator == "/") {
        result = divide(num1, num2);
    } else {
        result = "Invalid operator";
    }
    return result
}

//Pressing number button will display in 1st or 2nd operand. Added a check to see if a decimal already exists
// in the number. If so, it will not allow it to be added. If you press a new number after selecting the equal button, the new 
// number will replace the result as the firstOperand.
const numButtons = document.querySelectorAll('.number-buttons');
numButtons.forEach((button => {
    button.addEventListener('click', () => {
    let buttonContent = button.innerText;
        if (previousOperator == null) {
            if (buttonContent.toString() == "." && (firstOperand % 1 == 0)) {
                firstOperand += buttonContent;
                display.textContent = firstOperand;
        }
            else if (buttonContent.toString() != "." && display.textContent == result) {
                firstOperand = buttonContent;
                display.textContent = firstOperand;
            }
            else if (buttonContent.toString() != ".") {
                firstOperand += buttonContent;
                display.textContent = firstOperand;
            }
    }
        else {
            if (buttonContent.toString() == "." && (secondOperand % 1 == 0)) {
                secondOperand += buttonContent;
                display.textContent = secondOperand;
            }
            else if (buttonContent.toString() != ".") {
            secondOperand += buttonContent;
            display.textContent = secondOperand;
            }
        }
}
)}))


// Should handle a general "1 + 1 = 2" calculation as well as if someone want to keep
// doing calculations like "1 + 2 - 1". 
const operButtons = document.querySelectorAll(".operator-buttons");
operButtons.forEach((button => {
    button.addEventListener('click', () => {
        let buttonContent = button.innerText;
            if (previousOperator != null) {
                num1 = parseFloat(firstOperand);
                num2 = parseFloat(secondOperand);
                operator = previousOperator;
                result = operate(operator, num1, num2);
                display.textContent = result;
                firstOperand = result.toString();
                secondOperand = '';
                previousOperator = button.innerText;
            }
            else {
        previousOperator = button.innerText;
        display.textContent = buttonContent;
            }
        
    })
}))

const display = document.querySelector(".display");
display.textContent = 0;
console.log(display);
// function updateDisplay() {
//     display.textContent = numButtons.innerHTML;
// }

// function handleNumberButtonClick(button) {
//     if (oper === '') {
//         firstOperand += button.innerText;
//         updateDisplay(firstOperand);
//     } else {
//         secondOperand += button.innerText;
//         updateDisplay(secondOperand);
//     }
// }

// function handleOperatorButtonClick(button) {
//     oper = button.innerText;
//     updateDisplay(oper);
// }

const equal = document.querySelector(".equal-button");
equal.addEventListener('click', () => {
    // operate(previousOperator, parseFloat(firstOperand), parseFloat(secondOperand));
    num1 = parseFloat(firstOperand);
    num2 = parseFloat(secondOperand);
    operator = previousOperator;
    result = operate(operator, num1, num2);
    display.textContent = result;
    firstOperand = result.toString();
    secondOperand = '';
    previousOperator = null;
    console.log(result);
    console.log(previousOperator);
    console.log(firstOperand);
    console.log(secondOperand);
    
})

// function handleEqualButtonClick() {
//     console.log('test');
//     num1 = firstOperand;
//     num2 = secondOperand;
//     operator = str(previousOperator);
//     result = operate(operator, num1, num2);
//     console.log(result);

// }

// clear variables & start fresh
const clear = document.querySelector(".clear-button")
clear.addEventListener('click', () => {
    firstOperand = '';
    secondOperand = '';
    previousOperator = null;
    display.textContent = 0;
})


//Adding or removing negative sign to current number displaying
const plusMinus = document.querySelector(".plus-minus-button");
plusMinus.addEventListener('click', () => {
    if (display.textContent.toString() == firstOperand.toString()) {
        firstOperand *= -1
        display.textContent = firstOperand;
        console.log(firstOperand)
    }
    else {
        secondOperand *= -1
        display.textContent = secondOperand;
        console.log(secondOperand)
    }})

const percentButton = document.querySelector(".percent-button");
percentButton.addEventListener('click', () => {
    if (display.textContent.toString() == firstOperand.toString()) {
        firstOperand *= 0.01
        display.textContent = firstOperand;
        console.log(firstOperand)
    }
    else {
        secondOperand *= 0.01
        display.textContent = secondOperand;
        console.log(secondOperand)
    }})
