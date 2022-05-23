class Shape {

    constructor(movement, drawStrategy) {
        this.movement = movement;
        this.drawStrategy = drawStrategy;
    }

    update() {
        this.movement.applySpeed();
        this.checkShapeChange();
    }

    draw() {
        this.drawStrategy.draw(this.movement.x, this.movement.y);
    }

    checkShapeChange() {
        if (this.movement.isOutOfScreen()) 
            this.changeShape();
    }

    changeShape() {
        this.drawStrategy = getRandomFigureStrategy();
        this.movement = getRandomMovement();
    }
}