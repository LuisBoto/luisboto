class MainLayer extends Layer {

    constructor() {
        super();
        this.initiate();
    }

    initiate() {
        this.shapes = [];
        this.shapes.push(new Shape(0, 0, 10));
    }

    update() {
        this.shapes.forEach(shape => shape.update());
    }

    draw() {
        context.fillStyle = "blue";
        context.fillRect(0, 0, canvasWidth, canvasHeight);
        this.shapes.forEach(shape => shape.draw());
    }

}
