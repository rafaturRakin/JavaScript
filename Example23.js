// arrays
let arr = [1, 2, 3, 4, 5];

// access and modify
let first = arr[0]; // index 0 based
arr[1] = 10;    // [1, 10, 3, 4, 5];

// adding element
arr.push(11);   // [1, 10, 3, 4, 5, 11];
arr.unshift(0); // [0, 1, 10, 3, 4,, 5, 11];

// removing element
let removed = arr.pop();    // 11
removed = arr.shift();  // 0

// splice method - modifies array
// splice method for removing
removed = arr.splice(0, 2);
console.log(removed);   // [1, 10];
console.log(arr);   [3, 4, 5];

// splice method for adding
let arr2 = [11, 12, 12, 12, 15];
removed = arr2.splice(1, 3, 12, 13, 14);
console.log(removed);   // [12, 12, 12];
console.log(arr2);  // [11, 12, 13, 14, 15];


// slice method - untouched array
// slice method for copying
let arr3 = [10, 20, 30, 40, 50];
let copied = arr3.slice(1, 3);
console.log(arr3);  // [10, 20, 30, 40, 50];
console.log(copied);    // [20, 30];

// copy using spread operator (...)
copied = [...arr3];
console.log(copied);

// indexOf method
console.log(arr3.indexOf(10));  // 0
console.log(arr.indexOf(100));  // -1

// iterate with for loop
for(let i=0; i<arr.length; i++) {
    console.log(`arr[${i}] = ${arr[i]}`);
}

// multi-dimensional array
let multiArray = [1, [2, [3, [4, [5, [6]]]]]]; // every number is a level
console.log(multiArray);