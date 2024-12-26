// 两两比较 从数组左侧开始 把大数 往后面交换 
// 第一轮后 最大的数就在最后
// 两个循环 外面的保证从左到右没个数都比较一次
// 里面的循环 进行比较
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let swapped = false
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                swapped = true
            }
        }
        if (!swapped) break
    }
    return arr
}
console.log(bubbleSort([8, 3, 1, 6, 7, 0, 1, 9, 2, 5]));

// 选定一个基准数（通常是第一个或中间的一个） 找出比基准小的数 和 比基准大的数
// 分成两个数组再 递归进行上面的过程
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    const num = arr[0];
    const leftArr = []
    const rightArr = []
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > num) {
            rightArr.push(arr[i])
        } else {
            leftArr.push(arr[i])
        }
    }

    return [...quickSort(leftArr), num, ...quickSort(rightArr)]
}

console.log(quickSort([8, 3, 1, 6, 7, 0, 1, 9, 2, 5]));
