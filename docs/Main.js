// Canvas & context
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let minimumResize = 1;
let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;

let layer;

function start() {
    layer = new MainLayer();
    setInterval(loop, 1000 / 30);
}

function loop(){
    layer.update();
    layer.draw();
}

// Resize
window.addEventListener('load', resize, false);
function resize() {
    console.log("Resize")
    let resizeWidth = parseFloat(window.innerWidth / canvas.width);
    let resizeHeight = parseFloat(window.innerHeight / canvas.height);

    minimumResize = Math.min(resizeWidth, resizeHeight);
    canvas.width = canvas.width*minimumResize;
    canvas.height = canvas.height*minimumResize;

    context.scale(minimumResize, minimumResize);
}

start();
