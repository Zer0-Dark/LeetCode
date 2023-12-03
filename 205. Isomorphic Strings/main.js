let isIsomorphic = function(s, t) {
    let pairs = [];
    for(let i =0; i < s.length; i++){
        if(!pairs.includes(`${s[i]}${t[i]}`)){
            pairs.push(`${s[i]}${t[i]}`)
            console.log(pairs,t.length)
            if(s[i] === t[i] && t.length <= 2){
                return true
            }
        }else{
            return true
        }
        
    }
    return false
};

console.log(isIsomorphic("aaeaa","uuxyy"))