// 遍历整个数组 每次找到未排序部分中的最小值 将最小值放到已排序部分的末尾 重复这个过程直到所有元素都排序完成
// 选择排序 时间复杂度为 O(n²)，空间复杂度为 O(1)。
function selectionSort(nums) {
    // 外层循环，i表示当前要确定的位置
    for (let i = 0; i < nums.length; i++) {
        // k用来记录最小值的索引，初始化为当前位置i
        let k = i
        // 内层循环，从i+1开始遍历未排序部分
        for (let j = i + 1; j < nums.length; j++) {
            // 如果找到比当前最小值更小的元素
            if (nums[j] < nums[k]) {
                // 更新最小值的索引
                k = j
            }
        }
        // 将找到的最小值与当前位置i进行交换，使用解构赋值
        [nums[i], nums[k]] = [nums[k], nums[i]]
    }
    // 返回排序后的数组
    return nums
}

// 测试用例
console.log(selectionSort([5, 6, 1, 4, 2, 8, 0, 3, 7, 9]));