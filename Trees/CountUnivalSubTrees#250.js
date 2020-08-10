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
var countUnivalSubtrees = function(root) {
    var totalUnivalueSubtrees = [0];
    //Helper function will increament the count if any subtree is univalue
    countUnivalSubtressHelper(root,0,totalUnivalueSubtrees);
    return totalUnivalueSubtrees[0];
};

/**
*Checks left subtree is unival and right subtree is unival then increments the totalUnivalueSubtrees variable
*Checks every node is equal to the parent 
*/
var countUnivalSubtressHelper = function(root,parentValue,totalUnivalueSubtrees){
    if(!root) return true;
    
    //Checks left subtree whether univalue tree or not
    let left = countUnivalSubtressHelper(root.left,root.val,totalUnivalueSubtrees);
    
    //Checks right subtree whether univalue tree or not
    let right = countUnivalSubtressHelper(root.right,root.val,totalUnivalueSubtrees);
    
    if(!left || !right) return false;
    
    //If left and right subtree is univalue 
    totalUnivalueSubtrees[0]++;
    
    return root.val === parentValue;
}