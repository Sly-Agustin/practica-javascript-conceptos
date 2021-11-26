/* You are provided with an object called checkObj. Using a for... in loop, determine if the object contains the 
property foundNum. If it exists, reassign the value of found to 1. */

const checkObj = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18
};
    
let found = 0;
// ADD CODE HERE

for (let propiedad in checkObj) {
    if (propiedad=="foundNum"){
        found=1;
        console.log(found);
    }
    else {
        console.log("no");
    }
}

// -----------------------------------------------------------------------------------------------------------------------------

/* You are provided with an empty array called objToArray. Using a for... in loop, fill the array with all of the 
numbers from the checkObj object if they are greater than or equal to 2. */

/*const checkObj = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18
  };*/
  
const objToArray = [];
// ADD CODE HERE

for (let elemento in checkObj){
    if (checkObj[elemento]>=2){
        objToArray.push(checkObj[elemento]);
    }
}

console.log("Elementos mayores a 2: "+objToArray);

// -----------------------------------------------------------------------------------------------------------------------------

/* This time, use the Object.values() method to return an array of checkObj's values, and assign this array to a constant
called objToArray. Next, use a for loop to iterate through objToArray and determine if any of the numbers are divisible by 6. 
If so, reassign the value of divBy6 to true. */

/*const checkObj = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18
};*/
  
let divBy6 = false;
// ADD CODE HERE
  
const objToArray2 = Object.values(checkObj);
  
for (let i=0; i<objToArray2.length; i++){
    if (objToArray2[i] % 6 == 0){
        divBy6 = true;
    }
}

// -----------------------------------------------------------------------------------------------------------------------------

/* You are provided with an empty array called nestedArr. Using a for loop starting at index 0, add 5 subarrays to nestedArr, 
with each nested array containing the string 'loop' concatenated with the corresponding index in nestedArr as its first element, 
and the index as its second element.
Example of a subarray: ['loop3', 3]. */

const nestedArr = [];
// ADD CODE HERE
for (let i=0; i<5; i++){
    let cadena="loop"+i;
    nestedArr.push([cadena, i]);
}

console.log(nestedArr);

// -----------------------------------------------------------------------------------------------------------------------------

/* You are provided with an array, possibleIterable. Using a for loop, build out the object divByThree so that each key is 
an element of possibleIterable that is divisible by three. The value of each key should be the array index at which that key 
can be found in possibleIterable. */

const possibleIterable = [4, 3, 9, 6, 23];
const divByThree = {};
// ADD CODE HERE

for(let i  = 0; i<possibleIterable.length; i++){
	if (possibleIterable[i]%3==0){
      	divByThree[possibleIterable[i]]=i;
    }
}

console.log(divByThree);

// -----------------------------------------------------------------------------------------------------------------------------

/* You are given an object called sumMe containing several key/value pairs and a variable called total whose initial value is 0. 
Using a for... in loop, iterate through the keys of sumMe; if the value corresponding to a key is a number, add it to total. */

const sumMe = {
    hello: 'there',
    you: 8,
    are: 7,
    almost: '10',
    done: '!'
};
let total = 0;
// ADD CODE HERE

for (let atributo in sumMe) {
    if (typeof(sumMe[atributo])=='number'){
        total=total+sumMe[atributo];
    }
}

console.log(total);