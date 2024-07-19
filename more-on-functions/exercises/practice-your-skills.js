//Create an anonymous function and set it equal to a variable.

/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. 
*/
let myFunction = function(data) {
    if (typeof data === 'number') {
      return data * 3;
    } else if (typeof data === 'string') {
      return "ARRR!";
    } else {
      return data;
    }
  };
console.log(myFunction(5)); // Output: 15
console.log(myFunction("hello")); // Output: ARRR!
console.log(myFunction(true)); // Output: true

/* Add to your code! Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/

let arr = ['Elocution', 21, 'Clean teeth', 100];
let newArr = arr.map(myFunction);
console.log(arr);
console.log(newArr); 