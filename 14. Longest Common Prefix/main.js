var longestCommonPrefix = function (strs) {
    let result = "";
    let curr = "";
    // make array from every word
    console.log(strs);
    for (let i = 0; i < strs.length; i++) {
        strs[i] = [...strs[i]];
    }
    console.log(strs);
    result = strs[0];
    for (let j = 1; j < strs.length; j++) {
        console.log("first loop", strs[j]);
        for (let i = 0; i < result.length; i++) {
            if (result[i] === strs[j][i]) {
                console.log("app res", result[i]);
                if (result[i - 1] === strs[j][i - 1] && i > 0) {
                    console.log("app res", result[i]);
                    console.log("app res", strs[j][i]);
                    result[i] === result[i];
                }
            } else {
                curr += result[i];
                console.log("-- !")
                console.log("res :", result);
            }
        }
    }
    console.log("this is",curr);
    console.log(result);
    return result.join("");
}

console.log(longestCommonPrefix(["cir", "car"]));
