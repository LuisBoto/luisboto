let figures = [
    (size) => new ArrowFigure(size),
    (size) => new RectangularFigure(size),
    (size) => new CircleFigure(size),
    (size) => new SquareFigure(size),
    // (size) => new StarFigure(size)
];

let colors = [
    "#3183c5",
    "#315a83",
    "#ffffff",
    "#ffc552",
    "#7b1800",
    "#cd4120",
    "#94d5ff"
]

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
        (Math.random() * 3) + 1
    );
}

function getRandomFigureStrategy() {
    let index = Math.floor(Math.random()*figures.length);
    return figures[index](Math.random());
}

function getRandomColor() {
    return colors[Math.floor(Math.random()*colors.length)];
}