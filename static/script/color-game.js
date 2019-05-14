let num = 6;
let color = generateColorArray(num);
let targetColor = chooseTargetColor();
let msgDisplay = document.querySelector("#msg");
let resetBtn = document.querySelector("#reset");
let targetDisplay = document.querySelector("#target-color");
let h1 = document.querySelector("h1");
let modeBtn = document.querySelectorAll(".mode");
let squareSelector = document.querySelectorAll(".square");

init();

function init() {
    h1.style.backgroundColor = 'steelblue';
    targetDisplay.textContent = targetColor;
    modeButtonListener();
    resetButtonListener();
    changeColorsSquare();
}

function modeButtonListener() {
    // add event listener to mode button
    for (let i = 0; i < modeBtn.length; i++) {
        modeBtn[i].addEventListener("click", function () {
            for (let j = 0; j < modeBtn.length; j++) {
                modeBtn[j].classList.remove("selected");
            }
            this.classList.add("selected");
            this.textContent === "Easy" ? num = 3 : num = 6;
            reset(num);
        })
    }
}


function resetButtonListener() {

    // reset button event listener
    resetBtn.addEventListener("click", function () {
        reset(num);
    });

}

function changeColorsSquare() {
    // change color in squares
    for (let i = 0; i < color.length; i++) {
        squareSelector[i].style.backgroundColor = color[i];

        // add event listener and corresponding event has to be done respectively
        squareSelector[i].addEventListener("click", function () {
            if (this.style.backgroundColor === targetColor) {
                // correct answer

                msgDisplay.textContent = "Correct!";
                changeColor(targetColor);
                for (let j = 0; j < targetDisplay.length; j++) {
                    targetDisplay.style.backgroundColor = targetColor;
                }
                resetBtn.textContent = 'Play Again?';
            } else {
                this.style.backgroundColor = "#f1f1f1";
                msgDisplay.textContent = "Wrong guess, try again!";
            }
        })
    }

}

function reset(num) {
    color = generateColorArray(num);
    targetColor = chooseTargetColor();
    document.querySelector("#target-color").textContent = targetColor;
    for (let i = 0; i < squareSelector.length; i++) {
        if (color[i]) {     // depend on mode
            squareSelector[i].style.display = "block";
            squareSelector[i].style.backgroundColor = color[i];
        } else {
            squareSelector[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = 'steelblue';
    resetBtn.textContent = "New Colors";
    msgDisplay.textContent = '';
}

function changeColor(color) {
    for (let i = 0; i < squareSelector.length; i++) {
        squareSelector[i].style.backgroundColor = color;
    }
}

/**
 * Select random color from given array.
 * @returns {string}
 */
function chooseTargetColor() {

    // generate random number from 0 to color length - 1
    let random = Math.floor(Math.random() * color.length);

    // return corresponding color
    return color[random];
}

function generateColorArray(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {

        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
