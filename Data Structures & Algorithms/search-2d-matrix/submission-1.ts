class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {

        const ROW_MAX = matrix.length - 1;
        const COL_MAX = matrix[0].length - 1;

        if(matrix[0][0] > target || target > matrix[ROW_MAX][COL_MAX]) {
            return false;
        }

        let t = 0;
        let b = ROW_MAX;
        let row = null;
        while(t <= b && row === null) {
            const midIdx = Math.ceil((b + t) / 2);
            console.log('midIdx', midIdx)

            if(target > matrix[midIdx][COL_MAX]) {
                t = midIdx + 1
            } else if(matrix[midIdx][0] > target) {
                b = midIdx - 1;
            } else {
                row = midIdx;
            }
        }
        console.log('row', row)

        let l = 0;
        let r = COL_MAX;
        while(l <= r && row !== null) {
            const midIdx = Math.ceil((r + l) / 2);
            if(matrix[row][midIdx] === target) {
                return true;
            } else if(matrix[row][midIdx] < target) {
                l = midIdx + 1;
            } else {
                r = midIdx - 1;
            }
        }

        return false
    }
}
