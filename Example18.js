// string literal templates
let name = "Rakin";
let age = 23;
const greet = `Hi this is ${name} and 
I am ${age} years old.`;
console.log(greet);

// object short-hand property
const person = (firstName, currentAge) => ({firstName, currentAge});
console.log(person(name, age));

// concise functions
const user = {
    name : "User Name",
    details() {
        console.log("Name : ", this.name);
    }
};
user.details();