function moveZeroes(numArray){
    let x=0;
    for(let i=0; i<numArray.length; i++){
        if(numArray[i]>0){
            numArray[x] = numArray[i];
            x++;
        }
    }

    for(let j=x; j<numArray.length; j++){
        nums[i] = 0;
    }
}