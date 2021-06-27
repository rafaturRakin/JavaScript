// basic object
let food = {
    name: "Apple",
    size: "Small"
};
let prop = 'value';

food.origin = "BD";
food['color'] = "Green";
food[prop] = 100;
console.log(food);

// nested object
let userActivity = {
    id: 1802001,
    user: "Unknown",
    activity: {
        online: 20,
        offline: 10,
        "not respond": 5
    }
};
userActivity.activity["not respond"] = 15;
console.log(userActivity);

// deleting property
delete food.origin;
console.log(food);

// check for an property
console.log('id' in userActivity);
console.log(userActivity.hasOwnProperty('total user'));

// iterate with for...in loop
for(item in food) {
    console.log(item, " : ", food[item]);
}

// object keys
let keyArray = Object.keys(food);
console.log(keyArray);
