// Functionla Programming
// avoid mutation and side effects
var fixedValue = 4;
function increment() {
  return fixedValue + 1;
}
console.log(increment());

// map method
let users = [
  { name: "John", age: 30 },
  { name: "Rob", age: 35 },
  { name: "Stark", age: 52 },
];
const names = users.map((user) => user.name);
console.log(names);

// implementing map method
var myArray = [1, 2, 3, 4, 5];
Array.prototype.myMap = function (callback) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  }
  return newArray;
};

var newArr = myArray.myMap((x) => x * 5);
console.log(newArr);

// filter
const lessThan50 = users.filter((user) => user.age < 50);
console.log(lessThan50);

// implement filter method
Array.prototype.myFilter = function (callback) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};
const filteredArray = myArray.myFilter((item) => item % 2);
console.log(filteredArray);

// copy using slice method
let myArray2 = myArray.slice();
console.log(myArray2);

// remove using slice
myArray2 = myArray.slice(0, 2);
console.log(myArray2);

// add two arrays
myArray2 = myArray.concat(myArray2);
console.log(myArray2);

// sorting array
function arraySort(arr) {
  return [].concat(arr).sort((a, b) => a - b);
}
console.log(arraySort([10, 4, 2, 6, 4]));

// split
function splitSentence(sentence) {
  return sentence.split(/\W/);
}
let words = splitSentence("Hi-This.is Rakin,Here!Hello World");
console.log(words);

// join
console.log(words.join(" "));

// Currying function
function add(x) {
  return function (y) {
    return function (z) {
      return function (p) {
        return x + y + z + p;
      };
    };
  };
}

let valueX = add(10);
let valueY = valueX(20);
let valueZ = valueY(30);
let valueP = valueZ(40);
console.log(valueX);
console.log(valueY);
console.log(valueZ);
console.log(valueP);
console.log(add(2)(4)(6)(8));
