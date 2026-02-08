function rightAngledStar(num){
    for(let i=0; i<num; i++){
        let row = ""
        for(let j=0; j< i+1; j++){
            row = row + "*"
        }
        console.log(row)
    }
}

rightAngledStar(5)