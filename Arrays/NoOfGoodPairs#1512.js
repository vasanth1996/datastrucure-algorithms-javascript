/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    return method1(nums);
};

//O(n) time & O(n) space
var method1 = function(nums){
    let map = new Map();
    let count = 0;
    for(let i=nums.length-1;i >= 0;i--){
        if(map.has(nums[i])){
            count += map.get(nums[i]);
            map.set(nums[i],map.get(nums[i])+1);
        }else{
            map.set(nums[i],1);
        }
    }
    
    return count;
}

//O(n) = O(n)+O(n) & O(n) space
var method2 = function(nums){
    let map = new Map();
    let count = 0;
    
    for(let n of nums){
        if(map.has(n)){
            map.set(n,map.get(n)+1);
        }else{
            map.set(n,1);
        }
    }
    
    for(let m of map){
        let val = m[1];
        val = val * (val - 1);
        if(val > 0){
            count += val/2;
        }
    }
    
    return count;
}