var showOnScreen = document.calculator.display;
var PIE=Math.PI;
var ButtonClicked = 0;

function Numbers(x){
    switch(x)
    {
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


function Arithmetic(x){
    switch(x){
        case "substraction":
            showOnScreen.value += "-";
            break;

        case "addition":
            showOnScreen.value += "+";
            break;
        
        case "multiplication":
            showOnScreen.value += "*";
            break;

        case "division":
            showOnScreen.value += "/";
            break;

        case "pi":
            if(showOnScreen.value == ""){
                showOnScreen.value = PIE;
            }
            else{
                showOnScreen.value +=PIE;
            } 
            break;

        case "ex":
            if(showOnScreen.value == ""){
                showOnScreen.value = Math.E;
            }
            else{
                showOnScreen.value +=Math.E;
            } 
            break;

        case "Square":
            if(showOnScreen.value != ""){
                showOnScreen.value = Math.pow(showOnScreen.value,2);
            }
            else{
                showOnScreen.value +="0";
            } 
            break;

        case "Cube":
            if(showOnScreen.value != ""){
                showOnScreen.value = Math.pow(showOnScreen.value,3);
            }
            else{
                showOnScreen.value +="0";
            } 
            break;

        case "Inverse":
            if(showOnScreen.value != ""){
                showOnScreen.value = 1/showOnScreen.value;
            }
            else{
                showOnScreen.value = "Cannot divide by zero";
            }
            break;

        case "Absolute":
            showOnScreen.value = Math.abs(showOnScreen.value);
            break;

        case "Square_root":
            showOnScreen.value = Math.sqrt(showOnScreen.value);
            break;

        case "Cube_root":
            showOnScreen.value = Math.cbrt(showOnScreen.value);
            break;
    }
}

function Exponential(){
    showOnScreen.value = showOnScreen.value + '.e+0';
}

function Modulo(){
    showOnScreen.value += "%";
}

function X_Times_Y(){
    showOnScreen.value += "^";
}

function Y_Root_X(){
    showOnScreen.value += "Yroot";
}

function XYSquare(){
    let a = showOnScreen.value[showOnScreen.value.length-1];
    if(a.match(/[0-9]/)){
        let b = showOnScreen.value.split("^");
        showOnScreen.value = Math.pow(b[0],b[1]);
    }
    else{
        showOnScreen.value = "Invalid input";
    }
}

function XYroot(){
    let a = showOnScreen.value[showOnScreen.value.length-1];
    if(a.match(/[0-9]/)){
        let b = showOnScreen.value.split("Yroot");
        showOnScreen.value = Math.pow(b[0],1/b[1]);
    }
    else{
        showOnScreen.value = "Invalid input";
    }
}

function X_Times_10(){
    showOnScreen.value = Math.pow(10,showOnScreen.value);
}
function Two_raise_X(){
    showOnScreen.value = Math.pow(2,showOnScreen.value);
}

function logBase10(){
    showOnScreen.value = Math.log10(showOnScreen.value);
}
function logBaseY(){
    showOnScreen.value += "baseY";
}
function calculatelogBaseY(){
    let a = showOnScreen.value[showOnScreen.value.length-1];
    if(a.match(/[0-9]/)){
        let b = showOnScreen.value.split("baseY");
        showOnScreen.value = Math.log(b[0]) / Math.log(b[1]);
    }
    else{
        showOnScreen.value = "Invalid input";
    }
}

function logBaseE(){
    showOnScreen.value = Math.log(showOnScreen.value);
}

function InverseValue(){
    let num = showOnScreen.value;
    let a = num[0];
    let b = "-";
    if(a != "-"){
        showOnScreen.value = b.concat(num);
    }
    else if(a =="-"){
        showOnScreen.value = num.slice(1);
    }
}

function OpenBracket(){
    showOnScreen.value += "(";
}

function CloseBracket(){
    if(showOnScreen.value.includes("(")){
        showOnScreen.value += ")";
    }
    else{
        showOnScreen.value = "Check Syntax";
    }
    
}

function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
        showOnScreen.value = answer;
    }
    else if(n > 1){
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      showOnScreen.value = answer;
    }
    else if(n<0){
        n = Math.abs(n);
        for(var i = n; i >= 1; i--){
            answer = answer * i;
        }
        showOnScreen.value = "-" + answer;
    }  
}

function Operator(){
    showOnScreen.value+= ".";
}


function BackSpace(){
    if(showOnScreen.value!=""){
        showOnScreen.value=showOnScreen.value.slice(0,-1);
    }
}

function clickclr() {
    showOnScreen.value = "";
}

function clickequ() {
    if(showOnScreen.value.includes("^")){
        XYSquare();
    }
    if(showOnScreen.value.includes("Yroot")){
        XYroot();
    }
    if(showOnScreen.value.includes("baseY")){
        calculatelogBaseY();
    }
    var Display = eval(showOnScreen.value);
    showOnScreen.value = Display;
}


function trigonometry(x){
    switch(x){
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
            showOnScreen.value = 1/Math.cos(showOnScreen.value);
            break;

        case "cosec":
            showOnScreen.value = 1/Math.sin(showOnScreen.value);
            break;

        case "cot":
            showOnScreen.value = 1/Math.tan(showOnScreen.value);
            break;
        
    }
}

function Functions(x){
    switch(x){
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


function Revert(x){
    
    if(ButtonClicked % 2 == 0){
        document.getElementById("Square").style.display="none";
        document.getElementById("Square_root").style.display="none";
        document.getElementById("XYSquare").style.display="none";
        document.getElementById("X_Times_10").style.display="none";
        document.getElementById("log").style.display="none";
        document.getElementById("logE").style.display="none";


        document.getElementById("Cube").style.display="block";
        document.getElementById("Cube_root").style.display="block";
        document.getElementById("Y_root_X").style.display="block";
        document.getElementById("Two_raise_X").style.display="block";
        document.getElementById("logyx").style.display="block";
        document.getElementById("logyx").style.fontSize="14px";
        document.getElementById("EraiseX").style.display="block";

        ButtonClicked++;
    }
    else if(ButtonClicked % 2 != 0){
        document.getElementById("Square").style.display="block";
        document.getElementById("Square_root").style.display="block";
        document.getElementById("XYSquare").style.display="block";
        document.getElementById("X_Times_10").style.display="block";
        document.getElementById("log").style.display="block";
        document.getElementById("logE").style.display="block";


        document.getElementById("Cube").style.display="none";
        document.getElementById("Cube_root").style.display="none";
        document.getElementById("Y_root_X").style.display="none";
        document.getElementById("Two_raise_X").style.display="none";
        document.getElementById("logyx").style.display="none";
        document.getElementById("EraiseX").style.display="none";
        ButtonClicked++;
    }
}