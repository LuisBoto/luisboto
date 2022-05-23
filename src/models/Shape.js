class Shape {

    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
    }

    update() {
        this.x += this.speed;
        this.y -= this.speed;
        this.checkBoundaries();
    }

    draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.particleRadius, 0, 2*Math.PI)
        context.lineWidth = 2;
        context.stroke();
        context.fillStyle = "red";
        context.fill();
        context.closePath();
        context.beginPath();
        context.arc(this.x, this.y, 10, 90, 270);
        context.fillStyle = "white";
        context.fill();
        context.closePath();
    }


    checkBoundaries() {
        if (this.x > canvasWidth)
            this.x = this.x%canvasWidth;
        if (this.x < 0)
            this.x = canvasWidth-this.x;
        if (this.y > canvasHeight)
            this.y = this.y%canvasHeight
        if (this.y < 0)
            this.y = canvasHeight-this.y;
    }
}