// basic objects
let dog = {
    name: "Spike",
    numLegs: 4,

    // adding method
    sayLegs: function() {
        return dog.name + " has " + dog.numLegs + " legs."
    },

    // use of this keyword
    sayName: function() {
        return "The name of the pet is " +  this.name
    }
};

// access properties using dot notation
console.log(dog.name);
console.log(dog.numLegs);
console.log(dog.sayLegs());
console.log(dog.sayName());