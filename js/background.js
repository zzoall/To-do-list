const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
];


const chosenImage = images[Math.floor(Math.random() * images.length)];

// js로 html에 img 넣기
const bgImage = document.createElement("img"); 
bgImage.src = `img/${chosenImage}`

// console.log(bgImage);

document.body.appendChild(bgImage);