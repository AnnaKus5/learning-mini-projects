const colors = ["red", "green", "rgb(126, 45, 34)", "#2F32A9"];

const btn = document.querySelector(".btn");

const colorName = document.querySelector(".color-name");

btn.addEventListener("click", function () {
    let randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    colorName.innerHTML = colors[randomNumber];
})

function getRandomNumber () {
    return Math.floor(Math.random() * colors.length);
}
