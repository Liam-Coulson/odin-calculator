const calculatorDisplay = document.getElementById("calculatorDisplay");
const calculatorInputs = document.getElementById("calculatorInputs");
const calculatorNumbers = document.getElementsByClassName("calcNum");
const calculatorOperations = document.getElementsByClassName("calcOp");
const calculatorEquals = document.getElementById("calcEquals");
const calculatorDel = document.getElementById("calcDel");
const calculatorAC = document.getElementById("calcAC");
const calculatorAns = document.getElementById("calcAns");
const ERROR = "ERROR";
const ZERO = "You broke the calculator!";
const operandRegex = /^((\-?[1-9][0-9]*)|(0))$/;
let ans = 0;

class Calculator {
    constructor() {
        this.add = (a, b) => {
            return a + b;
        };
        this.subtract = (a, b) => {
            return a - b;
        };
        this.multiply = (a, b) => {
            return a * b;
        };
        this.divide = (a, b) => {
            if (b == 0) {return undefined;}
            return a / b;
        };
    }
};

var calcDisplayQueue = [];

// Events

Array.from(calculatorNumbers).forEach(btn => {
    btn.addEventListener ("click", function() {
        calcDisplayQueue.push(btn.innerText || btn.textContent);
        console.log(calcDisplayQueue);
        updateDisplay(calcDisplayQueue);
    })
});

Array.from(calculatorOperations).forEach(btn => {
    btn.addEventListener ("click", function() {
        calcDisplayQueue.push(btn.innerText || btn.textContent);
        updateDisplay(calcDisplayQueue);
    })
})

calculatorAns.addEventListener("click", function() {
    calcDisplayQueue.push(ans);
    updateDisplay(calcDisplayQueue);
})

calculatorEquals.addEventListener("click", function() {
    result = operate(calcDisplayQueue);
    calcDisplayQueue = [result.toString()];
    updateDisplay(calcDisplayQueue);
    if (calcDisplayQueue[0] == ERROR || calcDisplayQueue[0] == ZERO) {
        calcDisplayQueue = [];
    }
})

calculatorDel.addEventListener("click", function() {
    calcDisplayQueue.pop();
    updateDisplay(calcDisplayQueue);
})

calculatorAC.addEventListener("click", function() {
    calcDisplayQueue = [];
    updateDisplay(calcDisplayQueue);
})


function operate(calcDisplayQueue) {
    let operand1 = getOperand(calcDisplayQueue);

    while (calcDisplayQueue.length > 0) {
        let operator = calcDisplayQueue.shift();
        let operand2 = getOperand(calcDisplayQueue);
        // console.log("operand 1 " + operand1);
        // console.log("operator " + operator);
        // console.log("operand 2 " + operand2);
        if (operand1 == ERROR || operand2 == ERROR) {
            console.log("Incorrect format for numbers given");
            ans = ERROR;
            break
            // PREVENT the rest of the operate function from being carried out
        }
        if (operator == "+") {
            operand1 = CalculatorInstance.add(operand1, operand2);
            operator = ""
            operand2 = "";
        } else if (operator == "-") {
            operand1 = CalculatorInstance.subtract(operand1, operand2);
            operator = ""
            operand2 = "";
        } else if (operator == "x") {
            operand1 = CalculatorInstance.multiply(operand1, operand2);
            operator = ""
            operand2 = "";
        } else if (operator == "÷") {
            operand1 = CalculatorInstance.divide(operand1, operand2);
            if (operand1 == undefined) {
                operand1 = ZERO;
                calcDisplayQueue = [];
            }
            operator = ""
            operand2 = "";
        } else {
            console.log("Something went wrong with your operator.")
        }
    }
    if (operand1 == ERROR || operand2 == ERROR) {
        return ERROR;
    } else if (operand1 == ZERO) {
        return ZERO;
    } else {
        ans = operand1;
        return ans;
    }
}

function getOperand(calcDisplayQueue) {
    let opList = [];
    let operand = "";
    if (calcDisplayQueue.length == 0) {
        return ERROR;
    } else {
        opList.push(calcDisplayQueue.shift());
    }
    
    if (calcDisplayQueue.length != 0) {
        while (calcDisplayQueue[0] != "+" && calcDisplayQueue[0] != "-"
        && calcDisplayQueue[0] != "x" && calcDisplayQueue[0] != "÷") {
            opList.push(calcDisplayQueue.shift());
            if (calcDisplayQueue.length == 0) {
                break;
            }
        }
    }
    opList.forEach(character => {
        operand += character;
    })
    
    if (operand.match(operandRegex)) {
        return Number(operand);
    } else {
        return ERROR;
    }
}

function updateDisplay(calcDisplayQueue) {
    let string = ""
    calcDisplayQueue.forEach(character => {
        string += character;
    })
    calculatorDisplay.innerHTML = string;
}

let CalculatorInstance = new Calculator();

var operand1 = 0
var operand2 = 0
var operation = ""

var Test = new Calculator();

console.log("testing");
console.log(Test.add(2, 3));

console.log(Test.subtract(2, 3));
console.log(Test.multiply(2, 3));
console.log(Test.divide(2, 3));

getOperand(['7', '8', '+', '3', '2']);