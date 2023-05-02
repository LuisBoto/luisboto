import { DrawStrategy } from "./DrawStrategy.js";
import { context } from "../../../Main.js";

class RectangularFigure extends DrawStrategy {

    constructor(size) {
        super(size);
    }

    draw(x, y) {
        context.translate(x, y);
        context.rotate(225 * (Math.PI / 180));
        context.beginPath();
        context.fillRect(0, 0, 90*this.size, 800*this.size);
        context.fill();
        context.closePath();
    }
}

export {
    RectangularFigure
}