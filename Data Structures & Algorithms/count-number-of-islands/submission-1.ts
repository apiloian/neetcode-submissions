class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands1(grid: string[][]): number {
        // [
        //     ["1","1","0","0","1"],
        //     ["1","1","0","0","1"],
        //     ["0","0","1","0","0"],
        //     ["0","0","0","1","1"]
        // ]

        // count
        // dfs
        // start iterate

        // count++
        // start dfs/bfs from [i, j];

        let count = 0;

        const directions = [
            [0, 1], [0, -1], [1, 0], [-1, 0]
        ]

        function dfs(r, c) {
            grid[r][c] = "0";

            for(const [dirRow, dirCol] of directions) {
                if(grid[r + dirRow] && grid[r + dirRow][c + dirCol] === "1") {
                    dfs(dirRow + r, dirCol + c);
                }
            }
        }

        for(let row = 0; row < grid.length; row++) {    
            for(let col = 0; col < grid[row].length; col++) {
                const cell = grid[row][col];
                if(cell === "1") {
                    count++;
                    dfs(row, col);
                }
            }
        }

        return count;
    }

    // islands
    // visited || replace "1" to "0"
    // dfs

    numIslands(grid: string[][]) {
        let islands = 0;
        const ROW = grid.length;
        const COL = grid[0].length;
        const visited = new Set();

        const directions = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0],
        ]

        function dfs(row, col) {
            const key = `${row}_${col}`;
            if(row >= ROW || col >= COL || visited.has(key)) {
                return;
            }
    
            visited.add(key);
            for(const [drRow, drCol] of directions) {
                if(grid[row + drRow] && grid[row + drRow][col + drCol] === "1") {
                    dfs(row + drRow, col + drCol);
                }
            }
        }

        for(let r = 0; r < ROW; r++) {
            for(let c = 0; c < COL; c++) {
                if(grid[r][c] === "0" || visited.has(`${r}_${c}`)) {
                    continue;
                }
                islands++
                dfs(r, c);
            }
        }

        return islands;
    }
}
