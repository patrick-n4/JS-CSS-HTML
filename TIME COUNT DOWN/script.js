let seconds = 60;
let minutes = 59;
let hours = 0;
setInterval(() => {
    seconds = seconds - 1;
    if (seconds == 00) {
        seconds = 59;
    }
    if (seconds <= 9) {
        let dislayer = document.getElementById('show');
        dislayer.textContent = "0" + seconds;
    } else {
        let dislayer = document.getElementById('show');
        dislayer.textContent = seconds;

    }

}, 1000)
setInterval(() => {
    minutes = minutes - 1;
    if (minutes <= 00) {
        minutes = 59;
    }
    if (minutes <= 9) {
        let dislayer = document.getElementById('shower');
        dislayer.textContent = "0" + minutes;
    } else {
        let dislayerMinutes = document.getElementById('shower');
        dislayerMinutes.textContent = minutes + ":";
    }


}, 60000)
setInterval(() => {
    hours = hours - 1;
    if (hours <= 0) {
        seconds = 0;
    }
    let displayerHours = document.getElementById('showers');
    displayerHours.textContent = hours + ":";

}, 3600000)