/* CHALLENGE: DATA PRIMITIVE TYPES
Now that you have been introduced to some of JavaScript's data types, take a stab at declaring some variables below 
with different data types. Make sure to read the challenge carefully so you know if you should be using let or const!

Challenge 1: Declare a constant name that is a string, and set it equal to your name.

Challenge 2: Declare a variable age that is a number, and set it equal to your age.

Challenge 3: Declare a constant loveJavaScript that is a boolean, and set it equal to true.

Challenge 4: Declare a variable listOfComplaints and set it's value to null */

const name = "Agustin";
let age = 26;
const loveJavaScript = true;
let listOfComplaints = null;

// -----------------------------------------------------------------------------------------------------------------------------

/* CHALLENGE: STRINGS
1. On line 7, declare a variable mySingleString with single quotes ('), and set it's value to any string you like.

2. On line 8, declare a variable myDoubleString with double quotes ("'), and set it's value to any string you like.

3. On line 9, declare a variable myBackString with backticks (`), and set it's value to any string you like.

Hint: For now, only use plain text without any special characters or contractions. We'll go into why these may 
cause you trouble in next challenge.

You can uncomment lines 12-14 to test your code in the console. */

// Uncomment the lines below to see examples of strings
console.log('A string can be written inside of single quotes.');
console.log("It can also be written inside of double quotes.");
console.log(`Backticks work, too.`);

// ADD CODE BELOW
let mySingleString = 'cadena con comillas simples';
let myDoubleString = "cadena con comillas dobles";
let myBackString = `cadena con comillas hacia atrás`;

// Uncomment the line below to check your work!
console.log(mySingleString);
console.log(myDoubleString);
console.log(myBackString);

// -----------------------------------------------------------------------------------------------------------------------------

/*CHALLENGE: STRINGS - ESCAPE SEQUENCES */
/*
1. Uncomment out lines 1 & 2. Hit the Run Code button. Notice how we are missing all those backslashes? 
Add the appropriate \'s so that the path prints to the console with the proper \'s where they belong.

2. Uncomment out lines 4 & 5. Hit the Run Code button. Uh Oh! We've got an error! Fix the heSaid string 
so that it doesn't throw and error and prints to the console properly.

3. Uncomment out lines 7 & 8. Hit the Run Code button. Uh Oh! Another error! Fix the sheSaid string so 
that it doesn't throw and error and prints to the console properly. */

const path = "C:\\Users\\\Win\\Files\\javascript.js";
console.log(path);

const heSaid = "He said, \"Hey Foo!\"";
console.log(heSaid);

const sheSaid = 'My name ain\'t Foo!';
console.log(sheSaid);

// -----------------------------------------------------------------------------------------------------------------------------

/* CHALLENGE: STRING CONCATENATION*/
/* Use string concatenation to join the three provided strings (first, second, and third) and assign 
the resulting string to a variable called welcomeStatement. The value of welcomeStatement should be 'Welcome to the jungle!' */

const first = "Welcome";
const second = "to the";
const third = "jungle!";

// ADD CODE BELOW
var welcomeStatement = first+" "+second+" "+third

// Uncomment the line below to check your work!
console.log(welcomeStatement);