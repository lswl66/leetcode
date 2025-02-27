// 题目描述
// 给定两个 01 字符串 a 和 b ，请计算它们的和，并以二进制字符串的形式输出。
// 输入为 非空 字符串且只包含数字 1 和 0。

// 示例 1:
// 输入: a = "11", b = "10"
// 输出: "101"
// 示例 2:
// 输入: a = "1010", b = "1011"
// 输出: "10101"

function addBinary(a, b) {
    const len = Math.max(a.length, b.length);
    let x = a.padStart(len, '0')
    let y = b.padStart(len, '0')
    let carry = false
    let res = []
    for (let i = len - 1; i >= 0; i--) {
        let chartX = parseInt(x[i])
        let chartY = parseInt(y[i])
        let sum = chartX + chartY

        if (sum === 1) {
            res.push(carry ? 0 : 1)
        } else {
            res.push(carry ? 1 : 0)
            carry = sum === 2
        }
    }
    return (carry ? '1' : '') + res.reverse().join('')
}
console.log(addBinary('1', '11'));// 100
console.log(addBinary('10', '11'));// 101
console.log(addBinary('11', '11'));// 110
console.log(addBinary('1010', '1011'));// 10101