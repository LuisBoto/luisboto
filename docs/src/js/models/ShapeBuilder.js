import { canvasWidth, canvasHeight } from "../../Main";
import { Shape } from "./Shape.js";
import { Movement } from "./Movement.js";
import { ArrowFigure } from "./figures/ArrowFigure.js";
import { RectangularFigure } from "./figures/RectangularFigure.js";
import { CircleFigure } from "./figures/CircleFigure.js";
import { SquareFigure } from "./figures/SquareFigure.js";
import { StarFigure } from "./figures/StarFigure.js";

let figures = [
    (size) => new ArrowFigure(size),
    (size) => new RectangularFigure(size),
    (size) => new CircleFigure(size),
    (size) => new SquareFigure(size),
    (size) => new StarFigure(size)
];

let bgColor = "#0d0d0d";
let colors = [
    "#de5239",
    "#8bc5cd",
    "#62d5b4",
    "#f6bd20",
    "#3183c5",
    "#39627b",
    "#83e631",
    "#e65a20",
    "#F5A9B8",
    "#C479A2",
    "#6D82D1"
];

function getRandomShape() {
    return new Shape(
        getRandomMovement(),
        getRandomFigureStrategy()
        );
}

function getRandomMovement() {
    return new Movement(
        -canvasWidth*0.5,
        (Math.random()*0.7 + 0.3) * (canvasHeight*2 + (canvasWidth*1.5)/Math.tan(45)),
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

export {
    bgColor,
    getRandomShape,
    getRandomMovement,
    getRandomFigureStrategy,
    getRandomColor
}