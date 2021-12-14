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

/* Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter 
and the callback as the second parameter. */

function after(num, callback) {
    let times = num-1;
    return function(){
        if(times>0){
            times--;
        }
        else {
            return callback(arguments[0]);
        }
    }
}

const called = function(string) { return('hello ' + string); };
const afterCalled = after(3, called);

console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> 'hello world' is printed

// -----------------------------------------------------------------------------------------------------------------------------

/* Write a function delay that accepts two arguments, a callback and the wait time in milliseconds. Delay should return a 
function that, when invoked waits for the specified amount of time before executing. HINT - research setTimeout(); */

function delay(callback, time){
    return function(){
        setTimeout(function() {
            return callback(time);
      }, time);
  }
}

let count = 0;
const delayedFunc = delay(() => count++, 1000);
delayedFunc();
console.log(count); 												 // should print '0'
setTimeout(() => console.log(count), 1000); // should print '1' after 1 second

// -----------------------------------------------------------------------------------------------------------------------------

/* Create a function saveOutput that accepts a function (that will accept one argument), and a string (that will act as a password). 
saveOutput will then return a function that behaves exactly like the passed-in function, except for when the password string is 
passed in as an argument. When this happens, the returned function will return an object with all previously passed-in arguments 
as keys, and the corresponding outputs as values*/

function saveOutput(fun, cadena){
    let obj = {}
    return function() {
        if(typeof(arguments[0])=="number"){
            obj[arguments[0]]=fun(arguments[0]);
            return fun(arguments[0]);
        }
        else {
            console.log(obj[cadena]);
            return obj;
        }
    }
}

const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // should log: 4
console.log(multBy2AndLog(9)); // should log: 18
console.log(multBy2AndLog('boo')); // should log: { 2: 4, 9: 18 }

// -----------------------------------------------------------------------------------------------------------------------------

/* Create a function cycleIterator that accepts an array, and returns a function. The returned function will accept zero arguments. 
When first invoked, the returned function will return the first element of the array. When invoked a second time, the returned 
function will return the second element of the array, and so forth. After returning the last element of the array, the next invocation 
will return the first element of the array again, and continue on with the second after that, and so forth.*/

function cycleIterator(arr){
    let cycles=0;
    return function() {
        if(cycles==arr.length) {
            cycles=0;
      }
        cycles++;
        return arr[cycles-1];
  }
}

const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // should log: 'Fri'
console.log(getDay()); // should log: 'Sat'
console.log(getDay()); // should log: 'Sun'
console.log(getDay()); // should log: 'Fri'

// -----------------------------------------------------------------------------------------------------------------------------

