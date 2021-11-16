// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

function Ball(x, y, velx, vely, color, size) {
    this.x = x;
    this.y = y;
    this.velx = velx;
    this.vely = vely;
    this.color = color;
    this.size = size;
}

Ball.prototype.draw = function (){
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
}

Ball.prototype.update = function () {
    if((this.x + this.size) >= width) {
        this.velx = -(this.velx);
    }
    if ((this.x - this.size) <= 0) {
        this.velx = -(this.velx);
    }
    if ((this.y + this.size) >= height) {
        this.vely = -(this.vely);
    }
    if ((this.y - this.size) <= 0) {
        this.vely = -(this.vely);
    }
    this.x += this.velx;
    this.y += this.vely;
}
Ball.prototype.collisionDetect = function() {
    for (var j = 0; j < balls.length; j++) {
        if (!(this === balls[j])) {
            var dx = this.x - balls[j].x;
            var dy = this.y - balls[j].y;
            var distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < this.size + balls[j].size) {
                balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random
            }
        }
    }
}

var balls = [];

function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height);
    while (balls.length < 25) {
        var size = random(10, 20);
        var ball = new Ball(
// la posición de las pelotas, se dibujará al menos siempre
// como mínimo a un ancho de la pelota de distancia al borde del
// canvas, para evitar errores en el dibujo
            random(0 + size, width - size),
            random(0 + size, height - size),
            random(-7, 7),
            random(-7, 7),
            'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')',
            size
        );
        balls.push(ball);
    }
    for (var i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].update();
        balls[i].collisionDetect();
    }
    requestAnimationFrame(loop);
}

loop();