// Random Number (Fractional)
var value = Math.random()   // (has a value of 0 <= x < 1)


// Random Number (Whole)
value = Math.floor(Math.random() * 10) // (has a value of 0-9)
// floor() -> rounds down the nearest number


// Random number in a Range
var start = 10;
var end = 20;
value = Math.floor(Math.random() * (end - start + 1)) + start;
// a random number >=10 and <=20


// use of parseInt
value = parseInt("0012");   // value = 12
value = parseInt("abc");    // value = NaN

// parseInt with radix
value = parseInt("1010", 2);    // binary number to decimal
value = parseInt("1010", 8);    // octal number to decimal
value = parseInt("1010", 16);   // Hexa decimal to decimal
// radix must be in between 2 and 36


// ternary operator
value = (start > end) ? start : end;    // value = 20;

// chaining ternary operator
value = (start === 0) ? "zero":
        (start > 0) ? "positive" : "negative";  // value = "positive";

