// Canvas & context
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;

let layer;

function start() {
    layer = new MainLayer();
    setInterval(loop, 1000 / 20);
}

function loop(){
    layer.update();
    layer.draw();
}

// Resize
window.addEventListener('resize', resize, false);
function resize() {
    console.log("Resize")
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvasWidth = window.innerWidth;
    canvasHeight = window.innerHeight;
}

start();
