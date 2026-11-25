class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let maxSeq = 0;
        const set = new Set(nums);
        for (let i of nums){
            if(set.has(i-1)){
                continue;
            }
            let curr = i;
            let seq = 1;
            while(set.has(curr+1)){
                seq++;
                curr++;
            }
            maxSeq = Math.max(maxSeq, seq)
        }
        return maxSeq
    }
}
