var lengthOfLastWord = function(s) {
    var arr = s.split(' ')
    console.log(arr)
    for(let i = arr.length; i > 0; i--){
        if(arr[i - 1]){
            console.log(arr[i - 1].length)
            return arr[i - 1].length
        }
    }
    console.log(0)
    return 0
};

var lengthOfLastWord = function(s) {
    var arr = s.trim().split(' ');
    return(arr[arr.length - 1].length)
};

lengthOfLastWord('Hello World');
lengthOfLastWord('aa          ');
lengthOfLastWord('');
// lengthOfLastWord('a');
