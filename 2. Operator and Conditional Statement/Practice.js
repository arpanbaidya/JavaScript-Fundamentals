//prompt
let name = prompt("Enter your name:");

console.log(name);

//Get user to input a number using prompt("Enter a number:").Check if the number is a multiple of 5.

let number = prompt("Enter a number:");
if(number % 5 === 0){
    console.log("The" ,number, "is a multiple of 5.");
}else{
    console.log("The" ,number, "is not a multiple of 5.");
}

//write a code which can give grades to students based on their scores.

let score = prompt("Enter your score:");
let grade;

if(score>=90 && score<=100){
    grade = "A";
}
else if(score<=89 && score>=70){
    grade = "B";
}
else if(score<=69 && score>=60){
    grade = "C";
}
else if(score<=59 && score>=50){
    grade = "D";
}
else if(score<=49 && score>=0){
    grade = "F";
}
else{
    console.log("Invaild Score");
}
console.log("Your Grade is",grade);