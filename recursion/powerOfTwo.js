function isPowerOfTwo(num){
    if(num === 1) return true;
    if(num % 2 !== 0) return false

    return isPowerOfTwo(num/2);
}

console.log("is Power of two: ", isPowerOfTwo(8))