// 给定一个已按照 升序排列  的整数数组 numbers ，请你从数组中找出两个数满足相加之和等于目标数 target 。
// 函数应该以长度为 2 的整数数组的形式返回这两个数的下标值。numbers 的下标 从 0 开始计数 ，所以答案数组应当满足 0 <= answer[0] < answer[1] < numbers.length 。
// 假设数组中存在且只存在一对符合条件的数字，同时一个数字不能使用两次。

// function twoSum(nums, target) {
//     const n = nums.length;
//     for (let i = 0; i < n - 1; i++) {
//         let mid = Math.floor((n + i) / 2)
//         if (nums[i] + nums[mid] > target) {
//             for (let j = i + 1; j <= mid; j++) {
//                 if (nums[i] + nums[j] === target) {
//                     return [i, j]
//                 }
//             }
//         } else
//             for (let j = mid; j <= n; j++) {
//                 if (nums[i] + nums[j] === target) {
//                     return [i, j]
//                 }
//             }
//     }
// }
// O(n*logn/2)

function twoSum(numbers, target) {
    for (let i = 0, j = numbers.length - 1; ;) {
        const x = numbers[i] + numbers[j];
        if (x === target) {
            return [i, j];
        }
        if (x < target) {
            ++i;
        } else {
            --j;
        }
    }
}

console.log(twoSum([1, 2, 4, 6, 10], 8));
console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([-1, 0], -1));
