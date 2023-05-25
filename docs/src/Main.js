import "./css/pageStyle.css";
import "./css/canvasBackground.css";

import { MainLayer } from "./js/layers/MainLayer.js";
import { alternateLanguage, setResumeLink } from "./js/Language.js";

let canvas;
let context;
let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;

let layer;

function start() {
    layer = new MainLayer();
    if (navigator.hardwareConcurrency > 1)
        loop();
}

function loop(){
    layer.update();
    layer.draw();
    requestAnimationFrame(loop);
}

function setUpCanvas() {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvasWidth = window.innerWidth;
    canvasHeight = window.innerHeight;
}

window.addEventListener('load', () => {
    setUpCanvas();
    alternateLanguage();
    setResumeLink();
    start();
    window.addEventListener('resize', resize, false);
}, false);

export {
    canvasWidth,
    canvasHeight,
    context
}
