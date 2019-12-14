var generate = function(numRows) {
    let arr = [];
    for(let i = 0; i < numRows; i++){
        // console.log(i)
        let rowArr = [];//行数组
        for(let j = 0; j < i + 1; j++){
            // console.log(j)
            //每行第一个和最后一个为 1
            if(j === 0 || j === i){
                rowArr.push(1)
            }else{
            // 每行其它元素为上一行 第j个与第j-1之和
                rowArr.push(arr[i-1][j-1] + arr[i-1][j])
            }
            // console.log(rowArr)
        }
        arr.push(rowArr)
    }
    // console.log(arr)
    return arr
};
generate(1);
generate(2);
generate(3);
generate(4);
generate(9);
