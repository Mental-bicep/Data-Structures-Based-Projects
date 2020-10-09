class snake {

    constructor() {
        this.len = 5;
        this.color = "gray";
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
            console.log("inside drawSnake function");
            pen.fillStyle = this.color;
            pen.fillRect(this.cells[i].x * hcs, this.cells[i].y * vcs, hcs - 1, vcs - 1);
        }
    }

    updateSnake() {
        var headx = this.cells[0].x;
        var heady = this.cells[0].y;
        // console.log("current ", headx, " ", heady);
        if (headx == food.x && heady == food.y) {
            // console.log("food eaten");
            food = getFood();
            score++;
        }
        else
            this.cells.pop();
        var nextx = 0, nexty = 0;
        if (this.direction == "right") {
            nextx = headx + 1;
            nexty = heady;
            this.cells.unshift({ x: nextx, y: nexty });
        }
        else if (this.direction == "down") {
            nextx = headx;
            nexty = heady + 1;
            this.cells.unshift({ x: nextx, y: nexty });
        }
        else if (this.direction == "left") {
            nextx = headx - 1;
            nexty = heady;
            this.cells.unshift({ x: nextx, y: nexty });
        }
        else {
            nexty = heady - 1; nextx = headx;
            this.cells.unshift({ x: nextx, y: nexty });
        }
        // console.log("updated ", nextx, " ", nexty, " length=", this.len);
        // for (let ele in this.cells) console.log(ele);
        let lastx = w / hcs;
        let lasty = h / vcs;
        if (this.cells[0].x < 0 || this.cells[0].x > lastx || this.cells[0].y < 0 || this.cells[0].y > lasty)
            game_over = true;
    }
}



function keyPress(e) {
    if (e.key == "ArrowRight") {
        snk.direction = "right";
    }
    else if (e.key == "ArrowDown") {
        snk.direction = "down";
    }
    else if (e.key == "ArrowLeft") {
        snk.direction = "left";
    }
    else {
        snk.direction = "up";
    }
}

function init() {
    canvas = document.getElementById("canvas");
    pen = canvas.getContext("2d");
    canvas.width = canvas.height = 1000;
    h = canvas.height;
    w = canvas.width;
    hcs = 63;
    vcs = 63;
    food_img = new Image();
    food_img.src = "img/apple.png";
    trophy_img = new Image();
    trophy_img.src = "img/trophy.png";
    food = getFood();
    snk = new snake();
    snk.createSnake();
    score = 0;
    document.addEventListener("keydown", keyPress);
}

function getFood() {
    let foodx = Math.round((Math.random() * (w - hcs) / hcs));
    let foody = Math.round((Math.random() * (h - vcs) / vcs));
    class foods {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.color = "blue";
        }
    }
    var food = new foods(foodx, foody);
    return food;
}

function draw() {
    pen.clearRect(0, 0, w, h);
    snk.drawSnake();

    pen.fillStyle = food.color;
    pen.drawImage(food_img, food.x * hcs, food.y * vcs, hcs, vcs);
    pen.drawImage(trophy_img, 2, 2, hcs, vcs);
    pen.fillStyle = "blue";
    pen.font = "28px Roboto";
    pen.fillText(score, 30, 30);

}

function update() {
    snk.updateSnake();
}
function gameLoop() {
    if (game_over == true) {
        clearInterval(f);
        alert("Game Over");

    }
    draw();
    update();
}

init();
game_over = false;
var f = setInterval(gameLoop, 100);