//Make a new html page with a small image/character. Make it move up/down/left/right 20px when pressing the arrow keys (see example in https://cambridge-dev.com/program/222)

let dragon = document.getElementById("dragon");

let dragonFireball = document.createElement('img');
dragonFireball.src = "dragon_fireball.png";
dragonFireball.alt = 'Dragon breathing fire';

let x = 100
let y = 100

console.log('hi');
function moveDragon(event) {
    //console.log("Pressed", event);
    if (event.key === "ArrowLeft" && y < -20) {
        y = -20
    }
    if (event.key === "ArrowRight" && y > 1140) {
        y = 1140
    }
    if (event.key === "ArrowUp" && x < -20) {
        x = -20
    }
    if (event.key === "ArrowDown" && x > 540) {
        x = 540
    }
    if (event.key === "c") {
        dragon.src = "dragon_fireball.png"
        dragon.style.maxWidth = "90px"
        console.log("KeyC Clicked")
    }
    /*
    if (event.key === "ArrowUp") {
        x = x - 20;
        dragon.style.top = x + 'px';
        console.log("Up", x);
    }
    if (event.key === "ArrowDown") {
        x = x + 20;
        dragon.style.top = x + 'px';
        console.log("down", x);
    }
    if (event.key === "ArrowLeft") {
        y = y - 20;
        dragon.style.left = y + 'px';
        console.log("left", y);
    }
    if (event.key === "ArrowRight") {
        y = y + 20;
        dragon.style.left = y + 'px';
        console.log("right", y);
    }
    */
    if (event.key === "ArrowUp") {
        x = x - 20;
    }
    if (event.key === "ArrowDown") {
        x = x + 20;
    }
    if (event.key === "ArrowLeft") {
        y = y - 20;
    }
    if (event.key === "ArrowRight") {
        y = y + 20;
    }
    dragon.style.left = y + 'px';
    dragon.style.top = x + 'px';
    console.log(x,y);
}
document.addEventListener("keydown", moveDragon);

function handleKeyUp(event) {
    console.log("keyup", Event);
    if (event.key === "c") {
        dragon.src = "dragon.png";
        dragon.style.maxWidth = "60px"
    }
}
document.addEventListener("keyup", handleKeyUp);

//add condition for dragon to stay on the screen (if left < 0, do not move) or (if left < 0, don't change y value). Don't worry about responsive screen, just set width for right movement and vertical height
