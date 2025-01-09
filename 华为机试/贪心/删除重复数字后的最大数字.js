// 给定一个由纯数字组成以字符串表示的数值，现要求字符串中的每个数字最多只能出现 2 次，超过的需要进行删除；
// 删除某个重复的数字后，其它数字相对位置保持不变。
// 如"34533"，数字 3 重复超过 2 次，需要删除其中一个 3，删除第一个 3 后获得最大数值 “4533”。
// 请返回经过删除操作后的最大值，以字符串表示。

function main(num) {
    let numMap = {};
    let result = []
    let resultMap = {}
    for (let i = 0; i < num.length; i++) {
        numMap[num[i]] ? numMap[num[i]]++ : (numMap[num[i]] = 1);
    }

    for (let i = 0; i < num.length; i++) {
        let current = Number(num[i])
        // 用最大数替换结果最后一位
        if (result.length) {
            let dig = result[result.length - 1]
            if (numMap[dig] > 2 && dig < current) {
                result.pop()
                resultMap[dig]--
                numMap[dig]--
            }
        }
        // 结果里如果没有
        if (!resultMap[current]) {
            result.push(current)
            resultMap[current] = 1
            // 结果里如果已经有2个 不能再添加相同数字
        } else if (resultMap[current] < 2) {
            result.push(current)
            resultMap[current]++
        }
    }
    return result.join('')
}

console.log(main('32533')); // 3253
console.log(main('5445795045')); // 5479504
console.log(main('13441156533564')); // 4411653356
