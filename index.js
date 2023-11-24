
function getRandomNumber() {
    var randomNum = Math.floor(Math.random() * 6) + 1;
    return String(randomNum);
}

var firstNum = getRandomNumber();
var secondNum = getRandomNumber();

document.querySelector(".img1").setAttribute("src", "./images/dice" + firstNum + ".png");
document.querySelector(".img2").setAttribute("src", "./images/dice" + secondNum + ".png");

var str = "Refresh Me";
if (firstNum > secondNum) {
    str = "🏅 Player 1 Wins!";
} else if (firstNum == secondNum) {
    str = "Draw!";
} else {
    str =  "Player 2 Wins! 🏅 ";
}

document.querySelector("h1").textContent = str;