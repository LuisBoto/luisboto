class ArrowFigure extends DrawStrategy {

    constructor(size) {
        super(size);
        this.stroked = Math.random() > 0.2;
    }

    draw(x, y) {
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(x + 150*this.size, y - 75*this.size);
        context.lineTo(x + 75*this.size, y + 75*this.size);
        context.lineTo(x + 55*this.size, y - -20*this.size);
        context.lineTo(x, y);
        if (this.stroked) 
            context.stroke(); 
        else
            context.fill();
        context.closePath();
    }
}