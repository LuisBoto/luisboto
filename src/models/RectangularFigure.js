class RectangularFigure extends DrawStrategy {

    constructor(size) {
        super(size);
    }

    draw(x, y) {
        context.fillStyle = "#1a237e";
        context.save();
        context.translate(x, y);
        context.rotate(45 * (Math.PI / 180));
        context.fillRect(0, 0, 50*this.size, 500*this.size);
        context.stroke();
        context.fill();
        context.restore();
    }
}