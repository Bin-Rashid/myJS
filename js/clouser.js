/*function clickHandler (color) {
    document.body.style.backgroundColor = `${color}`;
}

document.querySelector("#orange").onclick = clickHandler("orange");
document.querySelector("#green").onclick = clickHandler("green");*/


function clickHandler (color) {
    return function () {
    document.body.style.backgroundColor = `${color}`;
    }
}

document.querySelector("#orange").onclick = clickHandler("orange");
document.querySelector("#green").onclick = clickHandler("green");