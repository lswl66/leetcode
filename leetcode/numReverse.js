var reverse = function(x) {
    var arr = x.toString().split('').reverse();
    // console.log(arr[arr.length - 1])
    if(arr[arr.length - 1] === '-'){
        arr.unshift(arr.splice(arr.length - 1, 1))
    }
    // for(let i = 0; i < arr.length; i++){
    //     // console.log(arr)
    //     // console.log(i, arr[i])
    //     if(arr[0] === '0'){
    //         arr.splice(0, 1)
    //     }else{
    //         break
    //     }
    // }
    while(arr[0] === '0'){
        arr.splice(0, 1)
    }
    var num = arr.join('') * 1;
    if(num <= -(2**31) || num >= 2**31 - 1){
        return 0;
    }
    console.log(num)
    return num;
};

reverse(123);
reverse(-123);
reverse(120);
reverse(1200);
reverse(10200);
reverse(901000);
reverse(1534236469);
