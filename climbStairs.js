var climbStairs = function(n){
    var num1 = 1;
    var num2 = 2;
    var numN = 0;
    if(n < 3){
        console.log(n)
        return n
    }
    for(var i = 2; i < n; i++){
        numN = num1 + num2;
        num1 = num2;
        num2 = numN;
    }
    console.log(numN);
    return numN;
};
climbStairs(1);
climbStairs(2);
climbStairs(3);
climbStairs(4);
climbStairs(5);
