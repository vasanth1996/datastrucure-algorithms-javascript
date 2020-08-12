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
var verticalOrder = function(root) {
    let map = {}; // to store the values 
    
    //Builds entire map in {key -> value({key->[]})}
    helper(root,0,0,map);
    
    let min = Infinity;
    
    //find the left most column
    for(let key in map){
        min = Math.min(key,min);
    }
    
    //converts the map into result
    return constructResult(map,min);
};

/**
*Take min and check with map if exists it will be pushed into result
*/
var constructResult = function(map,min){
    let result = [];
    
    //until map contains min (column)
    while(map[min]){
        let arr = [];
        let temp = map[min];
        
        //extracting values from each x coordinates
        for(let key in temp){
            for(let key1 of temp[key]){
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
        map[y][x] = [];
    }
    
    map[y][x].push(root.val);
    
    helper(root.left,x+1,y-1,map);
    helper(root.right,x+1,y+1,map);
}