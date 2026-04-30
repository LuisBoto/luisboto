import "./css/pageStyle.css";
import "./css/canvasBackground.css";

import { MainLayer } from "./js/layers/MainLayer.js";
import { alternateLanguage } from "./js/Language.js";

let canvas;
let context;
let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;

let layer;
let fpsCap = 1000/60;
let lastFrame;

function start() {
    layer = new MainLayer();
    lastFrame = Date.now();
    if (navigator.hardwareConcurrency > 1)
        loop();
}

function loop() {
    requestAnimationFrame(loop);
    if ((Date.now() - lastFrame) > fpsCap) {
        layer.update();
        layer.draw();
        lastFrame = Date.now();
    }
}

function setUpCanvas() {
    document.querySelector('body').style.visibility = 'visible';
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
    start();
    window.addEventListener('resize', resize, false);
}, false);

export {
    canvasWidth,
    canvasHeight,
    context
}
