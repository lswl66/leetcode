// 一、题目描述
// 有5台打印机打印文件，每台打印机有自己的待打印队列。
// 因为打印的文件内容有轻重缓急之分，所以队列中的文件有1~10 不同的 优先级，其中数字越大优先级越高。
// 打印机会从自己的待打印队列中选取优先级最高的文件来打印。
// 如果存在两个优先级一样的文件，则选择最早进入队列的那个文件。
// 现在请你来模拟这5台打印机的打印过程。
// 二、输入描述
// 每个输入包含1个测试用例，
// 每个测试用例第一行给出发生事件的数量 N （0 < N < 1000）。
// 接下来有 N 行，分别表示发生的事件。共有如下两种事件：
// IN P NUM，表示有一个拥有优先级 NUM 的文件放到了打印机 P 的待打印队列中。（0 < P <= 5, 0 < NUM <= 10）；
// OUT P，表示打印机 P 进行了一次文件打印，同时该文件从待打印队列中取出。（0 < P <= 5）。
// 三、输出描述
// 对于每个测试用例的，每次 OUT P 事件，请在一行中输出文件的编号。
// 如果此时没有文件可以打印，请输出**“NULL”**。
// 文件的编号定义为为第 IN P NUM 事件发生第 x 次，此处待打印文件的编号为 x。编号从1开始。

function main(n, arr) {
    let inArr = [];
    let outArr = [];
    for (let i = 0; i < n; i++) {
        let a = arr[i].split(' ');
        const command = a[0];
        if (command === 'IN') {
            inArr.push({
                p: a[1],
                num: +a[2],
                id: i + 1
            })
        } else {
            outArr.push(a[1])
        }
    }
    inArr.sort((a, b) => {
        if (a.num !== b.num) {
            return b.num - a.num
        }
        return a.id - b.id
    })
    outArr.forEach(item => {
        const r = inArr.findIndex(inEvent => inEvent.p === item)
        console.log(r > -1 ? inArr.splice(r, 1)[0].id : 'NULL')
    })
}

main(7, [
    'IN 1 1',
    'IN 1 2',
    'IN 1 3',
    'IN 2 1',
    'OUT 1',
    'OUT 2',
    'OUT 2',
])
main(6, [
    'IN 3 4',
    'IN 3 5',
    'IN 3 5',
    'OUT 3',
    'OUT 3',
    'OUT 3',
])
main(4, [
    'IN 2 7',
    'IN 2 7',
    'OUT 2',
    'OUT 2',
])