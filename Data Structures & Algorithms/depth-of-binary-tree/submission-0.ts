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
    maxDepth(root: TreeNode | null): number {
        function dfs(node: TreeNode | null, currentLevel = 0) {
            let level = currentLevel;
            if(!node) {
                return level;
            }

            level += 1;
            return Math.max(dfs(node.left, level), dfs(node.right, level));
        }
        return dfs(root, 0);
    }
}
