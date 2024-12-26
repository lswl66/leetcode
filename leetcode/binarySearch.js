// 二分查找需要现有一个已经排序的数组
// 选取中间的数为基准 判断目标在左侧还是右侧
// 重复进行检查
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((right + left) / 2)
        if (arr[mid] === target) return mid
        if (arr[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return -1
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9));
