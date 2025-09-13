console.log("jeg er i guessnumber")

let lblMessage = document.querySelector(".message");
console.log(lblMessage);
console.log(lblMessage.textContent)

const lblNumber = document.querySelector(".number");
console.log(lblNumber);

let lblScore = document.querySelector(".score");
console.log(lblScore);

const inpGuess = document.querySelector(".guess")
console.log(inpGuess);

const btnCheck = document.querySelector(".btn.check");
console.log(btnCheck);

const secretNumber = Math.trunc(Math.random() * 20);
console.log(secretNumber);

let startScore = 20;


function testNumber() {
    console.log(secretNumber);
    console.log("testNumber()");
    guess = Number(inpGuess.value);
    console.log(inpGuess.value);
    if (!guess) {
        lblMessage.textContent = '⛔ No Number';
    } else if (guess === secretNumber) {
        lblMessage.textContent = '🎉 Du har gættet tallet';
        console.log(lblMessage.textContent)
    } else if (guess > secretNumber) {
        lblMessage.textContent = "📈 for højt - prøv igen";
        startScore--;
        lblScore.textContent = startScore;
        console.log(startScore)
    } else if (guess < secretNumber) {
        lblMessage.textContent = "📉 for lavt - prøv igen";
        startScore--;
        lblScore.textContent = startScore;
        console.log(startScore)
    }
}

btnCheck.addEventListener("click", testNumber);

