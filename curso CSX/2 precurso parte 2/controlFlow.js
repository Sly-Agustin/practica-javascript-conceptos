/* Use an if statement to check if num is greater than 100. If num is greater than 100, reassign the value of final to null. 
Otherwise, set final to be two times the value of num.*/

const num = 40;
let final;
// ADD CODE HERE
if (num>100) {
    final=null;
}
else {
    final = 2*num;
}

console.log(final);

// -----------------------------------------------------------------------------------------------------------------------------

/* Use a loop to iterate through the numbers 1 through 16. Push each number into fb, but push the string "fizz" in place 
of numbers divisible by 3, "buzz" in place of numbers divisible by 5, and "fizzbuzz" in place of numbers divisible by 
both 3 and 5.*/

const fb = [];
// ADD CODE HERE
let i = 1;
while (i <= 16) {
    if (i%3==0 && i%5==0) {
        fb.push('fizzbuzz');
    }
    else {
        if(i%3==0){
                fb.push('fizz');
        }
        else{
                if(i%5==0){
                        fb.push('buzz');
                }
                else{
                        fb.push(i);
                }
        }
    }
    i++;
}

console.log(fb) // should log: [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16]

// -----------------------------------------------------------------------------------------------------------------------------

/* Iterate through the array and multiply a number by 10 if it is greater than or equal to 5. */
const timesTenIfOverFive = [23, 9, 11, 2, 10, 6];
// ADD CODE HERE
for (let i=0; i<timesTenIfOverFive.length; i++) {
    if (timesTenIfOverFive[i]>=5){
        timesTenIfOverFive[i]=timesTenIfOverFive[i]*10
  }
}

// Uncomment the line below to check your work!
console.log(timesTenIfOverFive); // -> should print [230, 90, 110, 2, 100, 60]