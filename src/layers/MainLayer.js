class MainLayer extends Layer {

    constructor() {
        super();
        this.initiate();
    }

    initiate() {
        this.shapes = [];
        this.shapes.push(new RectangularShape(0, canvasHeight*1.5, 10, 1));
    }

    update() {
        this.shapes.forEach(shape => shape.update());
    }

    draw() {
        this.drawBackground();
        this.shapes.forEach(shape => shape.draw());
    }

    drawBackground() {
        context.fillStyle = "#000a12";
        context.fillRect(0, 0, canvasWidth, canvasHeight);
    }

}
