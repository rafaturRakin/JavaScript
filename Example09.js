// Functions
var globalVariable = 6;
function greetings() {
    // console.log("Hello World");
    document.write("Hello World", "<br>");

    // return value is undefined.
}

// fuction with arguments
function addition(number1, number2) {
    // number1 and number2 is local variable
    document.write("Sum is ", number1+number2, "\n");
}

// local and global varibale
function createGlobalVariable() {
    // without var any variable is global
    automaticGlobal = 12;
}

function printGlobalVariable() {
    document.write("<br><br>");
    document.write("Global created outsid : " + globalVariable + "<br>");
    document.write("Global created inside : " + automaticGlobal + "<br>");
}

// same name local and global variable
function myNumber() {
    var globalVariable = 100;
    return globalVariable;
    // returns 100.
}

// function calling
greetings();
addition(5, 7);
createGlobalVariable();
printGlobalVariable();

document.write("<br> Returned value is " + myNumber());

// use a html file to show the outputs