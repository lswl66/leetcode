var romanToInt = function(roman){
    var romanMap = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000}
    var num = 0;
    for(let i = 0; i < roman.length; i++){
        // console.log(romanMap[roman[i]], romanMap[roman[i+1]])
        if(romanMap[roman[i]] < romanMap[roman[i+1]]){
            num -= romanMap[roman[i]]
        }else{
            num += romanMap[roman[i]]
        }
    }
    // console.log(num)
    return num;
};
romanToInt('III')
romanToInt('IV')
romanToInt('IX')
romanToInt('LVIII')
romanToInt('MCMXCIV')
