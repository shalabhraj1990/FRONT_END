"use strict";
var isPrime = (num) => {
    for (let n = 2; n ** 2 <= num; n++) {
        if (num % n == 0)
            return false;
    }
    return true;
};
console.log(isPrime(4));
