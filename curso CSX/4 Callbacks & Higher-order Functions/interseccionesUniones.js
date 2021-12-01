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

/* Construct a function union that takes an input array of arrays, compares each array, and returns a new flat array that contains
 all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from 
 the first element of the first input array.*/

function intersection(arrOfArr) {
	let acumulador=arrOfArr[0];
	for (let i=1; i<arrOfArr.length; i++) {
		let actual=arrOfArr[i];
		let newArr=[];
		for(let j=0; j<arrOfArr[i].length; j++){
			if(acumulador.includes(arrOfArr[i][j])){
				newArr.push(arrOfArr[i][j]);
			}
		}
		acumulador = newArr;
	}
	return acumulador;
}

const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]

// -----------------------------------------------------------------------------------------------------------------------------

/* Construct a function union that takes an input array of arrays, compares each array, and returns a new flat array that contains
 all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting 
 from the first element of the first input array. */

function union(arrOfArr){
	if(arrOfArr.length<1){
		return "error, arreglo vacio"
	}
  
	let acumulados = arrOfArr[0];
	for (let i=1; i<arrOfArr.length; i++){
		for(let j=0; j<arrOfArr[i].length; j++){
		  	if(!acumulados.includes(arrOfArr[i][j])){
			 	acumulados.push(arrOfArr[i][j]);
			}
		}
	}
  	return acumulados;
}

const arr1 = [5, 10, 15];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [100, 15, 10, 1, 5];
console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]

// -----------------------------------------------------------------------------------------------------------------------------

/* Construct a function objOfMatches that accepts two arrays and a callback. objOfMatches will build an object and return it. 
To build the object, objOfMatches will test each element of the first array using the callback to see if the output matches the 
corresponding element (by index) of the second array. If there is a match, the element from the first array becomes a key in an 
object, and the element from the second array becomes the corresponding value. */

function objOfMatches(arr1, arr2, callback) {
	const objRet = {}
  	for(let i = 0; i<arr1.length; i++) {
		let actual=callback(arr1[i]);
		let notFoundYet = true
		let j = 0;
		// notFoundYet es para cortar cuando lo encontremos, asi no es necesario recorrer el arreglo completo
		while(j<arr2.length && notFoundYet){
			if(arr2[j]==actual) {
					objRet[arr1[i]]=arr2[i];
				notFoundYet=false;
				}
			j++;
		}
	}
  	return objRet;
}

const arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
const arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
function uppercaser(str) { return str.toUpperCase(); }
console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }

// -----------------------------------------------------------------------------------------------------------------------------

/* arrToObj should return an object that has elements from the passed-in array as keys, and the outputs from the callback 
(when those elements are passed in) as the corresponding values.*/

function arrToObj(array, callback) {
	const arrRetorno={}
  	for(let i=0; i<array.length; i++) {
		let nuevo=callback(array[i]);
		arrRetorno[array[i]]=nuevo;
	}
  	return arrRetorno;
}

const arrOfStrings = ['beer', 'glue'];
const capitalize = str => str.toUpperCase();
console.log(arrToObj(arrOfStrings, capitalize)); // should log: { beer: 'BEER', glue: 'GLUE' }

// -----------------------------------------------------------------------------------------------------------------------------

/* Construct a function multiMap that will accept two arrays - an array of values and an array of callbacks. multiMap will return 
an object whose keys match the elements in the array of values. The corresponding values that are assigned to the keys will be 
arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.*/

function multiMap(arrElems, arrFunct){
	const objRet={}
	for(let i=0; i<arrElems.length; i++) {
		let elemActual=arrElems[i];
		let arrResultados=[]
		for(let j=0; j<arrFunct.length; j++) {
			arrResultados.push(arrFunct[j](elemActual));
		} 
		objRet[elemActual]=arrResultados;
	}
	return objRet;
}

function uppercaser(str) { return str.toUpperCase(); }
function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
function repeater(str) { return str + str; }
const items = ['catfood', 'glue', 'beer'];
const functions = [uppercaser, capitalize, repeater];
console.log(multiMap(items, functions)); /* should log: 
{ catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] } */

// -----------------------------------------------------------------------------------------------------------------------------

