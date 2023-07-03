const calculatorDisplay = document.getElementById("calculatorDisplay");
const calculatorInputs = document.getElementById("calculatorInputs");
const calculatorNumbers = document.getElementsByClassName("calcNum");
const calculatorOperations = document.getElementsByClassName("calcOp");
const calculatorEquals = document.getElementById("calcEquals");
const calculatorDel = document.getElementById("calcDel");
const ERROR = "ERROR";

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
    })
});

Array.from(calculatorOperations).forEach(btn => {
    btn.addEventListener ("click", function() {
        calcDisplayQueue.push(btn.innerText || btn.textContent);
        console.log(calcDisplayQueue)
        setOperations(false);
        // When you have clicked on an operation, all ops except minus need to be
        // disabled from clicking on them until a number is pressed.
    })
})

calculatorEquals.addEventListener("click", function() {
    operate(calcDisplayQueue);
    // console.log(calcDisplayQueue);
})

calculatorDel.addEventListener("click", function() {
    calcDisplayQueue.pop();
    // console.log(calcDisplayQueue);
})

/**
 * Enables or disables the clickability of +, x, ÷ once any operation is clicked
 * @param {*} state The state, on or off, that the buttons should be switched to
 */
function setOperations(state) {
    Array.from(calculatorOperations).forEach(operation => {
        if (operation.innerText != "-") {
            operation.disabled = !state;
        }
    })
}

//TODO
function operate(calcDisplayQueue) {
    let operand1 = getOperand(calcDisplayQueue);
    let operator = calcDisplayQueue.shift();
    let operand2 = getOperand(calcDisplayQueue);

    op2List.push(calcDisplayQueue.shift());
    while (calcDisplayQueue[0] != "+" && calcDisplayQueue[0] != "-"
        && calcDisplayQueue[0] != "x" && calcDisplayQueue[0] != "÷") {
        op1List.push(calcDisplayQueue.shift());
    }
    console.log(op1List);
}

function getOperand(calcDisplayQueue) {
    let oplist = [];
    if (calcDisplayQueue.length == 0) {
        return ERROR;
    } else {
        oplist.push(calcDisplayQueue.shift());
    }
    
    if (calcDisplayQueue.length != 0) {
        while (calcDisplayQueue[0] != "+" && calcDisplayQueue[0] != "-"
        && calcDisplayQueue[0] != "x" && calcDisplayQueue[0] != "÷") {
            op1List.push(calcDisplayQueue.shift());
            if (calcDisplayQueue.length != 0) {
                break;
            }
        }
    }
    console.log(oplist)
    
    
}


var operand1 = 0
var operand2 = 0
var operation = ""

var Test = new Calculator();

console.log("testing");
console.log(Test.add(2, 3));

console.log(Test.subtract(2, 3));
console.log(Test.multiply(2, 3));
console.log(Test.divide(2, 3));

