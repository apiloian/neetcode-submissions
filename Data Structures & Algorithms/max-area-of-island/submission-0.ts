class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid: number[][]): number {
        let maxArea = 0;
        const visited = new Set();
        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ]

        function dfs(r, c) {
            const key = `${r}_${c}`
            if(visited.has(key)) {
                return 0;
            }

            visited.add(key);
            let area = 1;
            for(const [dr, dc] of directions) {
                if(grid[r + dr] && grid[r + dr][c + dc] === 1) {
                    area += dfs(r + dr, c + dc);
                }
            }

            return area;
        }

        for(let i = 0; i < grid.length; i++) {
            for(let j = 0; j < grid[0].length; j++) {
                const cell = grid[i][j];

                if(cell === 0) {
                    continue;
                }

                const islandArea = dfs(i, j);
                maxArea = Math.max(maxArea, islandArea);
            }
        }

        return maxArea
    }
}
