// promise
const myPromise = new Promise((resolve, reject) => {
    let isTrue = true;
    if(isTrue) {
        resolve("Promise done\n");
    } else {
        reject("Promise rejected\n");
    }
});

// for resolve
myPromise.then(result => {
    console.log(result);
});

// for reject
myPromise.catch(error => {
    console.log(error);
});