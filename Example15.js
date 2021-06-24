// var can be override
var x = 10;
console.log(x); // 10
var x = "name";
console.log(x); // name


// let can't be override
let value = 100;
console.log(value); //100


// local and global using let
function localGlobal() {
    var globalValue = "car";
    if(true) {
        let globalValue = "bus";
        console.log(globalValue);   // bus
    }
    console.log(globalValue);   // car
}
localGlobal();


// use of const keyword
const PI = 3.1416;
console.log(PI);


// array using constant
const arr = [1, 2, 3];
arr.push(5);
arr[2] = 4;
console.log(arr);   // [1, 2, 4, 5];


// prevent object mutation
let myObject = {
    name: "book",
    page: 12
};
Object.freeze(myObject);    // prevent object from any update
console.log(myObject);