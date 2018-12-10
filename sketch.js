
let debug;
let size;
let padding;
let boardWidth;
let boardHeight;
let board;

let tetromino;

function setup() {
    debug = false;
    size = 25;
    padding = floor(size / 5);
    boardWidth = 10;
    boardHeight = 20;
    board = [];
    createCanvas(boardWidth * size + padding * 2 - 2, boardHeight * size + padding * 2 - 2);

    // Creates grid of integers according to the board's dimensions.
    for (let y = 0; y < boardHeight; y++) {
        let row = [];
        for (let x = 0; x < boardWidth; x++) {
            row.push(0);
        }
        board.push(row);
    }

    this.tetromino = new Tetromino();

    frameRate(5);
}

function debugBoard() {
    let temp = "";
    for (let y = 0; y < boardHeight; y++) {
        temp = "";
        for (let x = 0; x < boardWidth; x++) {
            temp += board[y][x] + " ";
        }
        console.log(temp);
    }
    console.log("___________________");
}

function keyPressed() {
    if (keyCode === LEFT_ARROW || keyCode === 65) {
        this.tetromino.move(-1);
    }
    if (keyCode === RIGHT_ARROW || keyCode === 68) {
        this.tetromino.move(1);
    }

    if (keyCode === DOWN_ARROW || keyCode === 83) {

    }

    // Space
    if (keyCode === 32) {
        this.tetromino.rotate(1);
    }

    // R
    if (keyCode === 82) {
        this.tetromino = new Tetromino();
    }
}

function moveBoardDown(row) {
    for (let y = row; y > 0; y--) {
        for (let x = 0; x < boardWidth; x++) {
            board[y][x] = board[y - 1][x];
        }
    }
}

function checkLines() {
    for (let y = 0; y < boardHeight; y++) {
        let pieces = 0;
        for (let x = 0; x < boardWidth; x++) {
            if (board[y][x] != 0) {
                pieces++;
            }
        }
        if (pieces === boardWidth) {
            moveBoardDown(y);
        }
    }
}

function addTetrominoToBoard() {
    for (let y = 0; y < 4; y++) {
        for (let x = 0; x < 4; x++) {
            if (this.tetromino.pieces[this.tetromino.rotationIndex][y][x] != 0) {
                board[this.tetromino.y + y][this.tetromino.x + x] = this.tetromino.type;
            }
        }
    }
    checkLines();
    this.tetromino.reset();
    if (debug) {
        debugBoard();
    }
}

function update() {
    this.tetromino.update();
}

function draw() {
    background(0);

    update();

    // Draws Board's outline.
    stroke(255);
    noFill();
    rect(0, 0, width - 1, height - 1);

    

    // Draws Board.
    noStroke();
    fill(255);
    for (let y = 0; y < boardHeight; y++) {
        for (let x = 0; x < boardWidth; x++) {
            if (board[y][x] === 0) {
                continue;
            }
            switch (board[y][x]) {
                case 1:
                    fill(41, 173, 255);
                    break;
                case 2:
                    fill(16, 78, 159);
                    break;
                case 3:
                    fill(255, 163, 0);
                    break;
                case 4:
                    fill(255, 255, 39);
                    break;
                case 5:
                    fill(0, 231, 86);
                    break;
                case 6:
                    fill(131, 118, 156);
                    break;
                case 7:
                    fill(255, 119, 168);
                    break;
            }
            rect(padding + x * size, padding + y * size, size - 2, size - 2);
        }
    }
}