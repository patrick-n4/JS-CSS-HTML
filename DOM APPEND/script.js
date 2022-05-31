let container = document.querySelector(".container");
let elementH2 = document.createElement("h2");
let elementp = document.createElement("p");
elementH2.textContent = "Two";
elementp.textContent = "This is content of head 2";
const target = document.querySelector(".target");
container.insertBefore(elementH2, target);
container.insertBefore(elementp, target);
elementH2.style.cssText = "color: red; background-color: green";
