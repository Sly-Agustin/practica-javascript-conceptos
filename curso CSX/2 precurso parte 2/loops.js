/* Using a for loop, decrement countDown by one each time the loop runs until it equals 0, making use 
of looping functionality instead of logging each number separately. */

let countDown = 10;
// ADD CODE HERE
for (let i = 0; i < 10; i++) {
    countDown--;
}

// Uncomment the below line to check your work
console.log(countDown) // -> should print 0;

// -----------------------------------------------------------------------------------------------------------------------------

/* 1. Iterate through the synonyms array using a for loop, pushing a greeting string with the format "Have a [synonym] day!" 
into the greetings array.

2. Use a second for loop to iterate through the greetings and console.log() each greetings. */

const synonyms = ['fantastic', 'wonderful', 'great'];
const greetings = [];

// 1.
// Loop through the synonyms array. Each time, push a string into the greetings array. 
// The string should have the format 'Have a [synonym] day!'
// ADD CODE HERE
for (i = 0; i < synonyms.length; i++){
    greetings[i] = "Have a "+synonyms[i]+" day!"
}

// 2. 
// Loop through the greetings array, logging each greeting to the console:
// 'Have a fantastic day!'
// 'Have a wonderful day!'
// 'Have a great day!'
// ADD CODE HERE
for (i = 0; i < greetings.length; i++){
    console.log(greetings[i]);
}

// -----------------------------------------------------------------------------------------------------------------------------

/* For this challenge, loop through the arrays and push a string with the format "My name is [firstName] [lastName] 
and I am from [place]" into the array holding the respective bios. */

const firstNames = ["Jon", "Arya", "Jamie"];
const lastNames = ["Snow", "Stark", "Lannister"];
const places = ["The Wall", "Winterfell", "Kings Landing"];


const bios = [];

// Loop through your arrays and store the following strings in the bios array:
// 'My name is Jon Snow and I am from The Wall'
// 'My name is Arya Stark and I am from Winterfell'
// 'My name is Jamie Lannister and I am from Kings Landing'

// ADD CODE HERE

for (let i = 0; i<firstNames.length; i++){
    let strAux = "My name is "+firstNames[i]+" "+lastNames[i]+" and I am from "+places[i];
    bios[i]=strAux;
}
console.log(bios);

// -----------------------------------------------------------------------------------------------------------------------------

/* You are given an array of five numbers called increaseByTwo. Use a for loop to iterate through the array 
and increase each number by two. */
const increaseByTwo = [1, 2, 3, 4, 5];
// ADD CODE HERE

for (let i = 0; i<increaseByTwo.length; i++){
	increaseByTwo[i] = increaseByTwo[i]+2;
}

// Uncomment the line below to check your work!
console.log(increaseByTwo); // -> should print [3, 4, 5, 6, 7];

// -----------------------------------------------------------------------------------------------------------------------------

/* Use a while loop to increment count by 2 on each repetition of the block of code. Run the code block of 
your while loop until count is 8. */

let count = 2;
// ADD CODE HERE
while (count<8) {
    count=+count+2;
}

// Uncomment these to check your work!
console.log(count); 

// -----------------------------------------------------------------------------------------------------------------------------

/* Initialize a variable addThis to 0 and a variable sum to 0. Use a while loop to repeat a code block as long as addThis is 
less than 10. In the code block, add the value of addThis to sum, then increment addThis by 1. After the while loop runs, the 
value of sum should be the sum of the numbers 0 through 9. */

// ADD CODE HERE
let addThis = 0;
let sum = 0;
while (addThis < 10) {
    sum = sum + addThis;
    addThis++;
}

console.log(sum);