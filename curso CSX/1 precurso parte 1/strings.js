/* 1. Declare a variable count and set its value equal to the length property of the string variable hometown.

2. Declare a variable upper and set its value equal to the string favAlbum converted to uppercase letters.

3. Declare a variable lower and set its value equal to the string favAlbum converted to lowercase letters.*/

let hometown = "New York City";
let favAlbum = "The Rise and Fall of Ziggy Stardust and the Spiders From Mars"

// ADD CODE BELOW
let count = hometown.length;
let upper = favAlbum.toUpperCase();
let lower = favAlbum.toLowerCase();

// Uncomment the line below to check your work!
console.log(count);
console.log(upper);
console.log(lower);

// -----------------------------------------------------------------------------------------------------------------------------

/* 1. Declare a variable firstLetter and assign it a value of the first letter of songTitle using bracket notation.

2. Declare a variable seventhLetter and assign it a value of the seventh letter of songTitle using bracket notation.

3. Declare a variable lastLetter and assign it a value of the last letter of lyrics using bracket notation and the .length 
property we learned in the last challenge.

Hint: Don't forget about that zero-based indexing.*/

const songTitle = "Space Oddity"
const lyrics = "This is Ground Control to Major Tom / You’ve really made the grade"

// ADD CODE BELOW
let firstLetter = songTitle[0];
let seventhLetter = songTitle[6];
let ultimoCaracterPosicion = lyrics.length-1;
let lastLetter = lyrics[ultimoCaracterPosicion];

// Uncomment the line below to check your work!
console.log(firstLetter);
console.log(seventhLetter);
console.log(lastLetter);