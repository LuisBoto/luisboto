class SquareFigure extends DrawStrategy {

    constructor(size) {
        super(size);
        this.stroked = Math.random() > 0.8;
    }

    draw(x, y) {
        context.translate(x, y);
        context.rotate(45 * (Math.PI / 180));
        context.beginPath();
        if (this.stroked)
            context.strokeRect(0, 0, 100*this.size, 100*this.size);
        else
            context.fillRect(0, 0, 100*this.size, 100*this.size);
        context.lineWidth = this.size*10;
        context.stroke();
        context.closePath();
    }
}