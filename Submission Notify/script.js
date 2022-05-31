let open = document.querySelector('.btn')
let close = document.querySelector('.close');
open.addEventListener('click', () => {
    let open = document.querySelector('.pop-up');
    open.classList.add("open-pop-up")
})
close.addEventListener('click', () => {
    let popUp = document.querySelector('.pop-up');
    popUp.classList.remove("open-pop-up")

})
document.querySelector('.close').addEventListener('press',()=>{
    console.log("Hello world");
})
document.addEventListener('keypress', e=>{
    console.log(e.key.toUpperCase +" button is pressed.");
})