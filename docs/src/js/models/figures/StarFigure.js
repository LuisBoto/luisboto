import { DrawStrategy } from "./DrawStrategy.js";
import { context } from "../../../Main.js";

class StarFigure extends DrawStrategy {

    constructor(size) {
        super(size);
        this.rotation = 0;
        this.rotationFactor = Math.random()*3/100;
    }

    draw(x, y) {
        context.beginPath();
        context.translate(x, y);
        context.rotate(Math.PI + this.rotation)
        context.moveTo(0,0-this.size*40);
        for (var i = 0; i < 5; i++) {
            context.rotate(Math.PI / 5);
            context.lineTo(0, 0 - (this.size*80));
            context.rotate(Math.PI / 5);
            context.lineTo(0, 0 - this.size*40);
        }
        context.fill();
        context.closePath();
        this.rotation += this.rotationFactor;
    }
}

export {
    StarFigure
}