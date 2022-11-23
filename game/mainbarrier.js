class Barrier {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
    }
    draw1() {
        this.ctx.beginPath();
        const image = new Image(this.width, this.height);
        image.src = 'image2.png';
        this.ctx.drawImage(image, this.x, this.y);
        this.ctx.closePath();
    }
    moveDown1() {
            this.y += 25;
    }
}


