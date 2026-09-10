/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {
        function dfs(node) {
            if(!node) {
                return [true, 0];
            }
            const leftNode = dfs(node.left);
            const rightNode = dfs(node.right);
            const balanced = leftNode[0] && rightNode[0] && Math.abs(leftNode[1] - rightNode[1]) <= 1;
            return [balanced, Math.max(leftNode[1], rightNode[1]) + 1]
        }

        const res = dfs(root);

        return res[0];
    }
}
