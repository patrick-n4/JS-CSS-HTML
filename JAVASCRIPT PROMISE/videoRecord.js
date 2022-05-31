let recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video one recorded');
});
let recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video two recorded');
});
let recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video three recorded ');
});
Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message)
})