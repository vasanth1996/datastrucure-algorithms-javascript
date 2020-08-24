/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    
    if(points.length == 0) return 0;
    
    //Sorting the points based on starting points in ascending order
    points.sort((a,b) => {
        return a[1] - b[1];
    });
    
    let prev = 0;
    let count = 1; //No of arrows required
    
    for(let i=1;i<points.length;i++){
        //if previous point's end point is not meeting with current end point
        if(points[prev][1] < points[i][0]){
            count++;
            prev = i;
        }
    }
    
    return count;
};