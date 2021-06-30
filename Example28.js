// Inheritance
// Animal - super class
function Animal() {}
Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("Animal is eating");
  },
};

function Dog(name) {
  this.name = name;
}
Dog.prototype = {
  constructor: Dog,
};

// creating object
let animal = Object.create(Animal.prototype);
console.log(animal instanceof Animal);

//  child protype set by parent instance
function Cat() {}
Cat.prototype = Object.create(Animal.prototype);
let myCat = new Cat();
myCat.eat();
console.log(myCat.constructor); // Animal

// reset constructor property
Cat.prototype.constructor = Cat;
console.log(myCat.constructor); // Cat

// adding methods to cat
Cat.prototype.run = function () {
  console.log("Cat is now running");
};
myCat.run();

// over-ride method
Cat.prototype.eat = function () {
  console.log("Cat is eating");
};
myCat.eat();
