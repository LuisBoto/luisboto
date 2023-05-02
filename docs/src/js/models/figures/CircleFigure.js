import { DrawStrategy } from "./DrawStrategy.js";
import { context } from "../../../Main.js";

class CircleFigure extends DrawStrategy {

    constructor(size) {
        super(size);
        this.stroked = Math.random() > 0.8;
    }

    draw(x, y) {
        context.beginPath();
        context.arc(x, y, this.size*70, 0, 2*Math.PI, false);
        context.lineWidth = this.size*20;
        if (this.stroked)
            context.stroke();
        else
            context.fill();
        context.closePath();
    }
}

export {
    CircleFigure
}