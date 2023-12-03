var longestCommonPrefix = function (strs) {
    if(strs.length === 1){
        return strs.join("");
    } 
    for (let i = 0; i < strs.length; i++) {
        strs[i] = [...strs[i]];
    }
    result = strs[0];
    let bigArrLength = strs[0].length;
    for (let one = 0; one < bigArrLength; one++) {
        for (let two = 1; two < strs.length; two++) {
            if (result.includes(strs[two][one])) {
                result.push(strs[two][one])
            }
        }
    }
    console.log(bigArrLength);
    console.log(strs[0].length - 1)
    result.splice(0,bigArrLength );
    result = result.filter((ele,index)=>{
        if(ele === result[index-1]){
            return ele
        }
    })
    return result.join("");

};
console.log(longestCommonPrefix(["a"]));