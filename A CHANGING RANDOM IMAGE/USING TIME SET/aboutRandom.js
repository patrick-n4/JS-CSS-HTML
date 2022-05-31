function getRandom(a, b) {
    return Math.floor(Math.random() * (b - a) + a);
}
console.log(getRandom(1, 8))