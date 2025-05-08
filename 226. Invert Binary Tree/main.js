/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
    // if there is no tree to reverse 
    if (!root) {
        return root;

    } else {
        // if theres a tree to reverse reverse left and right node 
        let temp = root.left;
        root.left = root.right;
        root.right = temp;

        // recursive the function
        invertTree(root.left);
        invertTree(root.right)
        return root;
    }
};