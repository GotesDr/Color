function changeColor() {
    let r = randomNumber(0, 255);
    let g = randomNumber(0, 255);
    let b = randomNumber(0, 255);

    document.body.style.background = `rgb(${r}, ${g}, ${b})`;
}
function returnColor() {
    document.body.style.background = `rgb(255, 255, 255)`;

}

function randomNumber(min, max) {
    return Math.floor((Math.random() * (max - min)) + min);
}