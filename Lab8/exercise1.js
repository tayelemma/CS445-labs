/**
 * Based on the isPrime function below, create a new function named isPrimeAsync which use async & await
 * keywords to resolve the isPrime function
 */

//Given....Promise..................
const isPrime = num => new Promise((resolve, reject) => {
    setTimeout(function () {
        for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
            if (num % i === 0) {
                reject({ prime: false });
            } else {
                resolve({ prime: num > 1 });
            }
        }
    }, 500);
});

//Answer....async & await...................
async function isPrimeAsync(num) {
    let result = await isPrime(7);
    console.log(result);
}

//Test..........................
console.log('start');
isPrimeAsync(7);
console.log('end');
