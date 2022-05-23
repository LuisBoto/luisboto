class StarFigure extends DrawStrategy {

    constructor(size) {
        super(size);
    }

    draw(x, y) {
        context.beginPath();
        context.translate(x, y);
        context.moveTo(0,0-this.size*40);
        for (var i = 0; i < 5; i++) {
            context.rotate(Math.PI / 5);
            context.lineTo(0, 0 - (this.size*80));
            context.rotate(Math.PI / 5);
            context.lineTo(0, 0 - this.size*40);
        }
        context.fill();
        context.closePath();
    }
}