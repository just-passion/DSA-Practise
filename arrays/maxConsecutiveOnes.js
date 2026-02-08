function maxConsecutiveOnes(numsArray){
    let currentCount = 0;
    let maxCount = 0;
    for(let i=0; i<numsArray.length; i++){
        if(numsArray[i]===1)
            currentCount+=1
        else{
            maxCount = Math.max(currentCount, maxCount);
            currentCount = 0;
        }
    }

    return Math.max(maxCount, currentCount);
}