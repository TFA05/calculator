let btnsContainer = document.querySelector(".buttonsContainer");
let screen = document.querySelector(".screen");

btnsContainer.addEventListener("click", (e) => {
    switch(e.target.className){
        case "oneBtn":
            if (screen.textContent !== "0")
                screen.textContent += 1;
            else
                screen.textContent = 1;
            break;
        case "twoBtn":
            if (screen.textContent !== "0")
                screen.textContent += 2;
            else
                screen.textContent = 2;
            break;
        case "threeBtn":
            if (screen.textContent !== "0")
                screen.textContent += 3;
            else
                screen.textContent = 3;
            break;
        case "fourBtn":
            if (screen.textContent !== "0")
                screen.textContent += 4;
            else
                screen.textContent = 4;
            break;
        case "fiveBtn":
            if (screen.textContent !== "0")
                screen.textContent += 5;
            else
                screen.textContent = 5;
            break;
        case "sixBtn":
            if (screen.textContent !== "0")
                screen.textContent += 6;
            else
                screen.textContent = 6;
            break;
        case "sevenBtn":
            if (screen.textContent !== "0")
                screen.textContent += 7;
            else
                screen.textContent = 7;
            break;
        case "eightBtn":
            if (screen.textContent !== "0")
                screen.textContent += 8;
            else
                screen.textContent = 8
            break;
        case "nineBtn":
            if (screen.textContent !== "0")
                screen.textContent += 9;
            else
                screen.textContent = 9;
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
            if (!screen.textContent.includes("."))
                screen.textContent += ".";
            break;
        case "zeroBtn":
            if (screen.textContent !== "0")
                screen.textContent += "0";
            break;
    }
})