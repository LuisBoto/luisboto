class ArrowShape extends Shape {

    constructor(x, y, speed, size) {
        super(x, y, speed, size);
    }

    draw() {
        context.fillStyle = "#1a237e";
        context.beginPath();
        context.moveTo(this.x, this.y);
        context.lineTo(this.x + 300*this.size, this.y - 150*this.size);
        context.lineTo(this.x + 150*this.size, this.y + 150*this.size);
        context.lineTo(this.x, this.y);
        context.stroke();
        context.fill();
        context.closePath();
    }
}