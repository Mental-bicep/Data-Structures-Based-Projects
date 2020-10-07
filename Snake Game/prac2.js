canvas = document.getElementById("canvas");
pen = canvas.getContext("2d");
// pen.fillStyle = "red";
// pen.fillRect(0, 0, 15.5, 10);
function init() {

    h = canvas.height;
    w = canvas.width;
    cs = 8;
    class snake {

        constructor() {
            this.len = 5;
            this.color = "red";
            this.cells = [];
            this.direction = "right";
        }

        createSnake() {
            console.log("running createSnake func.")
            for (var i = this.len; i > 0; i--)
                this.cells.push({ x: i, y: 0 });
        }

        drawSnake() {
            for (var i = 0; i < this.cells.length; i++) {
                pen.fillStyle = this.color;
                pen.fillRect(this.cells[i].x * cs, this.cells[i].y * cs, 2 * cs - .9, cs - .9);
            }
        }

        updateSnake() {
            var headx = this.cells[0].x;
            var heady = this.cells[0].y;
            this.cells.pop();
            var nextx, nexty;
            if (this.direction == "right") {
                nextx = headx + 1;
                nexty = heady;
                this.cells.unshift({ nextx, nexty });
            }
            else if (this.direction == "down") {
                nextx = headx;
                nexty = heady + 1;
                this.cells.unshift({ nextx, nexty });
            }
            else if (this.direction == "left") {
                nextx = headx - 1;
                nexty = heady;
                this.cells.unshift({ nextx, nexty });
            }
            else {
                nexty = heady - 1; nextx = headx;
                this.cells.unshift({ nextx, nexty });
            }
        }
    }

    snk = new snake();
    snk.createSnake();
    function keyPress(e) {
        if (e.key == "ArrowRight") {
            this.direction = "right";
        }
        else if (e.key == "ArrowDown") {
            this.direction = "down";
        }
        else if (e.key == "ArrowLeft") {
            this.direction = "left";
        }
        else {
            this.direction = "up";
        }
    }
    document.addEventListener("keydown", keyPress);

}

function draw() {
    pen.clearRect(0, 0, w, h);
    snk.drawSnake();

}

function update() {
    snk.updateSnake();
}
function gameLoop() {
    draw();
    update();
}
init();
// for (let i = 0; i < snake.len; i++) console.log(snake.cells[i]);
var f = setInterval(gameLoop, 100);