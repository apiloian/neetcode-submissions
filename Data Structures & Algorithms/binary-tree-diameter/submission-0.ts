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
     * @return {number}
     */
    diameterOfBinaryTree(root: TreeNode | null): number {
        let result = 0;
        function dfs(node) {
            if(!node) {
                return 0
            }
            const leftNode = dfs(node.left);
            const rightNode = dfs(node.right);
            result = Math.max(result, leftNode + rightNode)

            return 1 + Math.max(leftNode, rightNode)
        }

        dfs(root);
        return result
    }
}
