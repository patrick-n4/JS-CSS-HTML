function carChangerdef() {
    document.getElementById('photo_taker').src = 'def_image/FIAT_def.jpg'
}

function carChanger1() {
    document.getElementById('photo_taker').src = 'images/BMW.jpg'
}

function carChanger2() {
    document.getElementById('photo_taker').src = 'images/HUNDAI.jpg'
}

function carChanger3() {
    document.getElementById('photo_taker').src = 'images/TOYOTA.jpg'
}

function carChanger4() {
    document.getElementById('photo_taker').src = 'images/VOLVO.jpg'
}

function carChanger5() {
    document.getElementById('photo_taker').src = 'images/BENZ.jpg'
}

let number = 0;

function next() {


    const images = [
        'url("background/background_img_1.jpg")',
        'url("background/background_img_2.jpg")',
        'url("background/background_img_3.jpg")',
        'url("background/background_img_4.jpg")',
        'url("background/background_img_5.jpg")',
        'url("background/background_img_6.jpg")'

    ]
    let all = images.length;
    number = number + 1;
    if (number >= all) {
        number = 0;
    }
    // const section = document.querySelector('body')
    // const bg = images[Math.floor(Math.random() *
    //     images.length)];
    // section.style.backgroundImage = bg;

    document.body.style.backgroundImage = images[number];




}
// setInterval(changeBg,4500)