
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
function minEatingSpeed(piles, h) {
    let [l, r] = [1, Math.max(...piles)]
    let result = r;

    while (l <= r) {
        let current = Math.floor((l + r) / 2)
        let hours = 0;
        for (let i = 0; i < piles.length; i++) {
            hours += Math.ceil(piles[i] / current);
        }
        if (hours <= h) {

            result = Math.min(result, current);
            r = current - 1;
        } else {
            l = current + 1;
        }
        // console.log(result, hours, current);


    }
    return result;

}


console.log(minEatingSpeed([30, 11, 23, 4, 20], 5))
