class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const twoSum = (nums, target) => {
            const map = new Map();
            const result = [];
            const set = new Set();
            for(let i = 0; i < nums.length; i++){
                if(map.has(target - nums[i]) && !set.has(nums[i])){
                    result.push([nums[map.get(target - nums[i])], nums[i]]);
                    set.add(nums[i])
                }
                map.set(nums[i], i);
            }
            return result;
        }

        nums.sort((a,b) => a-b);
        const result = [];
        for(let i = 0; i < nums.length; i++){
            if((nums.length - i) < 3) break;
            if(i > 0 && (nums[i - 1] === nums[i])) continue;
            const target = 0 - nums[i];
            const rest = twoSum(nums.slice(i + 1), target);
            console.log({rest})
            if(rest.length){
                rest.forEach(n => result.push([nums[i], ...n]))
            }
        }
        return result;
    }
}
