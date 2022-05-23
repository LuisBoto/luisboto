class Shape {

    constructor(movement, drawStrategy) {
        this.movement = movement;
        this.drawStrategy = drawStrategy;
        this.color = getRandomColor();
    }

    update() {
        this.movement.applySpeed();
        this.checkShapeChange();
    }

    draw() {
        context.save();
        this.updateColor();
        this.drawStrategy.draw(this.movement.x, this.movement.y);
        context.restore();
    }

    updateColor() {
        context.fillStyle = this.color;
        context.strokeStyle = this.color;
    }

    checkShapeChange() {
        if (this.movement.isOutOfScreen()) 
            this.changeShape();
    }

    changeShape() {
        this.drawStrategy = getRandomFigureStrategy();
        this.movement = getRandomMovement();
        this.color = getRandomColor();
    }
}