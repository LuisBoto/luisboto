class Shape {

    constructor(x, y, speed, size) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.size = size;
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
        if (this.x > canvasWidth*1.5 ||
            this.x < -canvasWidth*1.5 ||
            this.y > canvasHeight*1.5 ||
            this.y < -canvasHeight*1.5)
            this.changeShape();
    }

    changeShape() {}
}