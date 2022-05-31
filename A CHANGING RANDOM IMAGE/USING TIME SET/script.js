function randomImg() {

    let i = 0;
    let randomNum;
    let images = ['images/image_1.jpeg', 'images/image_2.jpeg', 'images/image_3.jpeg',
        'images/image_4.jpeg', 'images/image_5.jpeg'
    ]
    let imagesLength = images.length - 1;
    randomNum = Math.floor(Math.random() * (imagesLength - i) + i);
    document.querySelector('.img').src = images[randomNum]

}