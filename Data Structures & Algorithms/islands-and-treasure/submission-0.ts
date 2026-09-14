class Solution {
    /**
     * @param {number[][]} grid
     */
    land: number

    constructor() {
        this.land = 2147483647
    }
    islandsAndTreasure(grid: number[][]): void {
        const stack = [];
        let head = 0;

        for(let i = 0; i < grid.length; i++) {
            for(let j = 0; j < grid[0].length; j++) {
                if(grid[i][j] === 0) {
                    stack.push([i, j]);
                }
            }
        }
        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ]
        while(head < stack.length && stack.length) {

            while(head < stack.length) {
                const [idxI, idxJ] = stack[head++];

                for(const [dr, dc] of directions) {
                    if(grid[idxI + dr] && grid[idxI + dr][idxJ + dc] === this.land) {
                        grid[idxI + dr][idxJ + dc] = grid[idxI][idxJ] + 1;
                        stack.push([idxI + dr, idxJ + dc]);
                    }
                }
            }
        }

    }
}




// [
// [2147483647,       -1,            0,             2147483647],
// [2147483647,       2147483647,    2147483647,    -1],
// [2147483647,       -1,            2147483647,    -1],
// [0,                -1,            2147483647,    2147483647]
// ]















