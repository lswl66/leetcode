// 快速排序 算法说明：
// 基本思想 采用分治策略 选择基准值将数组分成两部分 递归处理子数组
// 性能特性：时间复杂度：平均 O(nlogn)，最坏 O(n²) 空间复杂度：O(n)，因为使用了额外数组 不稳定排序
// 注意事项：
// 这是一个简化版本的实现
// 实际应用中通常使用原地排序以优化空间复杂度
// 基准值的选择会影响算法性能
// 可优化点：
// 使用原地排序减少空间复杂度
// 随机选择基准值提高性能
// 处理小规模数组时切换到插入排序

function quickSort(nums) {
    // 获取数组长度
    let n = nums.length
    // 基线条件：如果数组长度小于2，说明已经有序，直接返回
    if (n < 2) return nums

    // 选择第一个元素作为基准值
    let pivot = nums[0]
    // 初始化左右两个数组，分别存储小于和大于基准值的元素
    let left = []
    let right = []

    // 从第二个元素开始遍历数组
    for (let i = 1; i < n; i++) {
        // 如果当前元素大于等于基准值，放入右侧数组
        if (nums[i] >= pivot) {
            right.push(nums[i])
        }
        // 如果当前元素小于基准值，放入左侧数组
        else {
            left.push(nums[i])
        }
    }

    // 递归排序左右数组，并将结果与基准值拼接后返回
    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([5, 6, 1, 4, 2, 8, 0, 3, 7, 9]));