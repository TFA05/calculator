let btnsContainer = document.querySelector(".buttonsContainer");
let screen = document.querySelector(".screen");

btnsContainer.addEventListener("click", (e) => {
    switch(e.target.className){
        case "oneBtn":
            screen.textContent += 1;
            break;
        case "twoBtn":
            screen.textContent += 2;
            break;
        case "threeBtn":
            screen.textContent += 3;
            break;
        case "fourBtn":
            screen.textContent += 4;
            break;
        case "fiveBtn":
            screen.textContent += 5;
            break;
        case "sixBtn":
            screen.textContent += 6;
            break;
        case "sevenBtn":
            screen.textContent += 7;
            break;
        case "eightBtn":
            screen.textContent += 8;
            break;
        case "nineBtn":
            screen.textContent += 9;
            break;
    }
})