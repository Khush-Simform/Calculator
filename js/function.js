var showOnScreen = document.calculator.display;
var PIE=Math.PI;

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
    }
}

function Exponential(){
    showOnScreen.value = showOnScreen.value + '.e+0';

    console.log(showOnScreen.value.length);
}

function Modulo(){
    showOnScreen.value += "%";
}

function Square_root(){
    showOnScreen.value = Math.sqrt(showOnScreen.value);
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
0}


function BackSpace(){
    if(showOnScreen.value!=""){
        showOnScreen.value=showOnScreen.value.slice(0,-1);
    }
}

function clickclr() {
    showOnScreen.value = "";
}
function clickequ() {
    var Display = eval(showOnScreen.value);
    showOnScreen.value = Display;
}