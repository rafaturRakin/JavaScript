// creating objects
var car = {
    name: "Tata",
    owner: "Ratan Tata",
    published: 1990,
    "cost": 50000,
    engine: 1
};

// access values with (.) notation
var carName = car.name; // "Tata"
// access values with bracket ([]) notation
var carOwner = car[owner];  // "Ratan Tata"
// access with variable value
var value = "cost";
var carCost = car[value];   // 50000

// updating property
car.name = "Tesla";
car.owner = "Elon Mask";

// adding new property
car.automatic = true;
car[wheel] = 5;

// deleting property
delete car.wheel;
delete car[automatic];

// checking object has the property or not
var boolValue;
boolValue = car.hasOwnProperty("name"); // true
boolValue = car.hasOwnProperty("country");  // false

// nested object
var outter = {
    "first layer" : {
        "second layer" : {
            value : 1,
            range : 10,
        },

        "inside value" : 5
    },
    "outside value" : 50
};

value = outter["first layer"]["second layer"].value;    // 1
value = outter["first layer"]["inside value"];          // 5
value = outter["outside value"];                        // 50