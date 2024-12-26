var longestCommonPrefix = function(strs){
    var str = [];
    if(!strs[0]){
        return ''
    }
    for(let i = 0; i < strs[0].length; i++){
        for(var j = 1; j < strs.length; j++){
            // console.log(strs[0][i],strs[j][i])
            if(strs[0][i] != strs[j][i]){
                console.log(str.join(''))
                return str.join('');
            }
        }
        // console.log(j)
        if(j == strs.length){
            str.push(strs[0][i])
            // console.log(str)
        }
    }
    // console.log(str[0] ? str.join('') : '""')
    console.log(str.join(''))
    // return str[0] ? str.join('') : '""';
    return str.join('');
};

longestCommonPrefix(["dog","racecar","car"])
longestCommonPrefix(["flower","flow","flight"])
longestCommonPrefix([])
longestCommonPrefix(['daca', 'dcba'])
