function add(x, y){
    return parseFloat(x) + parseFloat(y);
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    if (y === "0"){
        alert("CANT DIVIDE WITH ZERO");
        return 0;
    }
    if (String(x / y).length > 6)
        return (x / y).toFixed(8);
    else
        return x / y;
}

function operate(x, y, operation){
    switch (operation){
        case "+":
            return add(x, y);
        case "-":
            return subtract(x, y);
        case "*":
            return multiply(x, y);
        case "/":
            return divide(x, y);
        
    }
}

function addNumberToScreen(x){
    if (screen.textContent !== "0" && !calculationDone)
        screen.textContent += x;
    else{
        screen.textContent = x;
        calculationDone = false;
    }
}

function handleOperation(inputOperation){
    let equation;
    if (!operations.includes(screen.textContent.at(-1))){
        if (checkIfSecondNumber())
            {
                equation = screen.textContent.split(currentSign);
                equation.push(currentSign);
                screen.textContent = operate(equation[0], equation[1], equation[2]) + inputOperation;
                calculationDone = true;
            }
            else
                screen.textContent += inputOperation;
    }
    
}

function checkIfSecondNumber(){
    if (operations.some(oper => {
        currentSign = oper;
        return screen.textContent.slice(1).includes(oper);
    })){
        return true;
    }
    else
        return false;
}


let btnsContainer = document.querySelector(".buttonsContainer");
let screen = document.querySelector(".screen");
let currentSign;

let operations = ["+", "-", "*", "/"];
let calculationDone = false;

btnsContainer.addEventListener("click", (e) => {
    switch(e.target.className){
        case "oneBtn":
            addNumberToScreen(1);
            break;
        case "twoBtn":
            addNumberToScreen(2);
            break;
        case "threeBtn":
            addNumberToScreen(3);
            break;
        case "fourBtn":
            addNumberToScreen(4);
            break;
        case "fiveBtn":
            addNumberToScreen(5);
            break;
        case "sixBtn":
            addNumberToScreen(6);
            break;
        case "sevenBtn":
            addNumberToScreen(7);
            break;
        case "eightBtn":
            addNumberToScreen(8);
            break;
        case "nineBtn":
            addNumberToScreen(9);
            break;
        case "clearBtn":
            screen.textContent = 0;
            break;
        case "deleteBtn":
            if (screen.textContent !== "0")
                if (screen.textContent.length === 1)
                    screen.textContent = 0;
                else
                    screen.textContent = screen.textContent.slice(0, -1);
            break;
        case "changeSignBtn":
            if (checkIfSecondNumber()){
                if (currentSign === "+")
                    screen.textContent = screen.textContent.replace("+", "-");
                else
                    screen.textContent = screen.textContent.replace("-", "+");
            }
            else{
                if (screen.textContent.at(0) === "-")    
                    screen.textContent = screen.textContent.slice(1);
                else if (screen.textContent !== "0")    
                    screen.textContent = "-" + screen.textContent;
            }
            break;
        case "decimalBtn":
            if (checkIfSecondNumber()){
                if (!screen.textContent.split(currentSign)[1].includes("."))
                    screen.textContent += ".";
            }
            else{
                if (!screen.textContent.includes("."))
                    screen.textContent += "."
            }
            break;
        case "zeroBtn":
            if (screen.textContent !== "0")
                screen.textContent += "0";
            break;
        case "plusBtn":
            handleOperation("+");
            break;
        case "minusBtn":
            handleOperation("-");
            break;
        case "multiplyBtn":
            handleOperation("*");
            break;
        case "divideBtn":
            handleOperation("/");
            break;
        case "calculateBtn":
            handleOperation("");
            break;
    }
})