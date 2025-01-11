// 给定 坐标轴上的一组线段，线段的起点和终点均为整数并且长度不小于1，请你从中找到最少数量的线段，这些线段可以覆盖住所有线段。
// 第一行输入为所有线段的数量，不超过10000，后面每行表示一条线段，格式为“x,y”，x和y分别表示起点和终点，取值范围是[-10^5, 10^5]。
// 输出最少线段数量，为正整数。

function main(arr) {
    let numArr = arr.map(item => item.split(',').map(num => Number(num))).sort((a, b) => a[0] - b[0]);
    let resArr = [];
    let l = numArr.length;
    for (let i = 0; i < l; i++) {
        let current = numArr[i];
        if (resArr.length) {
            let pre = resArr[resArr.length - 1];
            if (current[1] > pre[1]) {
                if (current[0] === pre[0]) {
                    resArr.pop()
                } else if (resArr.length > 1) {
                    let ppre = resArr[resArr.length - 2];
                    if (current[0] <= ppre[1] + 1) {
                        resArr.pop()
                    }
                }
                resArr.push(current)
            }
        } else {
            resArr.push(current)
        }
    }
    return resArr
}

console.log(main(['1,4', '2,5', '3,6']));
console.log(main(['1,3', '2,6', '4,7']));
console.log(main(['1,2', '3,4', '5,6', '7,8']));
console.log(main(['1,3', '-3,0', '2,5', '5,6']));
