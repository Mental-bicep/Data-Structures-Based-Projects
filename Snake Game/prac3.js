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
            pen.fillRect(this.cells[i].x * hcs, this.cells[i].y * vcs, hcs, vcs);
        }
    }

    updateSnake() {
        var headx = this.cells[0].x;
        var heady = this.cells[0].y;
        console.log("current ", headx, " ", heady);
        this.cells.pop();
        var nextx = 0, nexty = 0;
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
        console.log("updated ", nextx, " ", nexty);
    }
}



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

function init() {
    canvas = document.getElementById("canvas");
    pen = canvas.getContext("2d");
    h = canvas.height;
    w = canvas.width;
    hcs = 20;
    vcs = 10;
    snk = new snake();
    snk.createSnake();
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
var f = setInterval(gameLoop, 100);