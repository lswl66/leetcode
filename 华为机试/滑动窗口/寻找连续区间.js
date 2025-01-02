// 给定一个含有N个正整数的数组，求出有多少连续区间（包括单个正整数），它们的和大于等于 x

function main(x, arr) {
    let count = 0;
    // if (arr.reduce((a, b) => a + b, 0) < x) return 0
    for (let i = 1; i < arr.length; i++) {
        if (arr.slice(0, i).reduce((a, b) => a + b, 0) >= x) {
            count += (arr.length - i + 1)
            break
        }
    }
    for (let i = 1; i < arr.length; i++) {
        if (arr.slice(i, arr.length).reduce((a, b) => a + b, 0) < x) {
            return count
        } else {
            count++
        }
    }
    return count
}

console.log(main(7, [3, 4, 7]));
console.log(main(7, [1, 2, 3, 4, 5, 6]));
console.log(main(7, [1, 1, 1, 1, 1]));
console.log(main(71, [1, 1, 88, 1, 1]));
