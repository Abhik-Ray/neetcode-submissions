class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const have = new Map();
        const need = new Map();
        for (const ch of t) {
            need.set(ch, (need.get(ch) ?? 0) + 1);
        }
        const hasSubs = () => {
            return need.keys().every(needKey => have.has(needKey) && (have.get(needKey) >= need.get(needKey)))
        }
        let left = 0;
        let bestLen = Number.POSITIVE_INFINITY,
            bestStart;
        for (let right = 0; right < s.length; right++) {
            have.set(s.at(right), (have.get(s.at(right)) ?? 0) + 1);
            if (!hasSubs()) continue;
            while (hasSubs()) {
                if (bestLen > right - left + 1) {
                    bestLen = right - left + 1;
                    bestStart = left;
                }
                have.set(s.at(left), (have.get(s.at(left)) ?? 0) - 1);
                left++;
            }
        }
        return Number.isInteger(bestStart) ? s.slice(bestStart, bestStart + bestLen) : "";
    }
}
