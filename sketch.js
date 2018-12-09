
let size;
let boardWidth;
let boardHeight;
let board;

function setup() {
    size = 25;
    boardWidth = 10;
    boardHeight = 20;
    board = [];
    createCanvas(boardWidth * size, boardHeight * size);

    // Creates grid of integers according to the board's dimensions.
    for (let y = 0; y < boardHeight; y++) {
        let row = [];
        for (let x = 0; x < boardWidth; x++) {
            row.push(0);
        }
        board.push(row);
    }

    // Debugging
    board[boardHeight - 1][boardWidth - 1] = 1;
}

function draw() {
    background(0);

    // Draws Board's outline.
    stroke(255);
    fill(0);
    rect(0, 0, width - 1, height - 1);

    // Draws Board.
    noStroke();
    fill(255);
    for (let y = 0; y < boardHeight; y++) {
        for (let x = 0; x < boardWidth; x++) {
            if (board[y][x] === 1) {
                rect(x * size + 1, y * size, size - 5, size - 4);
            }
        }
    }
}