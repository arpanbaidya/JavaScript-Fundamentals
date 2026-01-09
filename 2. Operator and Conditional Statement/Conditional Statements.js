//If Statement
let age = 16;

if (age>=18){
    console.log("Elegible for Vote")
}

if (age<18){
    console.log("Not Elegible for Vote")
}

let mode ="Light";
let colour;

if (mode === "Dark"){
    colour = "Black"
}

if (mode === "Light"){
    colour = "White"
}

console.log(colour);

//If-Else Statement

if (age>=18){
    console.log("Vote")
}
else{
    console.log("No Vote")
}



if (mode === "Dark"){
    colour = "Black"
}
else{
    colour = "White"
}
console.log(colour);



let num = 20;

if( num % 2 === 0){
    console.log(num, "is even");
}
else{
    console.log(num, "is odd");
}

//Else-If Statement

let view = "Dark";
let shade;

if(view === "Dark"){
    shade = "Black";
}
else if(view === "Blue"){
    shade = "Blue";
} 
else if(view === "Pink"){
    shade = "Pink";
}
else{
    shade = "White";
} 

console.log(shade);
