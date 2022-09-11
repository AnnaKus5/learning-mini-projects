const colors = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const btn = document.querySelector(".btn");

const colorName = document.querySelector(".color-name");

btn.addEventListener("click", function () {
    let randomColor = getColor();
    document.body.style.backgroundColor = randomColor;
    colorName.innerHTML = randomColor;
})

function getColor () {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += colors[getRamdomNumer()];
    }
    return hexColor;
}

function getRamdomNumer () {
    return Math.floor(Math.random() * colors.length);
} 