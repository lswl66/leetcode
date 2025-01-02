// 小王设计了一个简单的猜字谜游戏，游戏的迷面是一个错误的单词，比如nesw，玩家需要猜出迷底库中正确的单词。猜中的要求如下
// 对于某个谜面和谜底单词，满足下面任一条件都表示猜中：
// 1.变换顺序以后一样的，比如通过变换w和e的顺序，“nwes”跟“news”是可以完全对应的；
// 2.字母去重以后是一样的，比如“woood”和“wood”是一样的，它们去重后都是“wod”。
// 请你写一个程序帮忙在谜底库中找到正确的谜底。迷面是多个单词，都需要找到对应的谜底，如果找不到的话，返"not found"。

function main(arr1, arr2) {
    let a1 = arr1.map(item => Array.from(new Set(item.split(''))).sort().join(''));
    let a2 = arr2.map(item => Array.from(new Set(item.split(''))).sort().join(''));
    let arr = [];
    for (let i = 0; i < a1.length; i++) {
        arr.push(arr2[a2.indexOf(a1[i])] || 'not found')
    }
    console.log(arr);
}

main(['wooood', 'nwes'], ['news', 'wood'])
main(['conection'], ['connection', 'today'])
main(['bdni', 'wood'], ['bind', 'wrong', 'wood'])
