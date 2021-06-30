// constructors
function Dog() {
  (this.name = "Spike"), (this.color = "Golden Brown"), (this.numLegs = 4);
}

// creating object using constructor
let bullDog = new Dog();
console.log(bullDog.name);

// constructors with parameter
function Car(name, color) {
  this.name = name;
  this.color = color;
}

// prototype property
Car.prototype.wheels = 4;

let myCar = new Car("Ferrari", "Red");
console.log(myCar.name);
console.log(myCar.color);

let newCar = {
  name: "Hero",
  color: "Black",
  wheels: 4,
};

// verify objects of constructors
console.log(myCar instanceof Car); // true
console.log(newCar instanceof Car); // false
console.log(bullDog instanceof Car); // false

// own property + iterate over all property
let ownProperties = [];
let prototypeProperties = [];
for (let property in myCar) {
  if (myCar.hasOwnProperty(property)) {
    ownProperties.push(property);
  } else {
    prototypeProperties.push(property);
  }
}
console.log(ownProperties);
console.log(prototypeProperties);

// constructor property
console.log(myCar.constructor === Car); // true
console.log(bullDog.constructor === Car); // false

function Bird(name, color) {
  this.name = name;
  this.color = color;
}

let crow = ("Meredith", "Black");

// adding prototype to a new object (prototype overriding)
Bird.prototype = {
  constructor: Bird,
  numLegs: 2,
  eat: function () {
    console.log("tik-tik-tik-tik");
  },
  describe: function () {
    console.log(
      "The name of the bird is " +
        this.name +
        " and has " +
        this.color +
        "color"
    );
  },
};

// use of isPrototypeOf()
console.log(Dog.prototype.isPrototypeOf(bullDog)); // true
console.log(Car.prototype.isPrototypeOf(newCar)); // false

// prototype chaining
console.log(typeof Bird.prototype);
console.log(Object.prototype.isPrototypeOf(Bird.prototype));
