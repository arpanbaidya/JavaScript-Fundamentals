//print all even number from 0 to 100
for(let n=0 ; n<=100 ; n++){
    if(n%2 === 0){
        console.log("Number:", n);
    }
}

//Guess Random Number Game
let gameNum = 25;

let userNum = prompt("Guess the game number :");
console.log(userNum);

while(userNum != gameNum){
    userNum = prompt("You entered wrong number. Guess again :");
}

console.log("Congratulations! You guessed the correct number.");