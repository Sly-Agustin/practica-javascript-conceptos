/* *Create a function createFunction that creates and returns a function. When that newly created function is called, it should 
return the string 'hello world'.*/

function createFunction(){
    return function helloWorld(){
        return "hello world";
  }
}

const myFunction = createFunction();
console.log(myFunction()); //should log: 'hello world'

// -----------------------------------------------------------------------------------------------------------------------------

