let rock = document.getElementById("btn1");
let paper = document.getElementById("btn2");
let scissor = document.getElementById("btn3");
let start = document.getElementById("btn");
let user = document.getElementById("change1");
let computer = document.getElementById("change2");
let user_score = document.getElementById("score1");
let comp_score = document.getElementById("score2");
let compChoice;
let gameStart = false;
let won = 0;
let lost = 0;

function checkCompletion() {
    if (won == 5 || lost == 5) {
        let para = document.createElement("p");
        if (won == 5) {
            para.textContent = "Congrats, You won the match😃";
        }
        else if (lost == 5) {
            para.textContent = "Better luck next time😢";
        }
        para.style.fontSize = "1.5rem";
        document.body.appendChild(para);
        let resultDivs = document.querySelectorAll(".result");
        resultDivs.forEach(divs => {
            divs.remove();
        });
        won = 0;
        lost = 0;
    }
}

function computerChoice() {
    let comp = Math.floor(Math.random() * 3 + 1);
    if (comp == 1) {
        compChoice = "Rock";
    }
    else if (comp == 2) {
        compChoice = "Paper";
    }
    else {
        compChoice = "Scissor";
    }
    computer.innerText = `${compChoice}`;
    return compChoice;
}

start.addEventListener("click", () => {
    gameStart = true;
    start.disabled = true;
});

rock.addEventListener("click", () => {
    if (!gameStart) return;
    user.innerText = "Rock";
    let compChoice = computerChoice();
    let div = document.createElement("div");
    if (compChoice == "Scissor") {
        div.innerHTML = "You won this round<hr>";
        won++;
    }
    else if (compChoice == "Paper") {
        div.innerHTML = "You lost this round<hr>";
        lost++;
    }
    else {
        div.innerHTML = "It's a TIE<hr>";
    }
    user_score.innerText = `${won}`;
    comp_score.innerText = `${lost}`;
    div.setAttribute("class", "result");
    document.body.appendChild(div);
    checkCompletion();
}
);

paper.addEventListener("click", () => {
    if (!gameStart) return;
    user.innerText = "Paper";
    let compChoice = computerChoice()
    let div = document.createElement("div");
    if (compChoice == "Scissor") {
        div.innerHTML = "You lost this round<hr>";
        lost++;
    }
    else if (compChoice == "Rock") {
        div.innerHTML = "You won this round<hr>";
        won++;
    }
    else {
        div.innerHTML = "It's a TIE<hr>";
    }
    user_score.innerText = `${won}`;
    comp_score.innerText = `${lost}`;
    div.setAttribute("class", "result");
    document.body.appendChild(div);
    checkCompletion();
}
);

scissor.addEventListener("click", () => {
    if (!gameStart) return;
    user.innerText = "Scissor";
    let compChoice = computerChoice();
    let div = document.createElement("div");
    if (compChoice == "Paper") {
        div.innerHTML = "You won this round<hr>";
        won++;
    }
    else if (compChoice == "Rock") {
        div.innerHTML = "You lost this round<hr>";
        lost++;
    }
    else {
        div.innerHTML = "It's a TIE<hr>";
    }
    user_score.innerText = `${won}`;
    comp_score.innerText = `${lost}`;
    div.setAttribute("class", "result");
    document.body.appendChild(div);
    checkCompletion();
}
);






