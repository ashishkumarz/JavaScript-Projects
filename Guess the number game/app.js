let input = document.querySelector("input");
let guessBtn = document.querySelector("#guessBtn");
let para = document.querySelector("#result");
let para2 = document.querySelector("#attempts");
let resetBtn = document.querySelector("#resetBtn");

let count = 0;
let randomNum = Math.floor(Math.random() * 100) + 1;


guessBtn.addEventListener("click", () => {
    let userGuess = Number(input.value);

    if (input.value.trim() === "") {
        para.innerText = "Please enter the valid number";
        return;

    }

    if (userGuess < randomNum) {
        para.innerText = "Too low";
        para.className = "error";
        count++;
        attempts();

    }
    else if (userGuess > randomNum) {
        para.innerText = "Too High";
        para.className = "error";
        count++;
        attempts();
    }
    else {
        count++;
        para.innerText = `Congratulations! You guessed it in ${count} attempts`;
        para.className = "success";
        guessBtn.disabled = true;
        attempts();
        resetBtn.style.display = "inline-block";


    }
    input.value = "";
})

function attempts() {
    let attempts = `Attempts: ${count}`;
    para2.innerText = attempts;
}

resetBtn.addEventListener("click", () => {
    count = 0;
    randomNum = Math.floor(Math.random() * 100) + 1;

    input.value = "";
    para.innerText = "";
    para2.innerText = "";

    guessBtn.disabled = false;
    resetBtn.style.display = "none";
})









