let calcOutput = '0';

function addToOutput(char) {
    if (calcOutput == '0') {
        calcOutput = char;
    } else {
        calcOutput += char;
    }
    document.getElementById('calcOutput').value = calcOutput
}

function operate(operator, num1, num2) {
    if (operator == "add") {
        add(num1, num2)
    } else if (operator == 'subtract') {
        subtract(num1, num2)
    } else if (operator == "multiply") {
        multiply(num1, num2)
    } else if (operator == "divide") {
        divide(num1, num2)
    }
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}