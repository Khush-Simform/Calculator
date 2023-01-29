var showOnScreen = document.calculator.display;
var showOnScreen2 = document.calculator.display2;
var PIE=Math.PI;
var ButtonClicked = 0;
var memory=[];

function Numbers(x){            //Numbers function
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
function Arithmetic(x){             //Arithmetic functions
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
function Exponential(){             //exponential Function
    showOnScreen.value = showOnScreen.value + '.e+0';
}
function Modulo(){              //Modulo functions
    showOnScreen.value += "%";
}
function Square_root(){             //Square Root functions
    showOnScreen.value = Math.sqrt(showOnScreen.value);
}
function X_Times_Y(){               //X Raise to Y functions
    showOnScreen.value += "^";
}
function Y_Root_X(){                //To find Y root of X functions
    showOnScreen.value += "Yroot";
}
function XYSquare(){                //X raise to Y square functions
    let a = showOnScreen.value[showOnScreen.value.length-1];
    if(a.match(/[0-9]/)){
        let b = showOnScreen.value.split("^");
        showOnScreen.value = Math.pow(b[0],b[1]);
    }
    else{
        showOnScreen.value = "Invalid input";
    }
}
function XYroot(){                  //Y root of X functions
    let a = showOnScreen.value[showOnScreen.value.length-1];
    if(a.match(/[0-9]/)){
        let b = showOnScreen.value.split("Yroot");
        showOnScreen.value = Math.pow(b[0],1/b[1]);
    }
    else{
        showOnScreen.value = "Invalid input";
    }
}
function X_Times_10(){                  //10 raise to X functions
    showOnScreen.value = Math.pow(10,showOnScreen.value);
}
function Two_raise_X(){                 //2 raise to X functions
    showOnScreen.value = Math.pow(2,showOnScreen.value);
}
function logBase10(){                   //Log with base 10 functions
    showOnScreen.value = Math.log10(showOnScreen.value);
}
function logBaseY(){                    //Log with base Y functions
    showOnScreen.value += "baseY";
}
function calculatelogBaseY(){           //Log with base Y functions
    let a = showOnScreen.value[showOnScreen.value.length-1];
    if(a.match(/[0-9]/)){
        let b = showOnScreen.value.split("baseY");
        showOnScreen.value = Math.log(b[0]) / Math.log(b[1]);
    }
    else{
        showOnScreen.value = "Invalid input";
    }
}
function logBaseE(){                    //Log with base E functions
    showOnScreen.value = Math.log(showOnScreen.value);
}
function InverseValue(){                //Inverse the value functions
    let num = showOnScreen.value[0];
    let a = num[0];
    let b = "-";
    if(a != "-"){
        showOnScreen.value = b.concat(showOnScreen.value);
    }
    else if(num =="-"){
        showOnScreen.value = showOnScreen.value.slice(1);
    }
}
function OpenBracket(){                 //Bracket Functions
    showOnScreen.value += "(";
}
function CloseBracket(){                //Bracket Functions
    if(showOnScreen.value.includes("(")){
        showOnScreen.value += ")";
    }
    else{
        showOnScreen.value = "Check Syntax";
    }
    
}
function factorial(n){                  //Factorial function
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
function Operator(){                //Dot operator function
    showOnScreen.value+= ".";
}
function BackSpace(){               //Backspace function
    if(showOnScreen.value!=""){
        showOnScreen.value=showOnScreen.value.slice(0,-1);
    }
}
function clickclr() {               //Clear the screen function for Display 1
    showOnScreen.value = "";
}
function clickclr2() {              //Clear the screen function for Display 2
    showOnScreen2.value = "";
}
function Display2(){                //Display the screen function for Display 2
    let z = showOnScreen.value + "=";
    showOnScreen2.value = z;
}
function clickequ() {               //On click Equal to function
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
    Display2();
    showOnScreen.value = Display;
}
function trigonometry(x){               //Trigonometry functions
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
function Functions(x){                  //Mathematical functions
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
function Revert(x){                 //Change the value by pressing '2nd' button

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
function Memory_Clear(){                //Memory clear function
    memory=[];
    window.alert("Memory Cleared");
}
function Memory_Result(){               //Memory result function
    showOnScreen.value = memory[memory.length-1];
}
function Memory_Plus(){                 //Memory plus function
    if(memory.length==0){
        memory.push(showOnScreen.value);
        clickclr();
    }
    else{
        let a = Number(showOnScreen.value) + Number(memory[memory.length-1]);
        memory.push(a);
        clickclr();
    }
}
function Memory_Sub(){                  //Memory Substraction function
    if(memory.length==0){
        memory.push(showOnScreen.value);
        let x = Number(memory[memory.length-1]);
        if(x>0){
            x = -Math.abs(x);
            memory.push(x);
        }
        clickclr();
    }
    else{
        let a = Number(memory[memory.length-1])- Number(showOnScreen.value); 
        memory.push(a);
        clickclr();
    }
}
function Memory_Store(){                //Store the value in memory function
    memory.push(showOnScreen.value);
    clickclr();
}