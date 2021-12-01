/* Now we are going to create a function addByX that returns a function that will add an input by x.

const addByTwo = addByX(2);
addByTwo(1); //should return 3
addByTwo(2); //should return 4
addByTwo(3); //should return 5

const addByThree = addByX(3);
addByThree(1); //should return 4
addByThree(2); //should return 5

const addByFour = addByX(4);
addByFour(4); //should return 8
addByFour(10); //should return 14 */

function addByX(num) {
    return function(){
        return num+arguments[0];
    }
}

const addByTwo = addByX(2);

// Now call addByTwo with an input of 1 and log the output
console.log(addByTwo(1));
// Now call addByTwo with an input of 2 and log the output
console.log(addByTwo(2));

// -----------------------------------------------------------------------------------------------------------------------------

/* Write a function once that accepts a callback as input and returns a function. When the returned function is called the first 
time, it should call the callback and return that output. If it is called any additional times, instead of calling the callback 
again it will simply return the output value from the first time it was called. */

function once(callback){
    let value;
    return function() {
        if (value==undefined){
            value=callback(arguments[0]);
            return value;
      }
        else {
            return value;
      }
  }
}

const addByTwoOnce = once(function(num) {
    return num + 2;
});

console.log(addByTwoOnce(5));  //should log 7
console.log(addByTwoOnce(10));  //should log 7
console.log(addByTwoOnce(9001));  //should log 7

// -----------------------------------------------------------------------------------------------------------------------------

