// Arrow Function
const add = () => {
    let x = 5, y =6;
    return x+y;
};
console.log(add());

// one line arrow function
const stringValue = () => "author";
console.log(stringValue());

// arrow function with parameter
let a = 10;
let b = 20;
const square = (a) => {return a*a};
const updateSquare = b => {return b*b};
const multiplier = (a, b) => {return a*b};
console.log(square(a));
console.log(updateSquare(b));
console.log(multiplier(a, b));

// arrow function with default paramerter
const greetings = (name = "default") => "Hello " + name;
console.log(greetings("Rakin"));
console.log(greetings());

// variable number of arguments (rest args)
const myFunc = (...args) => "total arguments : " + args.length;
console.log(myFunc());
console.log(myFunc([1, 2]));
console.log(myFunc(1, 2, "r", 0.9));