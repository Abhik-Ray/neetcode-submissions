class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqs = new Map();
        for (const num of nums){
            freqs.set(num, (freqs.get(num) ?? 0) + 1);
        }
        const sortedF = [...freqs.keys()].sort((a, b) => freqs.get(b) - freqs.get(a));
        return sortedF.slice(0, k)
    }
}
