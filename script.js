let num1 = Number;
let num2 = Number;
let operator = '';
let result = 0;
let divByZero = false;
let longResult = false;

document.addEventListener('keypress', function(event) {
    let keyPressed = event.which;

    switch(keyPressed) {
        case 99:
            document.getElementById('calcClear').click();
            event.preventDefault();
            break;
        case 67:
            document.getElementById('calcClear').click();
            event.preventDefault();
            break;
        case 47:
            document.getElementById('calcDiv').click();
            event.preventDefault();
            break;
        case 111:
            document.getElementById('calcDiv').click();
            event.preventDefault();
            break;
        case 42:
            document.getElementById('calcMult').click();
            event.preventDefault();
            break;
        case 106:
            document.getElementById('calcMult').click();
            event.preventDefault();
            break;
        case 45:
            document.getElementById('calcSub').click();
            event.preventDefault();
            break;
        case 109:
            document.getElementById('calcSub').click();
            event.preventDefault();
            break;
        case 43:
            document.getElementById('calcAdd').click();
            event.preventDefault();
            break;
        case 107:
            document.getElementById('calcAdd').click();
            event.preventDefault();
            break;
        case 13:
            document.getElementById('calcEnter').click();
            event.preventDefault();
            break;
        case 43:
            document.getElementById('calcEnter').click();
            event.preventDefault();
            break;
        case 55:
            document.getElementById('calc7').click();
            event.preventDefault();
            break;
        case 103:
            document.getElementById('calc7').click();
            event.preventDefault();
            break;
        case 56:
            document.getElementById('calc8').click();
            event.preventDefault();
            break;
        case 104:
            document.getElementById('calc8').click();
            event.preventDefault();
            break;
        case 57:
            document.getElementById('calc9').click();
            event.preventDefault();
            break;
        case 105:
            document.getElementById('calc9').click();
            event.preventDefault();
            break;
        case 52:
            document.getElementById('calc4').click();
            event.preventDefault();
            break;
        case 100:
            document.getElementById('calc4').click();
            event.preventDefault();
            break;
        case 53:
            document.getElementById('calc5').click();
            event.preventDefault();
            break;
        case 101:
            document.getElementById('calc5').click();
            event.preventDefault();
            break;
        case 54:
            document.getElementById('calc6').click();
            event.preventDefault();
            break;
        case 102:
            document.getElementById('calc6').click();
            event.preventDefault();
            break;
        case 49:
            document.getElementById('calc1').click();
            event.preventDefault();
            break;
        case 97:
            document.getElementById('calc1').click();
            event.preventDefault();
            break;
        case 50:
            document.getElementById('calc2').click();
            event.preventDefault();
            break;
        case 98:
            document.getElementById('calc2').click();
            event.preventDefault();
            break;
        case 51:
            document.getElementById('calc3').click();
            event.preventDefault();
            break;
        case 99:
            document.getElementById('calc3').click();
            event.preventDefault();
            break;
        case 48:
            document.getElementById('calc0').click();
            event.preventDefault();
            break;
        case 96:
            document.getElementById('calc0').click();
            event.preventDefault();
            break;
        case 46:
            document.getElementById('calcDecimal').click();
            event.preventDefault();
            break;
        case 110:
            document.getElementById('calcDecimal').click();
            event.preventDefault();
            break;
    }
})

function updateOutputText(status) {
    document.getElementById('calcOutput').className = 'calcText ' + status;
    document.getElementById('mainSection').className = '';
    
    if (status == 'operator') {
        document.getElementById('calcOutput').value = num1 + ' ' + operator;
        document.getElementById('mainSection').className = 'bgOperator';
    } else if ((status == 'resultPositive') || (status == 'resultNegative')) {
        if (longResult == false) {
            document.getElementById('calcOutput').value = num1 +  ' ' + operator + ' ' + num2 + ' = ' + result;
        } else if (longResult == true) {
            document.getElementById('calcOutput').value = '= ' + result;
            longResult = false;
        }
        if (status == 'resultPositive') {
            document.getElementById('mainSection').className = 'bgPositive';
        } else if (status == 'resultNegative') {
            document.getElementById('mainSection').className = 'bgNegative';
        }
    } else if (status == 'error') {
        document.getElementById('calcOutput').value = "E R R O R";
        document.getElementById('mainSection').className = 'bgNegative';
    }
}

function addToOutput(char) {
    let output = document.getElementById('calcOutput').value;
    if ((char == '.') && (output.includes('.'))) {}
    if ((isNaN(output)) || (output == "E R R O R")) {
        output = '0';
    }

    if (output == '0') {
        output = char;
    } else if ((char == '.') && (output.includes('.') == false)) {
        output += char + '0';
    } else {
        output += char;
    }

    document.getElementById('calcOutput').value = output;

    updateOutputText('normal');
}

function assignOperator(operation) {
    let output = document.getElementById('calcOutput').value;
    if (output == "E R R O R") {
        return
    }

    if (typeof(num1) == 'function') {
        num1 = parseFloat(document.getElementById('calcOutput').value);
    } else if((typeof(num2) == 'function') && (output.includes(' ') == false)) {
        operate();
    }

    operator = operation;
    updateOutputText('operator');
}

function operate() {
    num2 = parseFloat(document.getElementById('calcOutput').value);
    if (operator == "+") {
        add();
    } else if (operator == '-') {
        subtract();
    } else if (operator == "*") {
        multiply();
    } else if (operator == "/") {
        divide();
    }

    resultStr = result.toString();
    if (resultStr.length >= 14) {
        longResult = true;
    }
    
    if ((divByZero == true) || (typeof(num1) == 'function') || (typeof(num2) == 'function')) {
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
    num1 = result;
    num2 = Number;
    result = 0;
}

function clearData() {
    document.getElementById('calcOutput').value = '0';
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