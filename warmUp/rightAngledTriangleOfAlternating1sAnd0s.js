function rightAngledTriangleOfAlternating1sAnd0s(num){
    for(let i=0; i< num; i++){
        let row = "";
        let toggle = 1;
        for(let j=0; j<i+1; j++){
             row = row + toggle;
             toggle = toggle == 1 ? 0 : 1;
        }

        console.log(row)
    }
}

function rightAngledTriangleOfAlternating1sAnd0sGlobal(num){
    let toggle = 1;
    for(let i=0; i< num; i++){
        let row = "";
        for(let j=0; j<i+1; j++){
             row = row + toggle;
             toggle = toggle == 1 ? 0 : 1;
        }

        console.log(row)
    }
}

rightAngledTriangleOfAlternating1sAnd0s(4);
rightAngledTriangleOfAlternating1sAnd0sGlobal(4);