// Basic Algorithm Scripting
let resutl;
let stringVar;

// celsius to fahrenheit
function convertToF(C) {
  let F;
  F = C * (9 / 5) + 32;
  return F;
}
resutl = convertToF(100);
console.log(`100 'C = ${resutl} F`);

// reversing a string
function reversString(str) {
  let temp = [...str];
  let size = str.length - 1;
  str = "";
  for (let i = size; i >= 0; i--) {
    str += temp[i];
  }
  return str;
}
stringVar = reversString("Hello World!");
console.log(`Reversed string is : ${stringVar}`);

// Factorial of N
function factorialN(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
}
resutl = factorialN(5);
console.log(`5! = ${resutl}`);

// Longest word in string
function longestWord(str) {
  let current = 0;
  let longest = 0;
  let len = str.length;
  for (let i = 0; i < len; i++) {
    if (str[i] === " ") {
      if (current > longest) {
        longest = current;
      }
      current = 0;
    } else {
      ++current;
    }
  }
  if (current > longest) {
    longest = current;
  }
  return longest;
}
resutl = longestWord("The quick brown fox jumped over the lazy dog");
console.log(`Longest word length : ${resutl}`);
