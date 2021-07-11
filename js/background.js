const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const body = document.getElementById("body");
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.classList.add('bgImage');
document.body.prepend(bgImage);

//document.body.appendChild(bgImage);