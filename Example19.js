// constructor
class Vegetable {
    constructor(name) {
        this.name = name;
    }
}
const carrot = new Vegetable("carrot");
console.log(carrot.name);


// getter - setter
class Book {
    constructor(author) {
        this._author = author;
    }
    // getter
    get writer() {
        return this._author;
    }
    // setter
    set writer(writerName) {
        this._author = writerName;
    }
}
const algorithm = new Book("sipser");
console.log(algorithm.writer);
algorithm.writer = "coreman";
console.log(algorithm.writer);