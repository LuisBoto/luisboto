import "./css/pageStyle.css";
import "./css/canvasBackground.css";

import { MainLayer } from "./js/layers/MainLayer.js";
import { alternateLanguage, setResumeLink } from "./js/Language.js";

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;

let layer;

function start() {
    layer = new MainLayer();
    if (navigator.hardwareConcurrency > 2)
        loop();
}

function loop(){
    layer.update();
    layer.draw();
    requestAnimationFrame(loop);
}

// Resize
window.addEventListener('resize', resize, false);
function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvasWidth = window.innerWidth;
    canvasHeight = window.innerHeight;
}

alternateLanguage();
setResumeLink();
start();

export {
    canvasWidth,
    canvasHeight,
    context
}
