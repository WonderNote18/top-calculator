let output = '0';
let num1 = Number;
let num2 = Number;
let operator = '';
let result = 0;
let divByZero = false;


function updateOutputText(status) {
    document.getElementById('calcOutput').className = 'calcText ' + status;
    if (status == 'normal') {
        document.getElementById('calcOutput').value = output;
    } else if (status == 'operator') {
        document.getElementById('calcOutput').value = output + ' ' + operator;
    } else if ((status == 'resultPositive') || (status == 'resultNegative')) {
        document.getElementById('calcOutput').value = num1 +  ' ' + operator + ' ' + num2 + ' = ' + result;
        num1 = result;
        num2 = 0;
        result = 0;
    } else if (status == 'error') {
        document.getElementById('calcOutput').value = "E R R O R";
    }
}

function addToOutput(char) {
    let currentOutput = document.getElementById('calcOutput').value;
    if (currentOutput.includes(' ')) {
        output = '0';
        updateOutputText('normal');
    }

    if (output == '0') {
        output = char;
    } else {
        output += char;
    }

    updateOutputText('normal');
}

function assignOperator(operation) {
    if (typeof(num1) == 'function') {
        num1 = parseFloat(output);
        num2 = 0;
    } else {
        operate();
    }

    operator = operation;
    updateOutputText('operator');
}

function operate() {
    num2 = parseFloat(output);
    if (operator == "+") {
        add();
    } else if (operator == '-') {
        subtract();
    } else if (operator == "*") {
        multiply();
    } else if (operator == "/") {
        divide();
    }
    
    if (divByZero == true) {
        divByZero = false;
        clearData();
        updateOutputText('error');
        return;
    }

    if (result >= 0) {
        updateOutputText('resultPositive');
    } else {
        updateOutputText('resultNegative');
    }
}

function clearData() {
    output = '0';
    num1 = Number;
    num2 = Number;
    operator = '';
    result = 0;
    divByZero = false;
    updateOutputText('normal');
}

function add() {
    result = num1 + num2;
}

function subtract() {
    result = num1 - num2;
}

function multiply() {
    result = num1 * num2;
}

function divide() {
    if ((num1 == 0) && (num2 == 0)) {
        divByZero = true;
    } else {
        result = num1 / num2;
    }
}