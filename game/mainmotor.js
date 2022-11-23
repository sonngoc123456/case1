
class Motor {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
    }
    draw() {
        this.ctx.beginPath();
        let image = new Image(this.width, this.height);
        image.src = 'image.png';
        this.ctx.drawImage(image, this.x, this.y);
        this.ctx.closePath();
    }
    moveLeft() {
        if (this.x > 50) {
            this.x -= 25;
        } else {
            this.moveRight();
        }
    }
    moveRight() {
        if (this.x < this.canvas.height - this.height - 170) {
            this.x += 25;
        } else {
            this.moveLeft();
        }
    }
    moveTop() {
        if (this.y > 0) {
            this.y -= 10;
        } else {
            this.moveDown();
        }
    }
    moveDown() {
        if (this.y < this.canvas.width - this.width) {
            this.y += 10;
        } else {
            this.moveTop();
        }
    }
    // collision(intervalId) {
    //     let score = 0;
    //         if (bars[i].y + bars[i].height >= this.y
    //             && bars[i].y <= this.y + this.height
    //             && bars[i].x <= this.x + this.width
    //             && bars[i].x + bars[i].width >= this.x
    //         ) {
    //             clearInterval(intervalId);
    //             alert('GAME OVER');
    //             window.location.reload();
    //         } else {
    //                 if(bars[i].y >= this.canvas.height) {
    //                     score++;
    //                 }
    //             }
    //     document.getElementById('myscore').innerHTML =score;
    //         }
}
