function reverseRightAngledTriangleOfIncreasingNumbers(num){
    for(let i=0; i< num; i++){
        let row = "";
        for(let j = 0; j<num-i; j++){
            row = row + (j+1);
        }
        console.log(row);
    }
}

reverseRightAngledTriangleOfIncreasingNumbers(4);

/* 
i=0; j=4 times
i=1; j=3 times
i=2; j=2 times
i=3; j=1 time
*/