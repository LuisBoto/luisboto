class MainLayer extends Layer {

    constructor() {
        super();
        this.initiate();
    }

    initiate() {
        this.shapes = [];
        this.shapes.push(new ArrowShape(0, 0, 2));
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
