class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        const getWaterAmount = (i1, i2) => Math.min(heights[i1], heights[i2]) * Math.abs(i2 - i1);
        let maxRes = 0;
        let i = 0, j = heights.length - 1;
        while(i !== j){
            maxRes = Math.max(getWaterAmount(i, j), maxRes);
            if(heights[i] < heights[j]){
                i++;
            } else {
                j--;
            }
        }
        return maxRes;
    }
}
