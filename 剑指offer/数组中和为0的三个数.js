// 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a ，b ，c ，使得 a + b + c = 0 ？请找出所有和为 0 且 不重复 的三元组。

function threeSum(nums) {
    const n = nums.length
    nums.sort((a, b) => a - b) // 从小到大排序
    let ans = []
    for (let i = 0; i < n - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue // 如果当前数和前一个数相同 则跳过 去除重复项
        if (nums[i] + nums[i + 1] + nums[i + 2] > 0) break // 如果当前数加上后两个数 大于0 则后续不存在符合条件的数了
        if (nums[i] + nums[n - 1] + nums[n - 2] < 0) continue // 如果当前数加上 最大的两个数 小于0 贼当前数找不到等于0 的情况 下一次循环
        let j = i + 1
        let k = n - 1
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k]
            if (sum === 0) {
                ans.push([nums[i], nums[j], nums[k]])
                j++;
                k--;
                while (j < k && nums[j] === nums[j - 1]) { // 如果当前 j 和上一个 j 相同 则跳过 去除重复项
                    j++;
                }
                while (j < k && nums[k] === nums[k + 1]) {  // 如果当前 k 和上一个 k 相同 则跳过 去除重复项
                    k--;
                }
            } else if (sum > 0) {
                k--
            } else {
                j++
            }
        }
    }
    return ans
}
console.log(threeSum([-4, -1, -1, 0, 1, 2, 2, 3])); // [[-4, 1, 4], [-4, 2, 2], [-1,-1,2],[-1,0,1]]
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, 1, 0], [-1,-1,2]]
console.log(threeSum([0])); // []
console.log(threeSum([-2, 0, 0, 2, 2])); // [-2, 0 ,2]
