//Strings
let str = "Arpan";
console.log(str);
console.log(str.length);
console.log(str[0]);

//Template Literals
let obj = {
    Item: "Pen",
    price: 20
};
console.log(`The item is ${obj.Item} and the price is ${obj.price}`);

//String Methods
let str2 = " Baidya    ";
console.log(str2.toUpperCase());
console.log(str2.toLowerCase());
console.log(str2.trim());
console.log(str2.slice(2, 4));
console.log(str.concat(str2));
console.log(str2.replace("Baidya","Bose"));
console.log(str2.charAt(3));