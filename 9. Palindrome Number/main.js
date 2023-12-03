function result(x){
    x = x.toString();
    let arr = [...x];
    let revArr = [];
    for(let i=0; i < arr.length; i++){
        revArr.unshift(arr[i]);
    }
    for(let i=0; i < arr.length; i++){
        if(arr[i] !== revArr[i]){
            return false;
        }

    }
    return true; 
}
console.log(result(123));