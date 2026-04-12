var isPrime = (num:number):boolean => {
    for(let n:number = 2 ; n ** 2 <= num ;n++){
        if(num % n == 0) return false;
    }
    return true;
}

console.log(isPrime(4));