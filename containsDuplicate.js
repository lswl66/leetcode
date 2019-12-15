var containsDuplicate = function(nums) {
    while(nums.length > 1){
        let num = nums[0];
        nums.shift()
        // console.log(nums,num)
        if(nums.indexOf(num) !== -1){
            // console.log(true)
            return true;
        }
    }
    // console.log(false)
    return false
};
containsDuplicate([1,2,3,1]);
containsDuplicate([1,2,3,4]);
containsDuplicate([1,1,2,3,3,4,5,6]);
containsDuplicate([7,3,2,1,2]);
containsDuplicate([1024,2048]);
