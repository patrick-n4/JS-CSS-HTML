let changeEl = document.getElementById('incomeIn');
let displayEl = document.getElementById('display');
changeEl.addEventListener('change', () => {
    displayEl.textContent = changeEl.value + "K"
})