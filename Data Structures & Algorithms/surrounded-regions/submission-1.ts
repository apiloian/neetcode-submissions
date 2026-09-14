class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board: string[][]): void {
        const ROW = board.length;
        const COL = board[0].length;

        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ]

        function dfs(r, c) {
            if(!board[r] || board[r][c] !== "O") {
                return;
            }

            board[r][c] = "T";
            for(const [dr, dc] of directions) {
                dfs(r + dr, c + dc);
            }


        }

        // capture the borders and mark the t
        for(let i = 0; i < ROW; i++) {
            for(let j = 0; j < COL; j++) {
                if((i === 0 || i === ROW - 1) || (j === 0 || j === COL - 1) && board[i][j] === "O") {
                   console.log('here', i, j)
                    dfs(i, j);
                }
            }
        }
        // mark to x
        for(let i = 0; i < ROW; i++) {
            for(let j = 0; j < COL; j++) {
                if(board[i][j] === "O") {
                    board[i][j] = "X"
                }
            }
        }
        

        // mark t to o
        for(let i = 0; i < ROW; i++) {
            for(let j = 0; j < COL; j++) {
                if(board[i][j] === "T") {
                    board[i][j] = "O"
                }
            }
        }
    }
}
