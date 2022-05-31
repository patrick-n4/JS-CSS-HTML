let promise = new Promise((resolve, reject) => {
    let b = 5 + 6;
    if (b == 11) {
        resolve('Success');
    } else {
        reject('Failed')
    }
}).then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
}).then((message) => {
    console.log("This is also another then")
})