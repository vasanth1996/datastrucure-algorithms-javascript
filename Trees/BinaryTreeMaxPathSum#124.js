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
 * @return {number}
 */
var maxPathSum = function(root) {
    let result = -Infinity;//Initial value to for finding Max
    
    if(!root) return result;

    // Helper function which will find the maxium path sum
    function helper(root){
        if(!root) return 0;
        
        // returns max path sum of Left subtree
        let left = helper(root.left);
        // returns max path sum of right subtree
        let right = helper(root.right);
       
        // Find the max among left path sum and right path sum and add with root;
        let total = Math.max(left,right) + root.val;
        // Find the max after adding left+root+right with prev total
        total = Math.max(left+right+root.val,total);
        // Find the max between current root value with prev total;
        total = Math.max(root.val,total);
        
        // save it to result by finding max between prev result and total
        result = Math.max(result,total);
        
        // Retuns the max path by checking max path of (left and right)+root and root value alone 
        return Math.max(Math.max(left,right)+root.val,root.val);
    }

    // calls the helper to get the max path sum
    helper(root);
    
    return result;
};