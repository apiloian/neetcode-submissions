class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m: number, n: number): number {
        const grid = Array.from({ length: m }, () => new Array(n).fill(1));
        console.log(grid, 'grid')

        for(let i = grid.length - 2; i >= 0; i--) {
            for(let j = grid[0].length - 2; j >= 0; j--) {
                grid[i][j] = grid[i + 1][j] + grid[i][j + 1];
            }
        }

        return grid[0][0];
    }
}
