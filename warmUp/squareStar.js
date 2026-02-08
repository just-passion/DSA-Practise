function squareStar(num){
    for(let i=0; i<num; i++){
        let row = ""
        for(let i=0; i<num;i++){
            row = row + "*"
        }
        console.log(row);
    }
}

squareStar(2)