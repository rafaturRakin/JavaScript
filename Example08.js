// JS Array

// 1D Array
var languageList = ["Java", 2019, "JS", 2021];

// 2D Array
var academicYear = [["JSC", 2011], ["SSC", 2014]];

// accessing elements
var language = languageList[0]; // language = "Java";
var certificate = academicYear[1][0];   // certificate = "JSC";

// modify elements
languageList[1] = 2020; // ["Java", 2020, "JS", 2021];

// push -> add item at the end
var array1 = [1, 2, 3];
array1.push(4); // [1, 2, 3, 4];
var array2 = [[1, 2], [3, 4]];
array2.push([5, 7], 8); // [[1, 2], [3, 4], [5, 7], 8];

// pop -> remove item from end
var popedValue = array1.pop();  // popedValue = 4;

// shift -> remove item from begining
var removedFirst = array2.shift();  // removedFirst = [1, 2];

// unshift -> add item at the begining
array1.unshift(100);    // [100, 1, 2, 3];
