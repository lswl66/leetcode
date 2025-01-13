// 部门在进行需求开发时需要进行人力安排。当前部门需要完成 N 个需求，需求用 requirements[i] 表示，requirements[i] 表示第 i 个需求的工作量大小，单位：人月。
// 这部分需求需要在 M 个月内完成开发，进行人力安排后每个月的人力是固定的。
// 目前要求每个月最多有 2 个需求开发，并且每个月需要完成的需求不能超过部门人力。请帮部门评估在满足需求开发进度的情况下，每个月需要的最小人力是多少？

function main(m, requirements) {
    const r = requirements.sort((a, b) => a - b); // 从小到大排序
    const l = r.length;
    let min = r[l - 1]; // 每月需求不能超过部门人力 所以人力最少也要满足最大的呢个需求的值
    if (l === m) { // 如果需求数 跟 月数一致 则最大的呢个需求需要的人力 就是最小人力
        return min
    } else {
        // [1 2 5 5 6] --> [2, 1] , [5, 5, 6] // 每月最多同时两个需求 分成大一点的 和 小一点的 两部分就行
        let left = r.splice(0, l % m).reverse();
        for (let i = 0; i < left.length; i++) {
            // 用较小组最大的 + 较大组最小的 可以得出当前这步最少需要多少
            let j = r.findIndex(item => item + left[i] > min);
            if (j === -1) { // 如果不存在 说明当前最小值满足需要
                return min;
            } else if (j === 0) { // 如果第一个就不满足 需要更新最小值
                min = r[j] + left[i]
                r.splice(0, 1) // 更新后第一个就满足了 去掉
            } else {
                r.splice(j - 1, 1) // 去掉前一个满足的数
            }
            // 每一步尽量找到满足最小人力的最大数，找不到就更新最小人力
        }
    }
    return min
}

console.log(main(3, [1, 2, 5, 5, 6]));
console.log(main(3, [1, 2, 3, 5, 6]));
console.log(main(3, [3, 3, 4, 5]));
