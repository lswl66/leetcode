// 贪吃蛇是一个经典游戏，蛇的身体由若干方格连接而成，身体随着蛇头移动。蛇头触碰到食物时，蛇的长度会增加一格。蛇头和身体的任何一方格或者游戏版图边界碰撞时，游戏结束。
// 下面让我们来完成贪吃蛇游戏的模拟。
// 给定一个 NM 的数组 arr，代表 NM 个方格组成的版图，贪吃蛇每次移动一个方格。
// 若 arr[i][j] == ‘H’，表示该方格为贪吃蛇的起始位置；
// 若 arr[i][j] == ‘F’，表示该方格为食物；
// 若 arr[i][j] == ‘E’，表示该方格为空格。
// 贪吃蛇初始长度为 1，初始移动方向为向右。
// 为给定一系列贪吃蛇的移动操作 K，返回操作后蛇的长度，如果在操作执行完之前已经游戏结束，返回游戏结束时蛇的长度。
// 输入第一行为空格分隔的字母，代表贪吃蛇的移动操作。
// 字母取值为 U、D、L、R 和 G。
// U、D、L、R 分别表示贪吃蛇向上、下、左、右移动，转向时贪吃蛇不移动，G 表示贪吃蛇按当前方向移动一格。
// 用例保证输入操作是正确的。
// 第二行为空格分隔的两个数，指定 N 和 M，为数组的行和列数。
// 余下 N 行每行是空格分隔的 M 个字符。字母取值为 H、F 和 E，H 表示贪吃蛇的起始位置，F 表示食物，E 表示该方格为空。
// 用例保证且只有一个 H 和 F，而 F 绝不会为 G。

function main(command, size, inner) {
    let currentDir = 'R'
    let snake = [];
    let row = +size.split(' ')[0]
    let column = +size.split(' ')[1]
    let sMap = inner.map((item, index) => {
        let row = item.split(' ');
        if (row.indexOf('H') > -1) {
            snake.push(`${index} ${row.indexOf('H')}`)
        }
        return row
    });
    const commands = command.split(' ');

    for (let i = 0; i < commands.length; i++) {
        if (commands[i] === 'G') {
            const current = snake[0].split(' ').map(Number);
            let next;
            switch (currentDir) {
                case 'U':
                    next = [current[0] - 1, current[1]]
                    break;
                case 'D':
                    next = [current[0] + 1, current[1]]
                    break;
                case 'L':
                    next = [current[0], current[1] - 1]
                    break;
                case 'R':
                    next = [current[0], current[1] + 1]
                    break;
                default:
                    break;
            }

            if (next[0] < 0 || next[0] >= row || next[1] < 0 || next[1] >= column) {
                return snake.length
            } else if (snake.indexOf(`${next[0]} ${next[1]}`) > -1) {
                return snake.length
            } else {
                let result = sMap[next[0]][next[1]]
                snake.unshift(`${next[0]} ${next[1]}`);
                if (result !== 'F') {
                    snake.pop();
                }
            }
        } else {
            currentDir = commands[i]
        }
    }
    return snake.length
}

console.log(main('D G G', '3 3', ['F F F', 'F F H', 'E F E']));
console.log(main('R G G', '3 3', ['F E E', 'H E F', 'E E E']));

