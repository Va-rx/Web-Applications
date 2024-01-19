let container = document.querySelector("#container");
let showScore = document.querySelector("#score");
let mouseCursor = document.querySelector("#cursor");

let health = 3;
let score = 0;

let idIterator = 0;
let movement = {};
let play;

function spawnZombie() {
    let speed = Math.round(Math.random() * (5-1) + 1);
    let size = Math.round((Math.random() * (2-1) + 1) * 10) / 10;
    let posY = Math.round(Math.random() * (100-30) + 10);

    let zombie = document.createElement("div");
    zombie.classList.add("zombie");
    zombie.setAttribute("id", idIterator);
    zombie.addEventListener("click", kill);

    zombie.style.top = posY + "vh";
    zombie.style.left = 110 + "vw";
    zombie.style.transform = "scale(" + size + ")";

    container.appendChild(zombie);
    idIterator++;
    moveZombie(zombie, speed);
}

function moveZombie(zombie, speed) {
    let actuAnim = 0;
    let posX = 110;
    let value;

    switch(speed) {
        case 1:
            value = 50;
            break;
        case 2:
            value = 40;
            break;
        case 3:
            value = 30;
            break;
        case 4:
            value = 20;
            break;
        case 5:
            value = 10;
            break;
    }

    movement[zombie.id] = setInterval ( () => {
        zombie.style.left = posX + "vw";
        posX--;

        zombie.style.backgroundPosition = actuAnim + "px 0px";
        if(actuAnim > 1800) {
            actuAnim = 0;
            zombie.style.backgroundPosition = actuAnim + "px 0px";
        }

        actuAnim += 200;

        if(posX==0) {
            zombie.remove();
            health -= 1;

            if(health == 0) end();
            
            clearInterval(movement[zombie.id]);
        }
    }, value );
}

function miss() {
    score -= 6;
    updateScore();
}

function kill() {
    clearInterval(movement[this.id]);
    this.remove();
    score += 18;
    updateScore();
}

function updateScore() {
    showScore.innerHTML = score;
}

function pointer(e) {
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}

function end() {
    window.removeEventListener("mousemove", pointer)
    container.removeEventListener("click", miss);
    document.body.style.cursor="default";

    clearInterval(play);

    for(let i = 0; i < Object.keys(movement).length; i++) {
        clearInterval(movement[i]);
    }

    zombs = document.querySelectorAll('.zombie');
    zombs.forEach(zomb => {
        zomb.removeEventListener("click", kill);
    })

}

function start() {
    window.addEventListener("mousemove", pointer)
    container.addEventListener("click", miss);
    document.body.style.cursor="none";

    play = setInterval( () => {
        spawnZombie();
    }, 1000);
}

start();