function evenOrOdd(num){
    if(num%2 === 0) {
        return "Number is Even";
    }
    else{
        return "Number is Odd";
    }
}

const result = evenOrOdd(8);
console.log(result);