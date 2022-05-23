let figures = [
    (size) => new ArrowFigure(size),
    (size) => new RectangularFigure(size),
];

function getRandomShape() {
    return new Shape(
        getRandomMovement(),
        getRandomFigureStrategy()
        );
}

function getRandomMovement() {
    return new Movement(
        -canvasWidth*0.3,
        Math.floor( Math.random() * canvasHeight*3 ),
        (Math.random() * 5) + 1
    );
}

function getRandomFigureStrategy() {
    let index = Math.floor(Math.random()*figures.length);
    return figures[index](Math.random());
}