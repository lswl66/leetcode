// 一只贪吃的猴子，一只贪吃的猴子，来到一个果园，发现许多串香蕉排成一行，每串香蕉上有若干根香蕉。每串香蕉的根数由数组numbers给出。
// 猴子获取香蕉，每次都只能从行的开头或者末尾获取，并且只能获取N次，求猴子最多能获取多少根香蕉。

// function main(n, arr) {
//     if (arr.length <= n) {
//         return arr.reduce((p, c) => p + c, 0)
//     }
//     if (arr.length - 1 === n) {
//         return arr.reduce((p, c) => p + c, 0) - Math.min(...arr)
//     }

//     let nArr = [...arr.slice(arr.length - n, arr.length), ...arr.slice(0, n)]
//     let max = 0;
//     for (let i = 0; i <= nArr.length - n; i++) {
//         const sum = nArr.slice(i, i + n).reduce((p, c) => p + c, 0);
//         if (sum > max) {
//             max = sum
//         }
//     }
//     return max
// }

function main(n, arr) {
    const length = arr.length;
    if (n >= length) {
        const total = arr.reduce((a, b) => a + b, 0);
        return total;
    }

    const prefixSum = Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        prefixSum[i] = prefixSum[i - 1] + arr[i - 1];
    }

    const suffixSum = Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        suffixSum[i] = suffixSum[i - 1] + arr[length - i];
    }

    let maxBananas = 0;
    for (let i = 0; i <= n; i++) {
        const currentBananas = prefixSum[i] + suffixSum[n - i];
        if (currentBananas > maxBananas) {
            maxBananas = currentBananas;
        }
    }
    return maxBananas
}

console.log(main(3, [4, 2, 2, 3]));
console.log(main(5, [4, 2, 2, 3, 1, 3, 2]));
console.log(main(2, [4, 2, 2, 3]));
console.log(main(4, [3, 5, 9, 3, 3, 4, 6, 6]));
console.log(main(3, [1, 100, 1, 3, 3, 4, 6, 6]));
