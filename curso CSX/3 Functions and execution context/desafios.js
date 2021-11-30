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

/* Using a FOR loop, write a function getTheSum which adds each element in arr to find the array total. */

function getTheSum(arr){
    let sum = 0;
  for (let i = 0; i<arr.length; i++) {
      sum=sum+arr[i];
}
  return sum;
}
console.log(getTheSum([3, 6, 9])); // expected log 18
console.log(getTheSum([10, 11, 12])); // expected log 33

// -----------------------------------------------------------------------------------------------------------------------------

/* Create a function multiplyAll that takes an unknown number of integer arguments, multiplies them all together, 
and returns the result. */

function multiplyAll(){
    let sum = 1;
    for (let i=0; i<arguments.length; i++) {
        sum*=arguments[i]; 
  }
    return sum;
}
console.log(multiplyAll(9, 4, 5, 6, 7, 2, 1, 8, 3)) // should log: 362880
console.log(multiplyAll(5, 5, 5, 3)) // should log: 375

// -----------------------------------------------------------------------------------------------------------------------------

/* Write a function mergingElements which adds each element in array1 to the corresponding element of array2 and returns the new array. */

function mergingElements(array1, array2){
    let arrReturn = [];
  for(let i=0; i<array1.length; i++) {
      arrReturn[i]=array1[i]+array2[i];
}
  return arrReturn;
}
console.log(mergingElements([1, 2, 3, 4], [5, 6, 7, 8])); // expected log [6, 8, 10, 12]
console.log(mergingElements([7, 3, 6, 0], [3, 9, 17, 81])); // expected log [10, 12, 23, 81]

// -----------------------------------------------------------------------------------------------------------------------------

/* Write a function mergingTripletsAndQuints which takes in two arrays as arguments. This function will return a new array replacing 
the elements in array1 if they are divisible by 3 or 5. The number should be replaced with the sum of itself added to the element 
at the corresponding index in array2.*/

function mergingTripletsAndQuints(array1, array2) {
    let arrReturn = [];
  for (let i = 0; i<array1.length; i++) {
      if (array1[i]%3==0 || array1[i]%5==0) {
          arrReturn[i] = array1[i]+array2[i];
    }
      else {
          arrReturn[i] = array1[i];
    }
}
  return arrReturn;
}
console.log(mergingTripletsAndQuints([1, 2, 3, 4, 5, 15], [1, 3, 6, 7, 8, 9])); // expected log [1, 2, 9, 4, 13, 24]
console.log(mergingTripletsAndQuints([1, 1, 3, 9, 5, 15], [1, 2, 3, 4, 5, 6])); // expected log [1, 1, 6, 13, 10, 21]

// -----------------------------------------------------------------------------------------------------------------------------

/* Using an IF/ELSE statement, write a function closestToTheMark that takes two player inputs as number arguments. The function 
will return 'Player 1 is closest' or 'Player 2 is closest' depending on which player input is closest to the randomly generated number. */

function closestToTheMark(player1, player2){
    const theMark = Math.floor(Math.random() * 100)
    console.log(`If theMark is ${theMark}...`);
  	let res1=theMark-player1;
    let res2=theMark-player2;
    res1 = Math.abs(res1);
  	res2 = Math.abs(res2);
  	if (res1<res2) {
      	return ("Player 1 is closest");
    }
  	else {
      	return ("Player 2 is closest");
    }
}
console.log(closestToTheMark(25, 75));

// -----------------------------------------------------------------------------------------------------------------------------

/* Using a loop, write a function getTheRange which finds the range (difference between high and low) of arr. The value returned
 should be an array with the low, high, and range.*/

 function getTheRange(arr){
    let max;
  let min;
  let range;
  for(let i = 0; i<arr.length; i++){
      if(min==undefined && max==undefined){
          min=arr[i];
          max=arr[i];
    }
    else {
                    if (arr[i]<min) {
          min = arr[i];
        }
        else {
            if(arr[i]>max) {
                max = arr[i];
            }
        }
    }
}
  range = max-min;
  return [min, max, range];
}
console.log(getTheRange([3, 2, 5, 4, 7, 9, 10])); // expect log [2, 10, 8]

// -----------------------------------------------------------------------------------------------------------------------------

/* Write a function disemvowel that takes in a string and returns a new string with all vowels removed. */
// Mirar video para una mejor explicación
function disemvowel(string) {
    let newStr = "";
      for(let i = 0; i<string.length; i++) {
        let letra = string[i]
        if (!(letra=="a" || letra=="e" || letra=="i" || letra=="o" || letra=="u" || letra=="A" || letra=="E" || letra=="I" || letra=="O" || letra=="U")){
            newStr+=letra;
      }
  }
    return newStr;
}
console.log(disemvowel('CodeSmith')); // => 'CdSmth'
console.log(disemvowel('BANANA')); // => 'BNN'
console.log(disemvowel('hello world')); // => 'hll wrld'

// -----------------------------------------------------------------------------------------------------------------------------

/* Create a function addWaldo that accepts an object with keys being first names and values being last names. For example 
addWaldo({'Luke': 'Skywalker', 'Harley': 'Quinn', 'Ryan': 'Reynolds'}) should add the key 'Waldo' with the value 'unknown' 
to the object and return the mutated object.*/

function addWaldo(objc){
    objc.Waldo="unknown";
    return objc;
}

const siliconValley = {'Richard': 'Hendricks', 'Erlich': 'Bachman', 'Bertram': 'Gilfoyle'}
console.log(addWaldo(siliconValley)) // should log:{ Richard: 'Hendricks', Erlich: 'Bachman', Bertram: 'Gilfoyle', Waldo: 'unknown' }

// -----------------------------------------------------------------------------------------------------------------------------

/* Create a function findWaldo that accepts an object and returns the value associated with the key 'Waldo'. If the key 'Waldo' is 
not found, the function should return 'Where's Waldo?'*/

function findWaldo(objc) {
    let entradas = Object.entries(objc);
    let retorno = "Where's Waldo?";
    for (let i = 0; i<entradas.length; i++) {
        if (entradas[i][0]=="Waldo"){
            retorno = entradas[i][1];
      }
  }
    return retorno;
}
const DC = {'Bruce': 'Wayne', 'Harley': 'Quinn'}
const supernatural = {'Sam': 'Winchester', 'Dean': 'Winchester', 'Waldo': 'unknown'}
console.log(findWaldo(DC)) // should log: 'Where's Waldo?'
console.log(findWaldo(supernatural)) // should log: 'unknown'

// -----------------------------------------------------------------------------------------------------------------------------

/* Write a function arrayBuilder that takes in a count object and returns an array filled with the appropriate numbers of elements. 
The order of the elements in the array does not matter, but repeated elements should be grouped.*/

function arrayBuilder(obj) {
    let entradas = Object.entries(obj);
    let arrRetorno = []
    for(let i=0; i<entradas.length; i++) {
        if(typeof(entradas[i][1])=="number") {
            let iteraciones = entradas[i][1];
            let elemento = entradas[i][0];
            for (let j=1; j<=iteraciones; j++) {
                arrRetorno.push(elemento);
          }
      }
        else {
            return "error";
      }
  }
    return arrRetorno;
}
console.log(arrayBuilder({'cats': 2, 'dogs': 1})); // => ['cats', 'cats', 'dogs']
console.log(arrayBuilder({})); // => []

// -----------------------------------------------------------------------------------------------------------------------------

/* For this challenge, convert the function myJob from ES5 syntax to arrow function syntax. */

let myJob = (name, profession) => `Hi, my name is ${name} and I'm a ${profession}.`
console.log(myJob("Jon", "Knights Watchman"));

// -----------------------------------------------------------------------------------------------------------------------------