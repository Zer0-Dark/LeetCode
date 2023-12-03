/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let hashTable = new Map();
    for (let i = 0; i < 100; i++) {
        n = n.toString();
        let k = 0
        for (let i = 0; i < n.length; i++) {
            k += Math.pow(+(n[i]), 2);
        }

        n = k;
        if (n == 1) {
            return true
        }


        if (hashTable.has(n)) {
            return false
        } else {
            hashTable.set(n, n);
        }

    }
};
console.log(isHappy(1221))