/* The array returned from eitherFilter should contain all elements in the passed-in array that yield a truthy return value 
when passed into EITHER of the two callbacks passed into eitherFilter. */

function eitherFilter(array, callback1, callback2) {
    let newArr = [];
    for(let i=0; i<array.length; i++) {
        if(callback1(array[i]) || callback2(array[i])) {
            newArr.push(array[i]);
        }
    }
    return newArr;
}

const arrOfNums = [10, 35, 105, 9];
const integerSquareRoot = n => Math.sqrt(n) % 1 === 0;
const over100 = n => n > 100;
console.log(eitherFilter(arrOfNums, integerSquareRoot, over100)); // should log: [105, 9]

// -----------------------------------------------------------------------------------------------------------------------------

/* The result of using eitherCallback to combine two callbacks into one callback and then passing that one callback into filterArray 
 should match the results of simply passing the two callbacks into eitherFilter in the previous challenge. */

 function eitherCallback(callback1, callback2) {
    return function(num){
      return (callback1(num) || callback2(num));
}
}

function filterArray(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i += 1) {
        if (callback(array[i], i, array)) newArray.push(array[i]);
    }
    return newArray;
}
const arrOfNums = [10, 35, 105, 9];
const integerSquareRoot = n => Math.sqrt(n) % 1 === 0;
const over100 = n => n > 100;
const intSqRtOrOver100 = eitherCallback(integerSquareRoot, over100);
console.log(filterArray(arrOfNums, intSqRtOrOver100)); // should log: [105, 9]

 // -----------------------------------------------------------------------------------------------------------------------------

 