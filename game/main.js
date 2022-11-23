let motor = new Motor(400,550,40,30);
motor.draw();
function creatBar() {
    let barrier = new Barrier(Math.floor(Math.random() * (450-100)) + 100,0,50,30);
    barrier.draw1()
}
setInterval(creatBar,90)

let lines = [];
function creatLines() {
    let line = new Rectangle(289,10,50,30);
    lines.push(line);
}
setInterval(creatLines,500)
let trees = [];
function creatTrees() {
    let tree = new Rectangle(0,10,50,30);
    let tree1 = new Rectangle(560,10,50,30);
    trees.push(tree,tree1);
}
setInterval(creatTrees,500);


function clearCanvas() {
    let canvas = document.getElementById('myCanvas');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 600, 700);
}
function play() {
    clearCanvas();
    moveDownLine();
    moveDownTree();
    barrier.moveDown1();
    barrier.draw1();
    motor.draw();

   // motor.collision(intervalId);

}
let intervalId = setInterval(play,50);
window.addEventListener("keydown", function (event){
    switch (event.keyCode) {
        case 37:
            motor.moveLeft();
            break;
        case 39 :
            motor.moveRight();
            break;
        case 38 :
            motor.moveTop();
            break;
        case 40:
            motor.moveDown();
            break;
    }
}
)


