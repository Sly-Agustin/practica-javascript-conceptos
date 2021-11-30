/* Create a function subtractTwo that accepts a number and returns that number minus 2.

Then create a function map that takes two inputs -
- an array of numbers (a list of numbers)
- a 'callback' function - this function is applied to each element of the array (inside of the function 'map')
Have your map function return a new array filled with numbers that are the result of using the 'callback' function on each 
element of the input array. Please do not use the native map or forEach method. */

function subtractTwo(num) {
    return num-2;
}

function map(arr, subtractTwo) {
    let newArr = [];
    for(let i=0; i<arr.length; i++) {
        newArr.push(subtractTwo(arr[i]));
  }
    return newArr;
}

console.log(typeof subtractTwo); // should log: 'function'
console.log(typeof map); // should log: 'function'
console.log(map([3,4,5], subtractTwo)); // should log: [ 1, 2, 3 ]

// -----------------------------------------------------------------------------------------------------------------------------

/* Part 1
Create a function forEach which takes an array and a callback, and runs the callback on each element of the array. forEach does 
not return anything. Please do not use the native forEach or map method.

let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];
forEach(letters, function(char) {
  alphabet += char;
});
console.log(alphabet); //prints 'abcd'

Part 2
Now let's rebuild map from the previous challenge. This time instead of using a for loop, you're going to use the forEach we just created. */

function forEach(arr, callback) {
    for(let i=0; i<arr.length; i++) {
    arr[i]=callback(arr[i]);
  }
}

function map(arr, callback){
    forEach(arr, callback);
    return arr;
}

console.log(typeof forEach); // should log: 'function'
forEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
console.log(typeof map); // should log: 'function'
console.log(map([3,4,5], n => n - 2)); // should log: [1, 2, 3]

// -----------------------------------------------------------------------------------------------------------------------------

