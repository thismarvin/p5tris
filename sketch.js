let debug;
let size;
let padding;
let boardWidth;
let boardHeight;
let board;
let tetromino;
let gameOver;

function setup() {
    debug = false;

    if (windowWidth >= windowHeight) {
        size = floor(windowHeight / 24);
    } else {
        size = floor(windowWidth / 24);
    }
    
    padding = floor(size / 5);
    boardWidth = 10;
    boardHeight = 20;
    board = [];
    gameOver = false;
    createCanvas(boardWidth * size + padding * 2 - 2, boardHeight * size + padding * 2 - 2);
    reset();
    frameRate(5);
}

function reset() {
    board = [];
    // Creates grid of integers according to the board's dimensions.
    for (let y = 0; y < boardHeight; y++) {
        let row = [];
        for (let x = 0; x < boardWidth; x++) {
            row.push(0);
        }
        board.push(row);
    }

    this.tetromino = new Tetromino();
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

    if (keyCode === UP_ARROW || keyCode === 87) {
        this.tetromino.rotate(1);
    }

    if (keyCode === DOWN_ARROW || keyCode === 83) {
        frameRate(20);
    }    

    // R
    if (keyCode === 82) {
        reset();
    }
}

function keyReleased() {
    if (keyCode === DOWN_ARROW || keyCode === 83) {
        frameRate(5);
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
    if (gameOver) {
        return;
    }

    for (let y = 0; y < 4; y++) {
        for (let x = 0; x < 4; x++) {
            if (this.tetromino.y < 0) {
                gameOver = true;
                return;
            }
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
    strokeWeight(5);
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
                    fill(1, 89, 187);
                    break;
                case 3:
                    fill(247, 113, 12);
                    break;
                case 4:
                    fill(250, 202, 0);
                    break;
                case 5:
                    fill(0, 229, 57);
                    break;
                case 6:
                    fill(124, 38, 106);
                    break;
                case 7:
                    fill(255, 0, 77);
                    break;
            }
            rect(padding + x * size, padding + y * size, size - 3, size - 3);
        }
    }
}