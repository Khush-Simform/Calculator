var showOnScreen = document.calculator.display;

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
    }
}

function clickclr() {
    showOnScreen.value = "";
}
function clickequ() {
    var Display = eval(showOnScreen.value);
    showOnScreen.value = Display;
}