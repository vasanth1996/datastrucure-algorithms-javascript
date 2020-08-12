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
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
    let map = {};
    helper(root,0,0,map);
    
    let min = Infinity;
    
    for(let key in map){
        min = Math.min(key,min);
    }
    
    return constructResult(map,min);
};

var constructResult = function(map,min){
    let result = [];
    while(map[min]){
        let arr = [];
        let temp = map[min];
        
        for(let key in temp){
            for(let key1 in temp[key]){
                arr.push(key1);
            }
        }
        
        result.push(arr);
        min++;
    }
    
    return result;
}

var helper = function(root,x,y,map){
    if(!root) return;
    
    if(!map[y]){
        map[y] = {};
    }
    
    if(!map[y][x]){
        map[y][x] = {};
    }
    
    map[y][x][root.val] = 1;
    
    helper(root.left,x+1,y-1,map);
    helper(root.right,x+1,y+1,map);
}