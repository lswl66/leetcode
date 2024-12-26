function isPalindrome(x){
    if(x.toString() == x.toString().split('').reverse().join('')){
        console.log(true)
        return true
    }else{
        console.log(false)
        return false
    }
};
isPalindrome(121);
isPalindrome(-121);
isPalindrome(10);
isPalindrome(1);
isPalindrome(010);
