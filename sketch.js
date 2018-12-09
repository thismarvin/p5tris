
let size;
let padding;
let boardWidth;
let boardHeight;
let board;

let tetromino;

function setup() {
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

    frameRate(1);
}

function update(){
    this.tetromino.update();
}

function draw() {
    background(0);

    // Draws Board's outline.
    stroke(255);
    fill(0);
    rect(0, 0, width - 1, height - 1);

    update();

    // Draws Board.
    noStroke();
    fill(255);
    for (let y = 0; y < boardHeight; y++) {
        for (let x = 0; x < boardWidth; x++) {
            if (board[y][x] === 1) {
                rect(padding + x * size, padding + y * size, size - 2, size - 2);
            }
        }
    }
}