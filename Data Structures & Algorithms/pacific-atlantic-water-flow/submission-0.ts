class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights: number[][]): number[][] {
        const ROWS = heights.length;
        const COLS = heights[0].length;
        const visitedPac = new Set();
        const visitedAtl = new Set();

        function dfs(r, c, prevHigh, visited) {
            if(visited.has(`${r}_${c}`) || r < 0 || c < 0 || r === ROWS || c === COLS || prevHigh > heights[r][c]) {
                return;
            }
            visited.add(`${r}_${c}`);
            dfs(r, c + 1, heights[r][c], visited)
            dfs(r, c - 1, heights[r][c], visited)
            dfs(r + 1, c, heights[r][c], visited)
            dfs(r - 1, c, heights[r][c], visited)
        }

        for(let c = 0; c < COLS; c++) {
            dfs(0, c, heights[0][c], visitedPac);
            dfs(ROWS - 1, c, heights[ROWS - 1][c], visitedAtl);
        }

        for(let r = 0; r < ROWS; r++) {
            dfs(r, 0, heights[r][0], visitedPac);
            dfs(r, COLS - 1, heights[r][COLS - 1], visitedAtl);
        }

        const res = []

        for(let i = 0; i < ROWS; i++) {
            for(let j = 0; j < COLS; j++) {
                if(visitedPac.has(`${i}_${j}`) && visitedAtl.has(`${i}_${j}`)) {
                    res.push([i, j])
                }
            }
        }

        return res
    }
}
