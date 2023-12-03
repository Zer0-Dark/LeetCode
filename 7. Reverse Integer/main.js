let reverse = function(x){
    let arr = Array.from(x.toString());
    let result;
if(x >= 0){
    result = arr.reverse();
    result = parseInt(result.join(""));
}else{
    arr.shift();
    result = arr.reverse();
    result.unshift("-");
    result = parseInt(result.join(""));
}
if(result > -Math.pow(2,31) && result < Math.pow(2,31) - 1){
    return result;
}else{
    return result = 0;
}

}
// console.log(-Math.pow(2,31));
