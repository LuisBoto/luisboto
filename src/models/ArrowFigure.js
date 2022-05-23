class ArrowFigure extends DrawStrategy {

    constructor(size) {
        super(size);
    }

    draw(x, y) {
        context.fillStyle = "#1a237e";
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(x + 300*this.size, y - 150*this.size);
        context.lineTo(x + 150*this.size, y + 150*this.size);
        context.lineTo(x, y);
        context.stroke();
        context.fill();
        context.closePath();
    }
}