// Loops

// while loop
var i = 1;
var myArray = [];
while(i<=5) {
    myArray.push(i);
    i++;
}
// myArray = [1, 2, 3, 4, 5];

// for loop
myArray = [];
for(var j=6; j>0; j--) {
    myArray.push(j);
}
// myArray = [6, 5, 4, 3, 2, 1];

// even numbers (for loop)
myArray = [];
for(var j=0; j<=10; j+=2) {
    myArray.push(j);
}
// myArray = [0, 2, 4, 6, 8, 10];

// odd numbers (while loop)
myArray = [];
i = 1;
while(i<=10) {
    myArray.push(i);
    i += 2;
}
// myArray = [1, 3, 5, 7, 9];

// nested loop
var total = 0;
myArray = [[1, 2, 3], [4, 5], [6, 7, 8, 9]];
for(i=0; i<myArray.length; i++) {
    for(var j=0; j<myArray[i].length; j++) {
        total += myArray[i][j];
    }
}
// total = 45;

// do...while loop (case - true)
i = 0;
myArray = [];
do {
    myArray.push(i);
    i++;
}while(i<5);
// myArray = [0, 1, 2, 3, 4];

// do...while loop (case - false)
i = 5;
myArray = [];
do {
    myArray.push(i);
    i++;
} while(i<5);
// myArray = [5];

// Recursion
var number = 10;
var result = 0;
function recursiveFucntion(num) {
    if(num==0) {
        return 0;
    }
    return recursiveFucntion(num-1) + num;
}

result = recursiveFucntion(number); // result = 55;
