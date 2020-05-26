let output = '0';
let num1 = Number;
let num2 = Number;
let op = '';
let result = 0;

function addToOutput(char) {
    if (output.includes(' ')) {output = '0'}

    if (output == '0') {
        output = char;
    } else {
        output += char;
    }
    document.getElementById('calcOutput').value = output;
}

function assignOperator(operator) {
    if (typeof(num1) == 'function') {
        num1 = parseFloat(output);
    } else if (typeof(num2) == 'function') {
        operate(op, num1, num2);
    }
    output += ' ' + operator;
    document.getElementById('calcOutput').value = output;
    op = operator;
}

function operate(operator, num1, num2) {
    // TODO: Output shows 'num1 op num2 = result'

    num2 = parseFloat(output);
    if (operator == "+") {
        add(num1, num2);
    } else if (operator == '-') {
        subtract(num1, num2);
    } else if (operator == "*") {
        multiply(num1, num2);
    } else if (operator == "/") {
        divide(num1, num2);
    }
    
    output = result.toString()
    document.getElementById('calcOutput').value = output;
}

function add(num1, num2) {
    result = num1 + num2;
}

function subtract(num1, num2) {
    result = num1 - num2;
}

function multiply(num1, num2) {
    result = num1 * num2;
}

function divide(num1, num2) {
    result = num1 / num2;
}