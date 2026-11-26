class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = prices[0];
        let best = 0;
        for (const price of prices) {
            minPrice = Math.min(price, minPrice);
            best = Math.max(best, price - minPrice);
        }
        return best;
    }
}
