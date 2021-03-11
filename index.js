/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

const area = function(l1, l2){
return l1 * l2;
};

const result = area(3, 4);
console.log(result)


/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

const in1 = 22
const in2 = 22

const crazySum = ( in1, in2) => {
  return in1 + in2;

  const result = crazySum(in1 + in2);
  if (result = !== ) {
    console.log( result * 3);
  }
}

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

const word = "givenword";

const upperFirst = function() {
const wordCapitalized = word.charAt(0).toUpperCase();
}

console.log(upperFirst(wordCapitalized));
/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

// let str = "givengString" ;

// const cutString = fuction() {
//  str = str.substring(1);
//  str = str.slice(0, -1);
//  console.log(cutString);
// }


/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

function giveMeRandom(n) {

  let anyNumber = [];
  
  for(i = 0; i < n; i++) {
      anyNumber.push(Math.floor(Math.random() * 10)); 
  }
  
  return anyNumber;
}

console.log(giveMeRandom(4));

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/