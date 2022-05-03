//Create a memoized version of the following fibonacci() recursive method to improve its performance.

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}


const fibonacci1 = (function(){
    const memoize = new Map();

    function fibb(n){
        let value;
        if(memoize.has(n)){
            value = memoize.get(n);
        }else{
            if(n <= 1){
                value = n;
            }else{
                value = fibb(n-1) + fibb(n-2);
            }
            memoize.set(n,value);
        }
        return value;
    }
    return fibb;

})();


console.time("Memoized Version");
console.log(fibonacci1(50));
console.timeEnd("Memoized Version")


console.time ("Not Memoized Version")
console.log(fibonacci(50));
console.timeEnd("Not Memoized Version");