// mixing unrelated objects
let bird = {
  name: "Crow",
  legs: 2,
};

let plane = {
  color: "White",
  passengers: 547,
};

let flyMixin = function (obj) {
  obj.fly = function () {
    console.log("Flying. foo foo foo!!!");
  };
};

flyMixin(bird);
flyMixin(plane);

bird.fly();
plane.fly();

// closure
function Bird() {
  let weight = 20;
  this.getWeight = function () {
    return weight;
  };
}

let duck = new Bird();
console.log(duck.getWeight());

// IIFE
(function () {
  console.log("Immediately Invoked Function Expression");
})();

// IIFE to create a module
let funModule = (function () {
  return {
    isCuteMixin: function (obj) {
      obj.isCute = function () {
        return true;
      };
    },
    isSingMixin: function (obj) {
      obj.sing = function () {
        console.log("Singing!!!");
      };
    },
  };
})();

funModule.isCuteMixin(duck);
funModule.isSingMixin(duck);
console.log(duck.isCute());
duck.sing();
