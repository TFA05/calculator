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
    if (y === 0)
        console.log("cant divide with 0")
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
    if (screen.textContent !== "0")
        screen.textContent += x;
    else
        screen.textContent = x;
}

function handleOperation(inputOperation){
    let equation;
    if (operations.some((oper) => {
        currentSign = oper;
        return screen.textContent.includes(oper);
    }))
    {
        equation = screen.textContent.split(currentSign);
        equation.push(currentSign);
        screen.textContent = operate(equation[0], equation[1], equation[2]) + inputOperation;
    }
    else
        screen.textContent += inputOperation;
}


let btnsContainer = document.querySelector(".buttonsContainer");
let screen = document.querySelector(".screen");
let currentSign;

let operations = ["+", "-", "*", "/"];

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
            if (screen.textContent.at(0) === "-")    
                screen.textContent = screen.textContent.slice(1);
            else if (screen.textContent !== "0")    
                screen.textContent = "-" + screen.textContent;
            break;
        case "decimalBtn":
            //Operator check
            if (operations.some(oper => {
                currentSign = oper;
                return screen.textContent.includes(oper);
            })){
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