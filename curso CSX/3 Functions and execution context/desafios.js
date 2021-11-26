/* Create a function lastLetter that takes a word (string) and returns the last character/letter of that string.

Hint- Remember that each character/letter in a string has an index position that you can access with brackets- '[]' */

function lastLetter(word) {
    return word.charAt(word.length-1);
}
console.log(lastLetter("hello")); //=> "o"
console.log(lastLetter("goodbye!")); //=> "!"
console.log(lastLetter("ZeltoiD")); //=> "D"
console.log(lastLetter("I love Javascript")); //=> "t"

// -----------------------------------------------------------------------------------------------------------------------------

/* Examine the code given to you. Determine what arguments must be passed into isX1 and isX2 respectively to obtain an 
output of true for both, and pass in the arguments accordingly.*/

const x = 3;

function isX1(num) {
    const x = 5;
    return num === x;
}

function isX2(num) {
    return num === x;
}

const one = isX1(5);
const two = isX2(3);

console.log(one); // should log: true
console.log(two); // should log: true

// -----------------------------------------------------------------------------------------------------------------------------

/* Examine the code given to you. Try to make the calls variable equal to 'JerryKramerGeorgeElaine' with only a 
single invocation to the function jerry*/

let calls = "";

function jerry(str) {
		str = "Jerry"+kramer(str);
  	return str;
}

function george(str) {
		str = str+"George"+elaine(str);
  	return str;
}

function elaine(str) {
		str = str+"Elaine";
  	return str;
}

function kramer(str) {
		str = str+"Kramer"+george(str);
  	return str;
}

calls = jerry(calls);
console.log(calls); // should log: 'JerryKramerGeorgeElaine'

// -----------------------------------------------------------------------------------------------------------------------------

/* Create a function makePlans that accepts a string. This string should be a name. The function makePlans should call the 
function callFriend and return the result. callFriend accepts a boolean value and a string. Pass in the friendsAvailable 
variable and name to callFriend.

Create a function callFriend that accepts a boolean value and a string. If the boolean value is true, callFriend should 
return the string 'Plans made with NAME this weekend'. Otherwise it should return 'Everyone is busy this weekend'. */

let friendsAvailable = true;

function makePlans(name) {
  	return callFriend(friendsAvailable, name);
}

function callFriend(bool, name) {
    if (bool){
    		return "Plans made with "+name+" this weekend";
  	}
  	else {
      	return "Everyone is busy this weekend";
    }
}

console.log(makePlans("Mary")) // should return: "Plans made with Mary this weekend'
friendsAvailable = false;
console.log(makePlans("James")) //should return: "Everyone is busy this weekend."

// -----------------------------------------------------------------------------------------------------------------------------

/* Create a console log that displays the contents of the function rather than executing it. For example, your result should 
be function add20 (num){ return num + 20 }. */

function add20 (num){
    return num + 20
} 
console.log(add20.toString());

// -----------------------------------------------------------------------------------------------------------------------------

/* Create a function isOdd that accepts a number argument. isOdd will return true if the number is odd and false 
if the number is even. */

function isOdd(number) {
    return number%2!=0;
}
console.log(isOdd(5)); // should log: true
console.log(isOdd(2008)); // should log: false

// -----------------------------------------------------------------------------------------------------------------------------

/* Write a function iLoveEvenNumbers that takes a number argument and returns 'Oh Yeah Evens!' if the argument is even 
or 'I am too normal for odd numbers' if the argument is odd. */

function iLoveEvenNumbers(number){
    if (number%2==0){
        return "Oh Yeah Evens!";
  }
    else {
        return "I am too normal for odd numbers";
  }
}
console.log(iLoveEvenNumbers(42)); // expected log 'Oh Yeah Evens!'
console.log(iLoveEvenNumbers(17)); // expected log 'I am too normal for odd numbers'

// -----------------------------------------------------------------------------------------------------------------------------

/* Create a function getRemainder that takes two numbers and returns the remainder (value left over from division) of 
dividing the larger number by the smaller one. */

function getRemainder(num1, num2) {
    if (num1>num2){
          return num1%num2;
    }
  else {
              return num2%num1;
  }
}
console.log(getRemainder(17, 5)); // => 2
console.log(getRemainder(20, 5)); // => 0
console.log(getRemainder(8, 22)); // => 6
console.log(getRemainder(7, 42)); // => 0

// -----------------------------------------------------------------------------------------------------------------------------

