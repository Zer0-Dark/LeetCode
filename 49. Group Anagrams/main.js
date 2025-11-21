/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let test = new Map();

    for (let i = 0; i < strs.length; i++) {
        const sorted = strs[i].split('').sort().join('');
        if (test.has(sorted)) {
            test.get(sorted).push(strs[i]);
        } else {
            test.set(sorted, [strs[i]]);
        }
    }



    return Array.from(test.values());
 

};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));