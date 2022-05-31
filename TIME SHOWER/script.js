//let hours = document.getElementById('hours');
//let minutes = document.getElementById('minutes');
//let seconds = document.getElementById('seconds');
setInterval(() => {
    var hoursPer = (new Date()).getHours();
    let hoursHH = document.getElementById('hours');
    hoursHH.textContent = hoursPer + " :";


}, 1000)
setInterval(() => {
    var minutesPer = (new Date()).getMinutes();
    let minutes = document.getElementById('minutes');
    minutes.textContent = minutesPer + " :";


}, 1000)
setInterval(() => {
    var secondsPer = (new Date()).getSeconds();
    let seconds = document.getElementById('seconds');
    seconds.textContent = secondsPer;
}, 1000)