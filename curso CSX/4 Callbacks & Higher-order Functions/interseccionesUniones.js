/* The function reduce takes an array and reduces the elements to a single value.

The reduce function loops through the array and applies any operation that you can put into a function to each element in the 
array while keeping track of the outcome of each loop. In this way, we could use reduce to do things like sum all the numbers 
in an array or multiply them all together. */

function reduce(arr, callback, num){
    let sum=num; 
  for(let i=0; i<arr.length; i++) {
       sum=callback(sum,arr[i]);
    }
  return sum;
}
const nums = [4, 1, 3];
const add = function(a, b) { return a + b; }
console.log(reduce(nums, add, 0)); // should log 8

// -----------------------------------------------------------------------------------------------------------------------------

