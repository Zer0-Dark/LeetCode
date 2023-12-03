/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isIsomorphic = function (s, t) {
    // make the first in hash
    let firstHash = new Map();
    for (let i = 0; i < s.length; i++) {
        firstHash.set(s[i], i);
    }
    // console.log(firstHash)
    //make the sec in hash
    let secHash = new Map();
    for (let i = 0; i < t.length; i++) {
        secHash.set(t[i], i)
    }
    // console.log(secHash)

    //make sure they equal
    // console.log(Array.from(secHash).flat())
    let flatFirst = Array.from(firstHash).flat()
    let flatSec = Array.from(secHash).flat()
    let tester = 0;
    for (let i = 1; i < flatFirst.length; i += 2) {
        if (flatFirst[i] === flatSec[i]) {
            tester += 1;
        }
    }
    // console.log(tester, flatFirst.length / 2)
 
    return tester == flatFirst.length / 2
};

console.log(isIsomorphic("paper", "title"))