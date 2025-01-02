// 一、题目描述
// 祖国西北部有一片大大的荒地，其中零星的分布着一些湖泊、保护区、矿区；
// 整体上光照良好，但是也有一些地区光照不太好。
// 某电力公司希望在这里建设多个光伏电站，并考察清洁能源对每平方公里的土地进行了发电评估，其中不能建设的区域发电量为0kw，可以发电的区域根据光照、地形等条件给出了每平方公里年发电量x千瓦。
// 我们希望能够找到其中集中且矩形区域建设电站，能够获得良好的收益。
// 二、输入描述
// 第一行输入为调研的地长L、宽W，以及准备建设的电站【长宽相等，为正方形】的边长K，要求的发电量。
// 之后每行为调研区域每平方公里的发电量。
// 三、输出描述
// 输出为这样的区域有多少个。 

// 滑动窗口
function main(L, W, K, need, arr) {
    let count = 0;
    const prefixSum = Array.from({ length: L + 1 }, () => Array(W + 1).fill(0));
    for (let i = 1; i <= L; i++) {
        for (let j = 1; j <= W; j++) {
            prefixSum[i][j] = arr[i - 1][j - 1] + prefixSum[i][j - 1] + prefixSum[i - 1][j] - prefixSum[i - 1][j - 1]
        }
    }

    for (let i = K; i <= L; i++) {
        for (let j = K; j <= W; j++) {
            const total = prefixSum[i][j] - prefixSum[i][j - K] - prefixSum[i - K][j] + prefixSum[i - K][j - K]
            if (total >= need) count++
        }
    }
    return count
}

// 4
console.log(main(2, 5, 2, 6, [[1, 4, 3, 5, 8], [2, 3, 6, 7, 1]]));
// 0
console.log(main(3, 3, 2, 30, [[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
// 10
console.log(main(5, 5, 2, 15, [[1, 4, 3, 5, 8], [2, 3, 6, 7, 1], [1, 4, 3, 5, 8], [1, 4, 3, 5, 8], [1, 4, 3, 5, 8],]));
