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
//var operands = [];
//var operators = [];

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
    console.log(calcDisplayQueue);
})

calculatorDel.addEventListener("click", function() {
    calcDisplayQueue.pop();
    console.log(calcDisplayQueue);
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
    let previousInput = "";
    let currentConcatenation = "";
    let newCalcDisplayQueue = [];
    let operatorList = [];
    let operandList = [];

    calcDisplayQueue.forEach(input => {
        if (isNumberlike(input)) {
            if (isNumberlike(previousInput) || previousInput == "") {
                currentConcatenation += input;
                previousInput = input;
            }
        } else {
            if (currentConcatenation != "") {
                newCalcDisplayQueue.push(currentConcatenation);
                operandList.push(currentConcatenation);
                currentConcatenation = "";
            }
            newCalcDisplayQueue.push(input);
            operatorList.push(input);
            previousInput = input;
        }
    })
    
    if (currentConcatenation != "") {
        newCalcDisplayQueue.push(currentConcatenation);
        operandList.push(currentConcatenation);
    }

    // Number inputs have now been pieced back together, e.g. ["2", ".", "5"] -> "2.5"
    calcDisplayQueue = newCalcDisplayQueue;

    operandList.forEach(number => {
        // checks if the numbers are of the form "digits (decimal?) digits"
        if(!isNumberlike(number)) {return ERROR}
    })

    while (operatorList.includes("÷")) {
        opIndex = calcDisplayQueue.findIndex("÷");
        preOpIndex = opIndex - 1;
        prepreOpIndex = opIndex - 2;
        postOpIndex = opIndex + 1;
        postpostOpIndex = opIndex + 2;

        if (preOpIndex < 0 || postOpIndex > calcDisplayQueue.length) {return ERROR}
        if (prepreOpIndex < 0) {prepreOpIndex = -1}
        if (postpostOpIndex > calcDisplayQueue.length) {postpostOpIndex = -1}
        
        if (isNumberlike(calcDisplayQueue[preOpIndex])) {
            if (isNumberlike(calcDisplayQueue[postOpIndex])) {
                // SUCCESS
                Test.divide(parseInt(calcDisplayQueue[preOpIndex],
                            parseInt(calcDisplayQueue[postOpIndex])))
            }
            else if (calcDisplayQueue[postOpIndex] == "-"
            && postpostOpIndex != -1) {
                if (isNumberlike(calcDisplayQueue[postpostOpIndex])) {
                    // SUCCESS
                    Test.divide(parseInt(calcDisplayQueue[preOpIndex]),
                                parseInt("-"+calcDisplayQueue[postOpIndex]))
                } else {return ERROR}
            } else {return ERROR}
        } else {return ERROR}
    }

}
/**
 * Returns true if the string passed is a number with or without a decimal point
 * @param {string} num  A single character or longer number
 * @returns {boolean}   
 */
function isNumberlike(num) {
    if (length(num) == 1) {return (num >= "0" && num <= "9" || num == ".");}
    else {return num.match(/^\\d*\\.?\\d*$/)}
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