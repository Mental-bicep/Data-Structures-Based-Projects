snake = {
    init_len: 5,
    cells: [],
    createSnake: () => {
        console.log("inside input function\n");
        let k = 0;
        console.log("value of len is ", this.init_len);
        // for (var i = this.init_len; i > 0; i--, k++) {
        //     // this.cells.push({ x: i, y: i * i });
        //     // console.log("current element pushed is ", cells[k]);
        //     console.log("element pushed\n");
        // }
        console.log("exit input function\n");
    },
    show: () => {
        console.log("inside show function\n");
        for (let i = 0; i < this.init_len; i++) console.log(cells[i]);
    },
};

snake.createSnake();
// snake.show();
// console.log(snake.cells[1]);