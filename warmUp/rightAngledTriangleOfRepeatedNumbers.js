function rightAngledTriangleOfRepeatedNumbers(num){
    for(let i=0; i< num; i++){
        let row = ""
        for(let j=0; j<i+1; j++){
            row = row + (i+1);
        }
        console.log(row);
    }
}

rightAngledTriangleOfRepeatedNumbers(5);