// if and else (conditional)

// for cosole use console.log();
function positiveNegative(value) {
    if(value == 0) {
        document.write("It's Zero <br>");
        // console.log("Zero\n");
    } else if(value > 0) {
        document.write("Positive <br>");
        // console.log("Positive\n");
    } else {
        document.write("Negative <br>");
        // console.log("Negative\n");
    }
}

positiveNegative(0);
positiveNegative(1);
positiveNegative(-1);

// switch - case
var value = 'a';
switch(value) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        document.write("Vowel <br>");
        break;
    default:
        document.write("Consonant <br>");
        break;
}