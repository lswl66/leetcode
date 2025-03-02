// 给定一个字符串数组 words，请计算当两个字符串 words[i] 和 words[j] 不包含相同字符时，它们长度的乘积的最大值。
// 假设字符串中只包含英语的小写字母。如果没有不包含相同字符的一对字符串，返回 0。

// 示例 1:
// 输入: words = ["abcw","baz","foo","bar","fxyz","abcdef"]
// 输出: 16 
// 解释: 这两个单词为 "abcw", "fxyz"。它们不包含相同字符，且长度的乘积最大。

// 示例 2:
// 输入: words = ["a","aa","aaa","aaaa"]
// 输出: 0 
// 解释: 不存在这样的两个单词。


function maxProduct(words) {
    const n = words.length
    // 将每个单词的字母转化为 数字
    const masks = new Array(n).fill(0)
    for (let i = 0; i < n; i++) {
        // 去除单词内部重复字母 这里只是为了转化为二进制掩码判断单词间是否有重复
        new Set(words[i].split('')).forEach(c => {
            // 将每个字母 左移制定位置然后 取或 mask[i] 的对应二进制位 就是1 其他位就是0
            masks[i] |= 1 << (c.charCodeAt(0) - 'a'.charCodeAt(0))
        })
    }
    let ans = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            // 挨个进行 与 运算 如果有重复就不会是 0
            if ((masks[i] & masks[j]) === 0) {
                ans = Math.max(ans, words[i].length * words[j].length);
            }
        }
    }
    return ans
}

console.log(maxProduct(["abcw", "baz", "foo", "bar", "fxyz", "abcdef"]));
console.log(maxProduct(["a", "ba", "bac", "bacd", "abcdef", 'abcde']));
