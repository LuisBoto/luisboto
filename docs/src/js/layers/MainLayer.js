import { Layer } from "./Layer.js";
import { canvasWidth, canvasHeight, context } from "../../Main.js";
import { getRandomShape } from "../models/ShapeBuilder.js";
import { bgColor } from "../models/ShapeBuilder.js";

class MainLayer extends Layer {

    constructor() {
        super();
        this.shapeNumber = 15;
        this.initiate();
    }

    initiate() {
        this.shapes = [];
        for (let i = 0; i < this.shapeNumber; i++)
            this.shapes.push(getRandomShape());
    }

    update() {
        this.shapes.forEach(shape => shape.update());
    }

    draw() {
        this.drawBackground();
        this.shapes.forEach(shape => shape.draw());
    }

    drawBackground() {
        context.fillStyle = bgColor;
        context.fillRect(0, 0, canvasWidth, canvasHeight);
    }

}

export {
    MainLayer
}
