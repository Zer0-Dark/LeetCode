var maxProfit = function (prices) {
    let [l, r] = [0, 1];
    let maxProfit = 0;
    while (r < prices.length) {
        if (prices[l] > prices[r]) {
            l = r;
        } else {
            if ((prices[r] - prices[l]) > maxProfit) {
                maxProfit = prices[r] - prices[l]
            }
        }

        r++;
    }

    return maxProfit;

};

console.log(maxProfit([7, 6, 4, 3, 1]))