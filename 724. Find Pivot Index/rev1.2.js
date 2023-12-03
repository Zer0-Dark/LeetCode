let pivotIndex = function (nums){
    let mid = nums.length - 1;
    let hashTable = new Object();
    while(mid >= 0 ){
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

        hashTable[left - right] = mid;

        mid--;
    }
    console.log(hashTable)
        if(hashTable[0] !== undefined){

            return hashTable[0]
        }else{
            return -1

        }
    

}

console.log( pivotIndex([-1,-1,-1,1,1,1]))