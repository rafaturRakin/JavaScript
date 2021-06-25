// import
import {person} from "./Example18.js";
person("Rakin", 23);

import * as math from "./Example10.js";
math.trueOrFalse(true);

// export
const add = (a, b) => {
    return a + b;
}

const minus = (a, b) => {
    return a - b;
}

export {add, minus};

export const product = (x, y) => {
    return x*y;
}

// default export
export default function division (x, y) {
    if(y==0) {
        return NaN;
    }
    return x/y;
}