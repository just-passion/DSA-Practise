function isPalindrome(num){
    if(num<0) return false;
    let numCopy = num;
    let rev = 0;
    while(num>0){
        let rem = num % 10;
        rev = rev * 10 + rem;
        num = Math.floor(num / 10);
    }

    return rev === numCopy
}

console.log("Number is palindrome or not :", isPalindrome(2332))

function reverseAnInteger(num){
    let rev = 0;

    while(num > 0){
        let rem = num % 10;
        rev = (rev * 10) + rem;
        num = Math.floor(num /10);
    }

    return rev;
}

console.log("Reveresed integer: ", reverseAnInteger(123));