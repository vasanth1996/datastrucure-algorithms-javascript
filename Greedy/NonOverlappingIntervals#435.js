/**
 * Totally there are three cases
 * 1. Two intervals are not overlapping means no modification in prev , count
 * 2. Two intervals are overlapping and current interval's starting point is smaller than prev intervals
 * starting point and prev interval's ending point is greater than current interval's end point means
 * assing prev = currentIndex because current index is smaller and increment counter
 * 3. Two intervals are overlapping and current interval's starting only lesser than prev interval's ending point
 * only increment count and we are not considering cur pointer anymore and prev pointer not changing
 */

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b) => {
        return (a[0] - b[0]);
    });
    
    let count = 0;
    let prev = 0;
    
    for(let i=1;i<intervals.length;i++){
        //Checking overlapping case
        if(intervals[prev][1] > intervals[i][0]){
            //Checking overlapping case2
            if(intervals[prev][1] > intervals[i][1]){
                prev = i;
            }
            count++;
        }else{
            prev = i;
        }
    }
    
    return count;
};