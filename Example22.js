// Debugging

// printing in the console
let a = 7;
console.log(a);

// clearing the console
console.clear();

// typeof variable
console.log(typeof 7);
console.log(typeof "");
console.log(typeof true);
console.log(typeof null);
console.log(typeof x);
console.log(typeof []);
console.log(typeof {});

// off by one errors (OBOE)
let name = "rakin";
// printing 1 more
for(let i=0; i<=name.length; i++) {
    console.log(name[i]);
}
// printing 1 less
for(let i=1; i<name.length; i++) {
    console.log(name[i]);
}

// infinite loop
function infiniteLoop() {
    while(true) {
        console.log("Do not call this fuction");
    }
}