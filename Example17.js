// spread operator
let arr1 = [1, 2, 3, 4, 5, 6, 7];
let arr2 = [...arr1];
const newFun = (...arr) => {console.log(arr.length)};
newFun(arr2);

// destructing assignment
let myObj = {
    name: "Car",
    size: "small"
};
const {name, size} = myObj;
console.log(name, size);

// assigning new variable names
const {name:userName, size:capacity} = myObj;
console.log(userName, capacity);

// destructuring from nested object
const temperatures = {
    today : {low: 20, high: 40},
    previous: {low: 10, high: 60}
};
const {today: {low:lowToday, high:highToday}} = temperatures;
console.log(lowToday, highToday);

// destructuring arrays
const [a, b] = arr1;
console.log(a, b);
const [x,,, y] = arr2;
console.log(x, y);
const [p, q, ...ar] = arr2;
console.log(ar);

// destructuring objects for function parameter
const printDetails = ({name, size}) => {
    console.log("Name is : ",name);
    console.log("Capacity is : ",size);
}
printDetails(myObj);
