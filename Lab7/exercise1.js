/**
 *Change isPrime function below that takes in a single number parameter and returns
  a new promise. Using setTimeout and after 500 miliseconds, the promise will either 
  resolve or reject. if the input is prime number, the promise resolves with 
  ({prime:treu}). if the input is not a prime number, it rejects with {prime:false}
 */
//Given.......................
const isPrime_tobe_changed = num => {
    for ( let i = 2, s = Math.sqrt(num); i <= s; i++){
        if(num % i === 0){
            return false;
        }else{
            return num > 1;
        }
    }
}

//Answer.....Promise...................
const isPrime = num => new Promise((resolve, reject) => {
    setTimeout(function () {
        for (let i = 2, s = Math.sqrt(num); i <= s; i++){
            if (num % i === 0){
                reject({ prime: false });
            }else{
                resolve({ prime: num > 1 });
            }   
        }  
    }, 500);
});

//Test...........................
console.log('start');
isPrime(7).then(res => console.log(res))
          .catch(err => console.error(err));
console.log('end');

//Output..........................
//start
//end
//{ prime: true }