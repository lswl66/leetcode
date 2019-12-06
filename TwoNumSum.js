var twoSum = function(nums, target) {
    var arr = [];
    for(let i = 0; i < nums.length; i++){
        arr = nums.slice(i + 1, nums.length)
        // console.log(arr)
        if(arr.indexOf(target - nums[i]) != -1){
            // console.log([i,arr.indexOf(target - nums[i]) + i + 1])
            return [i,arr.indexOf(target - nums[i]) + i + 1]
        }
    }
    // console.log('noResult')
    return 'noResult!'
};

twoSum([4, 3, 2, 5],8);
twoSum([3, 3],6);
twoSum([3, 4, 2],6);
twoSum([4, 3, 2, 5],10);
