
let pivotIndex = function(nums) {

    for(let i =0; i < nums.length; i++){
        let right = 0;
        let left = 0;

        // getting the right area value
        for(let j=i+1; j < nums.length; j++ ){
            right += nums[j]
            console.log("right:"+nums[j])
        }

        // getting the left area value
        for(let k =i-1; k >= 0; k-- ){
            left += nums[k]
            console.log("left:"+nums[k])
        }
        console.log("-------"+left,right+"--------")

        if(left === right){
            return i
        }
    }

    return -1
};



console.log(pivotIndex([2,1,-1]))