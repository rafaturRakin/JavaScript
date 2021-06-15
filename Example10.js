// boolean value
var trueValue = true;
var falseValue = false;

function trueOrFalse(value) {
    if(value) {
        return "It' True";
    }
    return "It's False";
}

var returnedValue = trueOrFalse(trueValue);
document.write(returnedValue, "<br>");
returnedValue = trueOrFalse(falseValue);
document.write(returnedValue, "<br>");

// Equality (==) operator (converts types)
var value;
value = (12 == 12);     // true;
value = (12 == 13);      // false;
value = ("12" == 12);    // true;
value = ("12" == 11);    // false;

// Strict Equality operator (===)
value = (12 === 12);    // true
value = (12 === "12");  // false
value = (12 === 13);    // false
value = (12 === "13");   // false

// Inequality (!=) operator (converts types)
value = (12 != 12);      // false
value = (12 != 13);      // true
value = (12 != '12');    // false
value = (12 != '7');     // true
value = (1 != true);     // false
value = (0 != false);    // false

// Strict Inequality (!==) operator
value = (12 !== 12);     // false
value = (12 !== 13);    // true
value = (12 !== '12');  // true
value = (12 !== '13');  // true

// Greater than (>) operator
value = (12 > 10);      // true
value = (12 > 12);      // false
value = (12 > 20);      // false
value = (12 > "1");     // true
value = (12 > "100");   // false

// Greater than or equal (>=) operator
value = (12 >= 12);     // true
value = (12 >= 10);     // true
value = (12 >= 100);    // false
value = (12 >= "12");   // true
value = (12 >= "200");  // false

// Less than (<) operator
value = (12 < 20);      // true
value = (12 < 10);      // false
value = (12 < "12");    // false
value = (12 < "1");     // true

// Lest than or Equal (<=) operator
value = (12 <= 12);     // true
value = (12 <= 20);     // true
value = (12 <= '2');    // true
value = (12 <= '100');  // false

var number1 = 20;
var number2 = 30;

// Logical And (&&)
value = (number1>=20 && number2<=30);   // true && true = true
value = (number1>=30 && number2<=50);   // false && true = false
value = (number1>=10 && number2<=20);   // true && false = false
value = (number1>=21 && number2<=29);   // false && false = false

// Logical Or (||)
value = (number1>=20 || number2<=30);   // true || true = true
value = (number1>=30 || number2<=50);   // false || true = true
value = (number1>=10 || number2<=20);   // true || false = true
value = (number1>=21 || number2<=29);   // false || false = false

