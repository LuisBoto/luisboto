import { canvasWidth, canvasHeight } from "../../Main.js";

class Movement {
    constructor(x, y, speed) {
        this.x = x,
        this.y = y;
        this.speed = speed;
    }

    applySpeed() {
        this.x += this.speed;
        this.y -= this.speed;
    }

    isOutOfScreen() {
        return (this.x > canvasWidth*1.5 ||
            this.y < -canvasHeight*0.5);
    }
}

export {
    Movement
}