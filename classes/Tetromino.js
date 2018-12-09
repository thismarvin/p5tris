class Tetromino {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.pieces = [[[]]];
        this.type = 1 + floor(Math.random() * 7);
        this.rotationIndex = 0;

        this.setup();
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
        // Checks for collision at the bottom of the board.
        if (this.bottom() + 1 < boardHeight) {
            this.y += 1;
        }
    }

    move(dir) {
        console.log(this.left());
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
    }

    rotate(dir) {
        switch (dir) {
            case -1:
                this.rotationIndex = this.rotationIndex + dir < 0 ? 3 : this.rotationIndex + dir;
                break;
            case 1:
                this.rotationIndex = this.rotationIndex + dir > 3 ? 0 : this.rotationIndex + dir;
                break;
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

        for (let y = 0; y < 4; y++) {
            for (let x = 0; x < 4; x++) {
                if (this.pieces[this.rotationIndex][y][x] != 0) {
                    rect(padding + this.x * size + x * size, padding + this.y * size + y * size, size - 2, size - 2);
                }
            }
        }
    }
}