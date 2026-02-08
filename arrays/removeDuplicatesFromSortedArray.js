var removeDuplicates = function(numsArray){
    let x=0;
    for(let i=0; i<numsArray.length; i++){
        if(nums[i]>nums[x]){
            x++;
            nums[x] = nums[i];
        }
    }

    return x+1; //number of unique elements
}


function removeDuplicatesPractise(numarray){
    let x = 0;
    for(let i=0; i<numarray.length; i++){
        if(numarray[i] > x[i]){
            x++;
            numarray[x] = numarray[i];
        }
    }

    return x + 1;
}