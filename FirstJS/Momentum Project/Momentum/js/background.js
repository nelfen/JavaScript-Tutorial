const images = ["0.png", "1.png", "4.png", "6.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//const bgImage = document.createElement("img");
//bgImage.src = `img/${chosenImage}`;
//document.body.appendChild(bgImage);

document.body.style.backgroundImage = `url(img/${chosenImage})`;

if (chosenImage === "0.png") {
    document.body.style.color = "black";
} else {
    document.body.style.color = "white";
}