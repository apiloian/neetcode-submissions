class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid: number[][]): number {
        let minutes = 0;
        
        const rottenIndexes = [];
        let fruits = 0;
        for(let i = 0; i < grid.length; i++) {
            for(let j = 0; j < grid[0].length; j++) {
                const cell = grid[i][j];
                if(cell === 1) {
                    fruits += 1;
                }

                if(cell === 2) {
                    rottenIndexes.push([i, j]);
                }
            }
        }

        const dr = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ]
        let head = 0;
        while(fruits > 0 && head < rottenIndexes.length) {
            const curLen = rottenIndexes.length;
            console.log(rottenIndexes,head, minutes)

            while(head < curLen) {
                const [r, c] = rottenIndexes[head++];

                for(const [drRow, drCol] of dr) {
                    if(grid[r + drRow] && grid[r + drRow][c + drCol] === 1) {
                        rottenIndexes.push([r + drRow, c + drCol]);
                        grid[r + drRow][c + drCol] = 2;
                        fruits -= 1;
                    }
                }
            }
            minutes += 1;
        }


        return fruits > 0 ? -1 : minutes;
    }
}
