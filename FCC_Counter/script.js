const number = document.querySelector(".number");
const decrease = document.querySelector(".decrease");
const increase = document.querySelector(".increase");
const reset = document.querySelector(".reset");

decrease.addEventListener("click", function () {
    let newNumber = number.innerHTML - 1;
    number.innerHTML = newNumber;
    getColor();
});

increase.addEventListener("click", function () {
    let newNumber = Number.parseInt(number.innerHTML) + 1;
    number.innerHTML = newNumber;
    getColor();
});

reset.addEventListener("click", function () {
    let newNumber = 0;
    number.innerHTML = newNumber;
    getColor();
});

function getColor () {
    console.log(Number.parseInt(number.innerHTML));
    if (Number.parseInt(number.innerHTML) === 0) number.style.color = "black";
        else if (Number.parseInt(number.innerHTML) > 0) number.style.color = "green";
        else number.style.color = "red";
};