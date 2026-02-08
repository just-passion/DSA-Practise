function rightAngledNumberTriangle(num){
    for(let i=0; i<num; i++){
        let row = "";
        for(let j=0; j<i+1; j++){
            row = row + (j+1);
        }
        console.log(row)
    }
}

rightAngledNumberTriangle(5);