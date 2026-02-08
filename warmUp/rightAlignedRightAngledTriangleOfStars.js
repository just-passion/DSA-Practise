function rightAlignedRightAngledTriangleOfStars(num){
    for(let i=0; i< num; i++){
        let row = "";
        for(let j = 0; j< (num-(i+1)) ;j++){
            row = row + " "
        }

        for(let k=0; k<i+1;k++){
            row = row + "*"
        }

        console.log(row)
    }
}

rightAlignedRightAngledTriangleOfStars(4);


/* 
i=0  space=3 times star y = 1
i=1  space=2 times star y = 2
i=2  space=1 times star y = 3
i=3  space=0 times star y = 4

n=4
*/