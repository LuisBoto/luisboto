class ArrowShape extends Shape {

    constructor(x, y, speed) {
        super(x, y, speed);
    }

    draw() {
        context.fillStyle = "#1a237e";
        context.beginPath();
        context.moveTo(this.x, this.y);
        context.lineTo(this.x+300, this.y-150);
        context.lineTo(this.x+150, this.y+150);
        context.lineTo(this.x, this.y);
        context.stroke();
        context.fill();
        context.closePath();
    }
}