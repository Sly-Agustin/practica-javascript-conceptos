/* = vs == vs ===

= es asignación.
== compara dos variables para ver si son iguales pero ignora el tipo de dato
=== compara el valor y el tipo de dato */

let verdad = 10=='10';
console.log("Es 10 == '10'? "+ verdad); // da true
verdad = 10==='10';
console.log("Es 10 === '10'? "+ verdad); // da false, porque '10' es un string
verdad = 10==10;
console.log("Es 10 == 10? "+ verdad); // da true


// BOOLEANOS
/* 1. Reassign the value of iHaveChanged to true.

2. Declare a variable iLoveCoding and assign it a boolean value of true.

3. Declare a variable codingIsTooHard and assign it the boolean value of false. */

let iHaveChanged = false;

// ADD CODE BELOW
iHaveChanged = true;
let iLoveCoding = true;
let codingIsTooHard = false;

// COMPARACIÓN
/* Importante de recordar:
< - Less than
> - Greater than
<= - Less than or equal to
>= - Greater than or equal to
== - Is loosely equal to
=== - Is strictly equal to
!= - Is not loosely equal to
!== - Is not strictly equal to */

/* 1. Compare small and large using the < operator. Assign the result to a variable called isSmaller.

2. Compare num and string. First, use the == operator to compare the two variables, and assign the result to a 
variable calledisLooselyEqual. Second, use the === operator to compare the variables; assign the result to a 
variable called isStrictlyEqual.

3. Compare isTrue and isFalse using the !== operator. Assign the result to a variable called isTrueNotFalse. */

// 1.
const small = 2;
const large = 5342;
// ADD CODE BELOW (isSmaller)
let isSmaller = small<large;

// 2.
const num = 45;
const string = "45";
// ADD CODE BELOW (isLooselyEqual and isStrictlyEqual)
let isLooselyEqual = num==string;
let isStrictlyEqual = num===string;

// 3.
const isTrue = true;
const isFalse = false;
// ADD CODE BELOW (isTrueNotFalse)
let isTrueNotFalse = isTrue !== isFalse;

// Uncomment these to check your work! 
console.log('Is 2 < 5342?');
console.log(isSmaller);
console.log('Is 45 loosely equal to "45"?'); 
console.log(isLooselyEqual);
console.log('Is 45 strictly equal to "45"?');
console.log(isStrictlyEqual);
console.log('Is true not equal to false?');
console.log(isTrueNotFalse);