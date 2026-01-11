//for loop
for(let count=1 ; count<=10 ; count++){
    console.log("Arpan");
}

//calculate sum of 1 to n

let sum = 0;
let n = 10;
for(let i=1 ; i<=n ; i++){
    sum = sum + i;
}
console.log("Sum:",sum);        

//while loop
let i = 1;
while(i<=5){
    console.log("Arpan");
    i++;
}

//do-while loop
let j = 1;
do{
    console.log("j=",j);
    j++;
}while(j<=5);

//for-of loop
let str = "Arpan";
for(let val of str){ //iterator -> characters 
    console.log(val);
}

//for-in loop
let student = {
    name: "Arpan",
    age: 20,
    cgpa: 8.5,
    isPass: true
};

for(let key in student){
    console.log(key, ":", student[key]);
}