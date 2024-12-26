var isValid = function(s){
    var len = s.length;
    var obj = {
        '(' : 1, 
        ')' : -1, 
        '[' : 2, 
        ']' : -2, 
        '{' : 3, 
        '}' : -3
    };
    var arr = s.split('')
    var stack = [];
    if(len % 2 != 0){
        console.log('false')
        return false
    }
    for(let i = 0; i < len; i++){
        if(obj[stack[0]] > 0 && obj[stack[0]] + obj[arr[i]] === 0){
            stack.shift()
        }else{
            stack.unshift(arr[i])
        }
    }
    if(stack.length === 0){
        console.log('true')
        return true
    }else{
        console.log('false')
        return false
    }
};

isValid("()")         //true
isValid(")(")         //false
isValid("[()")        //false
isValid("{()[]")      //false
isValid("{()}")       //true
isValid("[]{}()")     //true
isValid("([)]")       //false
isValid("{([)]}")     //false
isValid("(([]){})")   //true
isValid("(])[")       //false

