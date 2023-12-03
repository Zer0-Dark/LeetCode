let pivotIndex = function (nums){
    let mid =0;
    while(mid < nums.length){
        //get the right
        let right = 0;
        for(let i=mid+1; i< nums.length; i++){
            right+= nums[i];
        }
        //get the left 
        let left = 0;
        for(let i = mid -1 ; i >= 0; i--){
            left += nums[i]
        }

        if(right === left){
            return mid
        }

        mid++;
    }
    return -1;

}

console.log( pivotIndex([-1,-1,1,-1,-1,0]))