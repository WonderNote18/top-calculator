let output = '0';
let num1 = Number;
let num2 = Number;
let op = '';
let result = 0;
let divByZero = false;


function updateOutputText(status) {
    document.getElementById('calcOutput').className = 'calcText ' + status;
    if (status == 'normal') {
        document.getElementById('calcOutput').value = output;
    } else if (status == 'operator') {
        document.getElementById('calcOutput').value = output + ' ' + op;
    } else if ((status == 'resultPositive') || (status == 'resultNegative')) {
        document.getElementById('calcOutput').value = num1 +  ' ' + op + ' ' + num2 + ' = ' + result;
    } else if (status == 'error') {
        document.getElementById('calcOutput').value = "E R R O R";
    }
}

function addToOutput(char) {
    if (output.includes(' ')) {output = '0';}

    if (output == '0') {
        output = char;
    } else {
        output += char;
    }

    updateOutputText('normal');
}

function assignOperator(operator) {
    if (typeof(num1) == 'function') {
        num1 = parseFloat(output);
    } else if (typeof(num2) == 'function') {
        operate(op, num1, num2);
    }
    op = operator;
    output += ' ' + operator;
    updateOutputText('operator');
}

function operate(operator, num1, num2) {
    num2 = parseFloat(output);
    if (operator == "+") {
        add(num1, num2);
    } else if (operator == '-') {
        subtract(num1, num2);
    } else if (operator == "*") {
        multiply(num1, num2);
    } else if (operator == "/") {
        divide(num1, num2);
    } else if (operator == "C") {
        clearData();
    }
    
    if (!divByZero) {
        if (result >= 0) {
            updateOutputText('resultPositive');
        } else {
            updateOutputText('resultNegative');
        }
        
    } else {
        divByZero = false;
        clearData();
        updateOutputText('error');
    }
}

function clearData() {
    let output = '0';
    let num1 = Number;
    let num2 = Number;
    let op = '';
    let result = 0;
    let divByZero = false;
    updateOutputText('normal');
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
    if ((num1 == 0) && (num2 == 0)) {
        divByZero = true;
    } else {
        result = num1 / num2;
    }
}