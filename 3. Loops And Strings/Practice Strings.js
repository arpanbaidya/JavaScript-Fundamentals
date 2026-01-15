//Generate a username by taking the user's full name (without spaces) and appending the length of the name to it, prefixed by '@'.
let fullname = prompt("Enter your fullName without spaces:");
let userName = "@" + fullname + fullname.length;
console.log(userName);
