function reverseString(string){
    let len = string.length;
    let halfLen = Math.floor(len / 2);

    for(i=0; i< halfLen; i++){
        let temp = string[i];
        string[i] = string[len-i-1];
        string[len -i-1] = temp;
    }
}