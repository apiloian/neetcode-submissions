class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
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
}
