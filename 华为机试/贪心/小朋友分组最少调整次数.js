// n (3 ≤ n ≤ 90000 且可以整除 3) 个学生排成一排，学生编号分别是 1 到 n，n 为 3 的整数倍数，老师随机抽签决定将所有学生分成 m 个 3 人的小组（n = 3 * m）。
// 为了便于同组学生交流，老师决定将小组成员安排到一起，也就是同组成员彼此相连，同组任意两个成员之间无其它组的成员。
// 因此老师决定调整队伍，老师每次可以调整任意一名学生到队伍的任意位置，计为调整了一次，请计算最少调整多少次可以达到目标。
// 注意：对于小组之间没有顺序要求，同组学生之间没有顺序要求。

function main(before, after) {
    const groupMap = new Map();
    after.forEach((item, index) => {
        groupMap.set(item, Math.floor(index / 3));
    });

    const groupSequence = before.map(item => groupMap.get(item));

    let count = 0;
    for (let i = 0; i < groupSequence.length; i++) {
        const currentGroup = groupSequence[i];
        const nextGroup = groupSequence[i + 1];
        const thirdGroup = groupSequence[i + 2];

        // 如果没有更多元素可比较，直接结束
        if (nextGroup === undefined || (currentGroup === nextGroup && thirdGroup === undefined)) {
            break;
        }

        // 判断调整逻辑
        if (currentGroup !== nextGroup) {
            count++; // 当前组和下一组不同，需要调整
        } else if (currentGroup === nextGroup && currentGroup === thirdGroup) {
            i += 2; // 三个连续同组，跳过
        } else if (currentGroup === nextGroup && currentGroup !== thirdGroup) {
            i += 1; // 两个连续同组，跳过
        }
    }

    return count;
}

// function main(before, after) {
//     let count = 0;
//     const studentCount = before.length;
//     const groupCount = studentCount / 3;

//     const groupMapping = new Array(studentCount + 1).fill(0);
//     for (let i = 0; i < studentCount; i++) {
//         groupMapping[after[i]] = Math.floor(i / 3);
//     }
//     const groupOrder = before.map(student => groupMapping[student]);

//     const groupPositions = Array.from({ length: groupCount }, () => []);
//     for (let i = 0; i < groupOrder.length; i++) {
//         groupPositions[groupOrder[i]].push(i);
//     }

//     for (const positions of groupPositions) {
//         if (positions.length === 3) {
//             if (positions[1] - positions[0] > 1 || positions[2] - positions[1] > 1) {
//                 count++;
//             }
//         } else if (positions.length === 2) {
//             if (positions[1] - positions[0] > 2) {
//                 count++;
//             }
//         } else if (positions.length === 1) {
//             minimumMoves += 2;
//         }
//     }

//     // const encounteredGroups = new Set();
//     // let overlapAdjustments = 0;
//     // for (const group of groupOrder) {
//     //     if (!encounteredGroups.has(group)) {
//     //         encounteredGroups.add(group);
//     //     } else {
//     //         overlapAdjustments++;
//     //     }
//     // }

//     // count = Math.min(count, overlapAdjustments);

//     return count
// }



// 1
console.log(main([4, 2, 8, 5, 3, 6, 1, 9, 7], [6, 3, 1, 2, 4, 8, 7, 9, 5]));
// 3
console.log(main([4, 2, 8, 5, 3, 6, 1, 9, 7], [6, 3, 4, 2, 1, 8, 7, 9, 5]));
// 0
console.log(main([8, 9, 7, 5, 6, 3, 2, 1, 4], [7, 8, 9, 4, 2, 1, 3, 5, 6]));
