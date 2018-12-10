class Tetromino {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.type = 0;
        this.rotationIndex = 0;
        this.falling = true;
        this.reset();
    }

    setup() {
        switch (this.type) {
            case 1:
                this.pieces = [
                    [
                        [0, 0, 1, 0],
                        [0, 0, 1, 0],
                        [0, 0, 1, 0],
                        [0, 0, 1, 0]
                    ],
                    [
                        [0, 0, 0, 0],
                        [1, 1, 1, 1],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0]
                    ],
                    [
                        [0, 0, 1, 0],
                        [0, 0, 1, 0],
                        [0, 0, 1, 0],
                        [0, 0, 1, 0]
                    ],
                    [
                        [0, 0, 0, 0],
                        [1, 1, 1, 1],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0]
                    ]
                ];
                break;
            case 2:
                this.pieces = [
                    [
                        [0, 2, 2, 0],
                        [0, 2, 0, 0],
                        [0, 2, 0, 0],
                        [0, 0, 0, 0]
                    ],
                    [
                        [0, 0, 0, 0],
                        [2, 2, 2, 0],
                        [0, 0, 2, 0],
                        [0, 0, 0, 0]
                    ],
                    [
                        [0, 2, 0, 0],
                        [0, 2, 0, 0],
                        [2, 2, 0, 0],
                        [0, 0, 0, 0]
                    ],
                    [
                        [2, 0, 0, 0],
                        [2, 2, 2, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0]
                    ]
                ];
                break;
            case 3:
                this.pieces = [
                    [
                        [0, 3, 0, 0],
                        [0, 3, 0, 0],
                        [0, 3, 3, 0],
                        [0, 0, 0, 0]
                    ],
                    [
                        [0, 0, 0, 0],
                        [3, 3, 3, 0],
                        [3, 0, 0, 0],
                        [0, 0, 0, 0]
                    ],
                    [
                        [3, 3, 0, 0],
                        [0, 3, 0, 0],
                        [0, 3, 0, 0],
                        [0, 0, 0, 0]
                    ],
                    [
                        [0, 0, 3, 0],
                        [3, 3, 3, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0]
                    ]
                ];
                break;
            case 4:
                this.pieces = [
                    [
                        [4, 4, 0, 0],
                        [4, 4, 0, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0]
                    ],
                    [
                        [4, 4, 0, 0],
                        [4, 4, 0, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0]
                    ],
                    [
                        [4, 4, 0, 0],
                        [4, 4, 0, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0]
                    ],
                    [
                        [4, 4, 0, 0],
                        [4, 4, 0, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0]
                    ]
                ];
                break;
            case 5:
                this.pieces = [
                    [
                        [5, 0, 0, 0],
                        [5, 5, 0, 0],
                        [0, 5, 0, 0],
                        [0, 0, 0, 0]
                    ],
                    [
                        [0, 5, 5, 0],
                        [5, 5, 0, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0]
                    ],
                    [
                        [5, 0, 0, 0],
                        [5, 5, 0, 0],
                        [0, 5, 0, 0],
                        [0, 0, 0, 0]
                    ],
                    [
                        [0, 5, 5, 0],
                        [5, 5, 0, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0]
                    ]
                ];
                break;
            case 6:
                this.pieces = [
                    [
                        [0, 6, 0, 0],
                        [0, 6, 6, 0],
                        [0, 6, 0, 0],
                        [0, 0, 0, 0]
                    ],
                    [
                        [0, 0, 0, 0],
                        [6, 6, 6, 0],
                        [0, 6, 0, 0],
                        [0, 0, 0, 0]
                    ],
                    [
                        [0, 6, 0, 0],
                        [6, 6, 0, 0],
                        [0, 6, 0, 0],
                        [0, 0, 0, 0]
                    ],
                    [
                        [0, 6, 0, 0],
                        [6, 6, 6, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0]
                    ]
                ];
                break;
            case 7:
                this.pieces = [
                    [
                        [0, 7, 0, 0],
                        [7, 7, 0, 0],
                        [7, 0, 0, 0],
                        [0, 0, 0, 0]
                    ],
                    [
                        [7, 7, 0, 0],
                        [0, 7, 7, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0]
                    ],
                    [
                        [0, 7, 0, 0],
                        [7, 7, 0, 0],
                        [7, 0, 0, 0],
                        [0, 0, 0, 0]
                    ],
                    [
                        [7, 7, 0, 0],
                        [0, 7, 7, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0]
                    ]
                ];
                break;
        }
    }

    reset() {
        this.x = 3;
        this.y = -4;
        this.type = 1 + floor(Math.random() * 7);
        this.rotationIndex = 0;
        this.falling = true;
        this.pieces = [[[]]];
        this.setup();
    }

    left() {
        let leftMost = 3;
        for (let y = 0; y < 4; y++) {
            for (let x = 0; x < 4; x++) {
                if (this.pieces[this.rotationIndex][y][x] != 0) {
                    leftMost = x < leftMost ? x : leftMost;
                }
            }
        }
        return this.x + leftMost;
    }

    right() {
        let rightMost = 0;
        for (let y = 0; y < 4; y++) {
            for (let x = 0; x < 4; x++) {
                if (this.pieces[this.rotationIndex][y][x] != 0) {
                    rightMost = x > rightMost ? x : rightMost;
                }
            }
        }
        return this.x + rightMost;
    }

    bottom() {
        let lowest = 0;
        for (let x = 0; x < 4; x++) {
            for (let y = 0; y < 4; y++) {
                if (this.pieces[this.rotationIndex][y][x] != 0) {
                    lowest = y > lowest ? y : lowest;
                }
            }
        }
        return this.y + lowest;
    }

    fall() {
        if (!this.falling) {
            return;
        }
        // Checks for collision at the bottom of the board.
        if (this.bottom() + 1 < boardHeight) {
            this.y += 1;
        }
        else {
            this.falling = false;
            addTetrominoToBoard();
        }

        // Checks for collision between pieces already placed. 
        if (this.collidesWithBoard()) {
            this.y -= 1;
            this.falling = false;
            addTetrominoToBoard();
        }
    }

    collidesWithBoard() {
        if (this.y < 0) {
            return false;
        }
        for (let y = 0; y < 4; y++) {
            for (let x = 0; x < 4; x++) {
                if (this.pieces[this.rotationIndex][y][x] != 0 &&
                    board[this.y + y][this.x + x] != 0) {
                    return true;
                }
            }
        }
        return false;
    }

    move(dir) {
        if (!this.falling) {
            return;
        }

        switch (dir) {
            case -1:
                if (this.left() - 1 >= 0) {
                    this.x += -1;
                }
                break;
            case 1:
                if (this.right() + 1 < boardWidth) {
                    this.x += 1;
                }
                break;
        }

        // Checks for collision between pieces already placed. 
        if (this.collidesWithBoard()) {
            this.x -= dir;
        }
    }

    rotate(dir) {
        let oldRotationIndex = this.rotationIndex;
        switch (dir) {
            case -1:
                this.rotationIndex = this.rotationIndex + dir < 0 ? 3 : this.rotationIndex + dir;
                break;
            case 1:
                this.rotationIndex = this.rotationIndex + dir > 3 ? 0 : this.rotationIndex + dir;
                break;
        }

        if (this.bottom() >= boardHeight || this.collidesWithBoard()) {
            this.rotationIndex = oldRotationIndex;
        }
    }

    update() {
        this.fall();
        this.show();
    }

    show() {
        noStroke();
        switch (this.type) {
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

        for (let y = 0; y < 4; y++) {
            for (let x = 0; x < 4; x++) {
                if (this.pieces[this.rotationIndex][y][x] != 0) {
                    rect(padding + this.x * size + x * size, padding + this.y * size + y * size, size - 3, size - 3);
                }
            }
        }
    }
}