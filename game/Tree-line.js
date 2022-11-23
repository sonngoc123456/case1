class Rectangle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
    }
    draw2() {
        this.ctx.beginPath();
        const image = new Image(this.width, this.height);
        image.src = 'image4.png';
        this.ctx.drawImage(image, this.x, this.y);
        this.ctx.closePath();
    }
    draw3() {
        this.ctx.beginPath();
        const image = new Image(this.width, this.height);
        image.src = 'image6.png';
        this.ctx.drawImage(image, this.x, this.y);
        this.ctx.closePath();
    }
    moveDown() {
        this.y += 25;
    }
}
function moveDownLine() {
    for(let i=0;i<lines.length;i++) {
        lines[i].moveDown();
        lines[i].draw2();
    }
}
function moveDownTree() {
    for(let i=0;i<trees.length;i++) {
        trees[i].moveDown();
        trees[i].draw3();
    }
}
