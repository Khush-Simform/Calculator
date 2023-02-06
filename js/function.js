var showOnScreen = document.calculator.display;
var showOnScreen2 = document.calculator.display2;
var PIE = Math.PI;
var ButtonClicked = 0;
var count = 0;
var lcount = 0;
var memory = [];

function numbers(x) {            //Numbers function
    if (showOnScreen.value == PIE || showOnScreen.value == Math.E) {
        showOnScreen.value = "";
    }
    switch (x) {
        case "zero":
            showOnScreen.value += 0;
            break;

        case "one":
            showOnScreen.value += 1;
            break;

        case "two":
            showOnScreen.value += 2;
            break;

        case "three":
            showOnScreen.value += 3;
            break;

        case "four":
            showOnScreen.value += 4;
            break;

        case "five":
            showOnScreen.value += 5;
            break;

        case "six":
            showOnScreen.value += 6;
            break;

        case "seven":
            showOnScreen.value += 7;
            break;

        case "eight":
            showOnScreen.value += 8;
            break;

        case "nine":
            showOnScreen.value += 9;
            break;
    }
}

function validateInput() {
    let z = showOnScreen.value[showOnScreen.value.length - 1];
    let operators = ["%", "+", "-", "*", "/", ".", "^", ".e+0"];
    if (operators.includes(z)) {
        return true;
    }
    else {
        return false;
    }

}

function arithmetic(x) {
    switch (x) {                //Arithmetic functions;
        case "substraction":
            if (validateInput()) {
                showOnScreen.value = showOnScreen.value.slice(0, -1) + '-';
            }
            else if (showOnScreen.value == "") {
                showOnScreen.value = "0-";
            }
            else {
                showOnScreen.value += "-";
            }
            break;

        case "addition":
            if (validateInput()) {
                showOnScreen.value = showOnScreen.value.slice(0, -1) + '+';
            }
            else if (showOnScreen.value == "") {
                showOnScreen.value = "0+";
            }
            else {
                showOnScreen.value += "+";
            }
            break;

        case "multiplication":
            if (validateInput()) {
                showOnScreen.value = showOnScreen.value.slice(0, -1) + '*';
            }
            else if (showOnScreen.value == "") {
                showOnScreen.value = "0*";
            }
            else {
                showOnScreen.value += "*";
            }
            break;

        case "division":
            if (validateInput()) {
                showOnScreen.value = showOnScreen.value.slice(0, -1) + '/';
            }
            else if (showOnScreen.value == "") {
                showOnScreen.value = "0/";
            }
            else {
                showOnScreen.value += "/";
            }
            break;

        case "pi":
            showOnScreen.value = PIE;
            break;

        case "ex":
            showOnScreen.value = Math.E;
            break;

        case "square":
            (showOnScreen.value != "") ? showOnScreen.value = Math.pow(showOnScreen.value, 2) : showOnScreen.value += "0";
            break;

        case "cube":
            (showOnScreen.value != "") ? showOnScreen.value = Math.pow(showOnScreen.value, 3) : showOnScreen.value += "0";
            break;

        case "inverse":
            (showOnScreen.value != "") ? showOnScreen.value = 1 / showOnScreen.value : showOnScreen.value = "Cannot divide by zero";
            break;
        case "Absolute":
            showOnScreen.value = Math.abs(showOnScreen.value);
            break;

        case "squareRoot":
            showOnScreen.value = Math.sqrt(showOnScreen.value);
            break;

        case "cubeRoot":
            showOnScreen.value = Math.cbrt(showOnScreen.value);
            break;
    }
}
function exponential() {             //exponential Function
    showOnScreen.value = showOnScreen.value + '.e+0';
}
function modulo() {              //Modulo functions
    showOnScreen.value += "%";
}
function xTimesy() {               //X Raise to Y functions
    if (!showOnScreen.value.includes("^")) {
        showOnScreen.value += "^";
    }
}
function yRootx() {                //To find Y root of X functions
    showOnScreen.value += "Yroot";
}
function xySquare() {                //X raise to Y square functions
    let a = showOnScreen.value[showOnScreen.value.length - 1];
    if (a.match(/[0-9]/)) {
        let b = showOnScreen.value.split("^");
        showOnScreen.value = Math.pow(b[0], b[1]);
    }
    else {
        showOnScreen.value = "Invalid input";
    }
}
function xyRoot() {                  //Y root of X functions
    let a = showOnScreen.value[showOnScreen.value.length - 1];
    if (a.match(/[0-9]/)) {
        let b = showOnScreen.value.split("Yroot");
        showOnScreen.value = Math.pow(b[0], 1 / b[1]);
    }
    else {
        showOnScreen.value = "Invalid input";
    }
}
function xTimes10() {                  //10 raise to X functions
    showOnScreen.value = Math.pow(10, showOnScreen.value);
}
function twoRaiseX() {                 //2 raise to X functions
    showOnScreen.value = Math.pow(2, showOnScreen.value);
}
function logBase10() {                   //Log with base 10 functions
    showOnScreen.value = Math.log10(showOnScreen.value);
}
function logBaseY() {                    //Log with base Y functions
    showOnScreen.value += "baseY";
}
function calculatelogBaseY() {           //Log with base Y functions
    let a = showOnScreen.value[showOnScreen.value.length - 1];
    if (a.match(/[0-9]/)) {
        let b = showOnScreen.value.split("baseY");
        showOnScreen.value = Math.log(b[0]) / Math.log(b[1]);
    }
    else {
        showOnScreen.value = "Invalid input";
    }
}
function logBaseE() {                    //Log with base E functions
    showOnScreen.value = Math.log(showOnScreen.value);
}

function eRaiseX(){
    showOnScreen.value = Math.pow(Math.E, showOnScreen.value);
}
function inverseValue() {               //Inverse the value functions
    let num = showOnScreen.value[0];
    let a = num[0];
    let b = "-";
    if (a != "-") {
        showOnScreen.value = b.concat(showOnScreen.value);
    }
    else if (num == "-") {
        showOnScreen.value = showOnScreen.value.slice(1);
    }
}
function openBracket() {                 //Bracket Functions
    showOnScreen.value += "(";
    count++;
    document.getElementById("cnt").innerHTML = count;
}
function closeBracket() {                //Bracket Functions
    if (count > 0) {
        if (lcount == 0) {
            showOnScreen.value += ")";
        }
        else {
            showOnScreen.value += ")";
        }
        count--;
        lcount++;
        if (count == 0) {
            lcount = 0;
            showOnScreen.value += "*";
        }
        if (count == 0) {
            document.getElementById("cnt").innerHTML = "";
        }
        else {
            document.getElementById("cnt").innerHTML = count;
        }
    }
}
function factorialResult(n) {
    var result = factorial(n);
    showOnScreen.value = result;
}
function factorial(x) {                  //Factorial function
    if (x == 0 || x == 1) {
        return 1;
    }
    //if number is negative
    else if (x < 0) {
        return "Invalid Input";
    }
    // if number is positive
    else {
        return x * factorial(x - 1);
    }
}
function operator() {                //Dot operator function
    var last = showOnScreen.value[showOnScreen.value.length-1];
    if(last != "."){
        if (showOnScreen.value == "") {
            showOnScreen.value = "0.";
        }
        else {
            showOnScreen.value += ".";
        }
    }
}
function backSpace() {               //Backspace function
    if (showOnScreen.value != "") {
        showOnScreen.value = showOnScreen.value.slice(0, -1);
    }
}
function clickclr() {               //Clear the screen function for Display 1
    showOnScreen.value = "";
}
function clickclr2() {              //Clear the screen function for Display 2
    showOnScreen2.value = "";
}
function display2() {                //Display the screen function for Display 2
    let z = showOnScreen.value + "=";
    showOnScreen2.value = z;
}


function clickequ() {               //On click Equal to function
    if (showOnScreen.value.includes("^")) {
        xySquare();
    }
    if (showOnScreen.value.includes("Yroot")) {
        xyRoot();
    }
    if (showOnScreen.value.includes("baseY")) {
        calculatelogBaseY();
    }
    if(showOnScreen.value == ""){
        showOnScreen.value = "0";
    }
    var Display = eval(showOnScreen.value);
    display2();
    showOnScreen.value = Display;
}


function trigonometry(x) {               //Trigonometry functions
    switch (x) {
        case "sin":
            showOnScreen.value = Math.sin(showOnScreen.value);
            break;
        case "cos":
            showOnScreen.value = Math.cos(showOnScreen.value);
            break;

        case "tan":
            showOnScreen.value = Math.tan(showOnScreen.value);
            break;

        case "sec":
            showOnScreen.value = 1 / Math.cos(showOnScreen.value);
            break;

        case "cosec":
            showOnScreen.value = 1 / Math.sin(showOnScreen.value);
            break;

        case "cot":
            showOnScreen.value = 1 / Math.tan(showOnScreen.value);
            break;
    }
}
function functions(x) {                  //Mathematical functions
    switch (x) {
        case "floor":
            showOnScreen.value = Math.floor(showOnScreen.value);
            break;
        case "ceil":
            showOnScreen.value = Math.ceil(showOnScreen.value);
            break;

        case "mod":
            showOnScreen.value = Math.abs(showOnScreen.value);
            break;
    }
}
function revert(x) {                 //Change the value by pressing '2nd' button
    document.getElementById("square").style.display = (ButtonClicked % 2 == 0) ? "none": "block";
    document.getElementById("squareRoot").style.display = (ButtonClicked % 2 == 0) ? "none": "block";
    document.getElementById("xySquare").style.display = (ButtonClicked % 2 == 0) ? "none": "block";
    document.getElementById("xTimes10").style.display = (ButtonClicked % 2 == 0) ? "none": "block";
    document.getElementById("log").style.display = (ButtonClicked % 2 == 0) ? "none": "block";
    document.getElementById("logE").style.display = (ButtonClicked % 2 == 0) ? "none": "block";

    document.getElementById("cube").style.display = (ButtonClicked % 2 == 0) ? "block": "none";
    document.getElementById("cubeRoot").style.display = (ButtonClicked % 2 == 0) ? "block": "none";
    document.getElementById("yRootx").style.display = (ButtonClicked % 2 == 0) ? "block": "none";
    document.getElementById("twoRaiseX").style.display = (ButtonClicked % 2 == 0) ? "block": "none";
    document.getElementById("logyx").style.display = (ButtonClicked % 2 == 0) ? "block": "none";
    document.getElementById("logyx").style.fontSize = "14px";
    document.getElementById("EraiseX").style.display = (ButtonClicked % 2 == 0) ? "block": "none";
    ButtonClicked++;
}
function memoryClear() {                //Memory clear function
    memory = [];
    window.alert("Memory Cleared");
}
function memoryResult() {               //Memory result function
    showOnScreen.value = memory[memory.length - 1];
}
function memoryPlus() {                 //Memory plus function
    if (memory.length == 0) {
        memory.push(showOnScreen.value);
        clickclr();
    }
    else {
        let a = Number(showOnScreen.value) + Number(memory[memory.length - 1]);
        memory.push(a);
        clickclr();
    }
}
function memorySub() {                  //Memory Substraction function
    if (memory.length == 0) {
        memory.push(showOnScreen.value);
        let x = Number(memory[memory.length - 1]);
        if (x > 0) {
            x = -Math.abs(x);
            memory.push(x);
        }
        clickclr();
    }
    else {
        let a = Number(memory[memory.length - 1]) - Number(showOnScreen.value);
        memory.push(a);
        clickclr();
    }
}
function memoryStore() {                //Store the value in memory function
    memory.push(showOnScreen.value);
    clickclr();
}