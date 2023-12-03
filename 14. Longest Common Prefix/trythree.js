var longestCommonPrefix = function (strs) {
    let result = "";
    // make array from every word
    // make arrays from inputs
    for (let i = 0; i < strs.length; i++) {
        strs[i] = [...strs[i]];
    }
    result = strs[0];
    // the diff loop
    for (let j = 1; j < strs.length; j++) {
        for (let i = 0; i < result.length; i++) {
            if (result[i] === strs[j][i]) {
                if (result[i - 1] === null) {
                    result[i] = null;
                }else{
                    result[i] === result[i];
                }
            } else {
                result[i] = null;
            }
        }
    }
    return result.join("");
};
console.log(longestCommonPrefix(["cir", "car"]));