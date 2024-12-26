/* 
    从一个长度为N的正整数数组numbers中找出长度至少为L且几何平均值Q最大的子数组，并输出其位置和大小。（K个数的几何平均值为K个数的乘积的K次方根）
    若有多个子数组的几何平均值均为最大值Q，则输出长度最小的子数组。
    若有多个长度最小的子数组的几何平均值均为最大值，则输出最前面的子数组。
*/

// 更长子数组的几何平均值不一定更小 但一定不会更大
function getArr(l, arr) {
    const n = arr.length;
    const logArr = arr.map(item => Math.log(item))
    const sumArr = new Array(n + 1).fill(0);

    for (let i = 1; i < n + 1; i++) {
        sumArr[i] = sumArr[i - 1] + logArr[i - 1]
    }


    let maxLogAverage = -Infinity;
    let resultStartIndex = 0;
    let resultLength = l; // 最大的几何平均值数组 就是长度最短情况下的 最大值 长度最短情况就是 '至少为l'

    for (let i = l; i <= n; i++) {
        const currentLogAverage = (sumArr[i] - sumArr[i - l]) / l;
        if (currentLogAverage - maxLogAverage > 1e-10) {
            maxLogAverage = currentLogAverage;
            resultStartIndex = i - l;
        }
    }
    console.log(resultStartIndex);
    console.log(resultLength);
}

const l = 2;
const arr = [0.2, 0.2, 0.1, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.2]

// const l = 2;
// const arr = [1, 2, 3, 4, 5, 6];


// const l = 2;
// const arr = [2, 2, 3]

getArr(l, arr);