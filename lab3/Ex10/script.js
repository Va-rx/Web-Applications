let object = document.querySelector("#object");
let playground = document.querySelector("#playground");

let object1 = document.getElementById("object");

playground.addEventListener("click", move, {capture: false});
container.addEventListener("click", outOfArea);


function move(e) {
    event.stopPropagation();
    let parentPosition = getPosition(playground);
    let posX = e.clientX - parentPosition.x - object.offsetWidth / 2;
    let posY = e.clientY - parentPosition.y - object.offsetHeight /2;

    object1.style.transform = "translate3d(" + posX + "px, " + posY + "px, 0)";
}

function getPosition(element) {
    let posX = 0;
    let posY = 0;

    while(element) {
        posX += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        posY += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }
    return {
        x: posX,
        y: posY
    };
}

function outOfArea(){
    alert("Nie tutaj!!! :(");
}