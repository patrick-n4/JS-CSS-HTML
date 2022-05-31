let promise = new Promise((resolved, rejected) => {
    let a = 5 + 2;
    if (a == 10) {
        resolved('successed')
    } else {
        rejected('failed');
    }
});
promise.then((message) => {
    console.log("This is then and is " + message);
}).catch((message) => {
    console.log("This is catch and is " + message);
})