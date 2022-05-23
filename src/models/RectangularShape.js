class RectangularShape extends Shape {

    constructor(x, y, speed, size) {
        super(x, y, speed, size);
    }

    draw() {
        context.fillStyle = "#1a237e";
        context.save();
        context.translate(this.x, this.y);
        context.rotate(45 * (Math.PI / 180));
        context.fillRect(0, 0, 50*this.size, 500*this.size);
        context.stroke();
        context.fill();
        context.restore();
    }
}