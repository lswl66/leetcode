// 公司创新实验室正在研究如何最小化资源成本，最大化资源利用率 请你设计算法帮他们解决一个任务分布问题:
// 有taskNum项任务，每个任务有开始时间(startTime) ，结束时间(endTme) 并行度(parallelism) 三个属性，
// 并行度是指这个任务运行时将会占用的服务器数量，一个服务器在每个时刻可以被任意任务使用但最多被一个任务占用，任务运行完成立即释放(结束时刻不占用)。
// 任务分布问题是指给定一批任务，让这批任务由同一批服务器承载运行，请你计算完成这批任务分布最少需要多少服务器，从而最大最大化控制资源成本。

// function main(n, task) {
//     let lastEndTime = 0;
//     // 找到结束时间
//     for (let i = 0; i < n; i++) {
//         if (lastEndTime < task[i][1]) {
//             lastEndTime = task[i][1]
//         }
//     }
//     // 根据结束时间 设定 从 0 - lastEndTime 每个节点位0个服务器
//     let timeLine = new Array(lastEndTime + 1).fill(0)
//     for (let i = 0; i < n; i++) {
//         const start = task[i][0]
//         const end = task[i][1]
//         timeLine[start] += task[i][2]
//         timeLine[end] -= task[i][2]
//         // 根据任务 设置 timeLine 上每个时间节点 服务器增减数量
//     }
//     let maxServer = 0;
//     let currentServer = 0;
//     for (let i = 0; i < timeLine.length; i++) {
//         // 根据增减数量 获取到具体的时间点上最大服务器使用量
//         currentServer += timeLine[i];
//         if (currentServer > maxServer) {
//             maxServer = currentServer
//         }
//     }
//     console.log(maxServer);
// }

function main(n, task) {
    // 事件存储，记录开始和结束的服务器增量
    const events = [];
    for (let i = 0; i < n; i++) {
        const start = task[i][0];
        const end = task[i][1];
        const parallelism = task[i][2];
        events.push([start, parallelism]); // 开始事件，增加服务器
        events.push([end, -parallelism]); // 结束事件，释放服务器
    }

    // 按时间排序，时间相同的情况下，结束事件优先
    events.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);

    let maxServer = 0;
    let currentServer = 0;

    // 扫描所有事件，更新最大服务器需求
    for (const [time, change] of events) {
        currentServer += change;
        maxServer = Math.max(maxServer, currentServer);
    }

    console.log(maxServer);
}


main(3, [
    // start end parallelism
    [2, 3, 1],
    [6, 9, 2],
    [0, 5, 1]
])
// return 2

main(5, [
    [1, 2, 1],
    [2, 3, 2],
    [3, 4, 3],
    [4, 5, 4],
    [5, 6, 5]
])
// return 5