// 一个图像有 n 个像素点，存储在一个长度为 n 的数组 img 里，每个像素点的取值范围[0,255]的正整数。
// 请你给图像每个像素点值加上一个整k(可以是负数)，得到新图 newlmg，使得新图 newlmg 的所有像素平均值最接近中位值 128。
// 请输出这个整数 k。如有多个整数 k 都满足，输出小的那个 k;


function main(arr) {
    let minDiff = Infinity;  // 初始化最小差值为无穷大
    let l = arr.length;
    let res = 0;
    let avg = arr.reduce((p, c) => p + c, 0) / l;
    if (avg === 128) return 0
    for (let i = -127; i <= 128; i++) {
        let total = 0;
        for (let val of arr) {
            let temp = val + i;
            temp = Math.min(temp, 255);
            temp = Math.max(temp, 0);
            total += temp;
        }
        let avg = total / l;
        let diff = Math.abs(avg - 128);
        if (diff < minDiff) {
            minDiff = diff;
            res = i;
        } else if (diff === minDiff && i < res) {
            ret = i;
        }
    }
    return res
}

console.log(main([0, 0, 0, 0])); // 128
console.log(main([111, 111, 11, 251])); // 128
