var random_number1 = Math.floor(Math.random() * 6) + 1;
var random_number2 = Math.floor(Math.random() * 6) + 1;
function player1(){

    document.querySelector(".img1").setAttribute("src", "images/dice" + random_number1 + ".png");

}
player1();
function player2(){

    document.querySelector(".img2").setAttribute("src", "images/dice" + random_number2 + ".png");
}
player2();
if(random_number1 > random_number2){
    document.querySelector("h1").textContent = "Player 1 Wins! 🚩";
}
else if(random_number1 < random_number2){
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
    }
    else{
         document.querySelector("h1").textContent = "Draw 🚩";
    }
    