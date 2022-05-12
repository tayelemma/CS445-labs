/**
 * Create a method named removeDuplicatesAsync which works only for Array types and removes all
 * duplicates for any array asynchrounusly. You must use async & await. 
 */

//Promise....................
Array.prototype.removeDuplicatesAsync_0000000= function () {
    let arr = this;
    new Promise(function (resolve, reject) {
        resolve([...new Set(arr)]);
    }).then(console.log);
}

//Answer..async & await..............
Array.prototype.removeDuplicatesAsync = async function () {
    let result = await [...new Set(this)];
    console.log(result);
}

//Test.....................
console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync();
console.log(`end`);

//Output...................
//start
//end
//[4,1,5,7,2,3,6]

