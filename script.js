const calculatorDisplay = document.getElementById("calculatorDisplay");
const calculatorInputs = document.getElementById("calculatorInputs");
const calculatorButtons = document.getElementsByClassName("calcBtn");
const calculatorEquals = document.getElementById("calcEquals");
const calculatorDel = document.getElementById("calcDel");

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

Array.from(calculatorButtons).forEach(btn => {
    btn.addEventListener ("click", function() {
        calcDisplayQueue.push(btn.innerText || btn.textContent);
        console.log(calcDisplayQueue);
    })
});

calculatorEquals.addEventListener("click", function() {
    evaluateDisplay(calcDisplayQueue);
    console.log(calcDisplayQueue);
})

calculatorDel.addEventListener("click", function() {
    calcDisplayQueue.pop();
    console.log(calcDisplayQueue);
})

//TODO
function evaluateDisplay(calcDisplayQueue) {

}

var operand1 = 0
var operand2 = 0
var operation = 0

const buttons = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
                ".", "+", "-", ""];

var Test = new Calculator();

console.log("testing");
console.log(Test.add(2, 3));

console.log(Test.subtract(2, 3));
console.log(Test.multiply(2, 3));
console.log(Test.divide(2, 3));