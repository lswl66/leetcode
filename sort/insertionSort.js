// 将数组分为已排序和未排序两部分
// 从未排序部分取出一个元素，称为 base
// 在已排序部分从右向左扫描，寻找插入位置
// 将大于 base 的元素右移
// 在正确的位置插入 base
// 重复步骤2-5，直到所有元素都排序完成
// 插入排序：时间复杂度：O(n²) 空间复杂度：O(1)  稳定性：稳定排序
function insertionSort(nums) {
    // 外层循环从第二个元素开始，因为第一个元素可以认为是已排序的
    for (let i = 1; i < nums.length; i++) {
        // 保存当前要插入的元素
        const base = nums[i]
        // j指向已排序部分的最后一个位置
        let j = i - 1
        // 从右向左遍历已排序部分，寻找插入位置
        // 如果已排序部分的元素大于base，则将其右移一位
        while (j >= 0 && nums[j] > base) {
            // 将较大的元素右移一位
            nums[j + 1] = nums[j]
            // 继续向左比较
            j--
        }
        // 找到插入位置，将base插入到正确的位置
        nums[j + 1] = base
    }
    // 返回排序后的数组
    return nums
}

// 测试用例
console.log(insertionSort([5, 6, 1, 4, 2, 8, 0, 3, 7, 9]));
