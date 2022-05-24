let figures = [
    (size) => new ArrowFigure(size),
    (size) => new RectangularFigure(size),
    (size) => new CircleFigure(size),
    (size) => new SquareFigure(size),
    // (size) => new StarFigure(size)
];

let bgColor = "#000";
let colors = [
    "#016d31",
    "#031c6e",
    "#e8b422",
    "#c32011",
]

function getRandomShape() {
    return new Shape(
        getRandomMovement(),
        getRandomFigureStrategy()
        );
}

function getRandomMovement() {
    return new Movement(
        -canvasWidth*0.5,
        Math.floor( Math.random() * (canvasHeight + (canvasWidth*1.5)/Math.tan(45)) + canvasHeight/3 ),
        (Math.random()*2) + 1
    );
}

function getRandomFigureStrategy() {
    let index = Math.floor(Math.random()*figures.length);
    return figures[index](Math.random()*0.75+0.15);
}

function getRandomColor() {
    return colors[Math.floor(Math.random()*colors.length)];
}