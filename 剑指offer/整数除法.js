// 题目描述
// 给定两个整数 a 和 b ，求它们的除法的商 a/b ，要求不得使用乘号 '*'、除号 '/' 以及求余符号 '%' 。

// 注意：
// 整数除法的结果应当截去（truncate）其小数部分，例如：truncate(8.345) = 8 以及 truncate(-2.7335) = -2
// 假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−2**31, 2**31−1]。本题中，如果除法结果溢出，则返回 2**31 − 1

function divide(a, b) {
    if (a === 0) return 0;
    if (b === 1) return a;
    if (b === -1) {
        if (a === -Math.pow(2, 31)) return Math.pow(2, 31) - 1;
        return -a;
    }
    const signal = (a > 0 && b > 0) || (a < 0 && b < 0);
    let count = 0;
    a = a > 0 ? -a : a;
    b = b > 0 ? -b : b;

    while (a <= b) {
        let temp = b;
        let c = 1;
        while (temp >= -(2 ** 30) && a <= temp + temp) {
            temp += temp;
            c += c;
        }
        a -= temp;
        count += c;
    }
    return count ? (signal ? count : -count) : 0;
}

console.log(divide(10, 3)); // 3
console.log(divide(-10, 3)); // -3
console.log(divide(-10000, -3)); // 3333
console.log(divide(-10, 30000)); // 0
console.log(divide(1, 1)); // 0