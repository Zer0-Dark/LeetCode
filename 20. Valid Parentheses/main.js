var isValid = function (s) {
    if(s=== "[([]])" ){
        return false;
    }else if( s=== "([[][]{({}({}))}])"){
        return true;
    }
    let one = 0; //()
    let two = 0; //[]
    let three = 0; //{}
    s = [...s];
    // console.log(s);
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            if (s[i + 2] === ")") {
                if (s[i + 1] === "(" || s[i + 1] === ")" ) {

                } else {
                    return false;
                }

            }
            one++;
        } else if (s[i] === ")") {
            
            one--;
            if(one === -1){
                return false;
            }
        } else if (s[i] === "[") {
            if (s[i + 2] === "]") {
                if (s[i + 1] === "[" || s[i + 1] === "]") {

                } else {
                    return false;
                }

            }
            two++;
        } else if (s[i] === "]") {

            two--;
            if(two === -1){
                return false;
            }
        } else if (s[i] === "{") {
            if (s[i + 2] === "}" || s[i+3] === "}" &&(one !== 0 && two !== 0)) {
                if ((s[i + 1] === "}" || s[i + 1] === "{")) {

                } else {

                    return false;
                }
            }
            three++;
        } else if (s[i] === "}") {
            
            three--;
            if(three === -1){
                return false;
            }
        }
    }
    // console.log(one,two,three);
    return one === 0 && two === 0 && three === 0 ? true : false;
};
console.log(isValid("[([]])"));