//getElementById(income_increase).innerHTML=increase();
// let increaseEl=document.getElementById('income_increase');
// let incomeDisplay = document.getElementById('incomeDisplay');

// increaseEl.addEventListener('change', ()=>{
//     incomeDisplay.textContent = increaseEl.value + "K";
//     console.log(increaseEl.value + "K")
// })
//  let count=20;
// function increase(){
//  count=count+20;
//  increaseEl.innerHTML=count;
//  console.log(count);
// }
let incomeIncrease = document.getElementById('income_increase');
incomeIncrease.addEventListener('change', () => {
    document.getElementById('incomeDisplay').innerHTML = incomeIncrease.value + "K";
})