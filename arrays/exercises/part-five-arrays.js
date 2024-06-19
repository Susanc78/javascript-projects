let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
// arr=str.split(); - this will return an array with the entire string as one item.
// arr=str.split('e'); - this will return array with each word as an item with the letter 'e' removed.
// arr=str.split(''); - returns array with each indifidual letter as an item.
// arr=str.split(','); - returns array with two items, using the comma to determine the item.
arr=str.split(' '); //returns array with each index being a separate word

//2) Use the join method on the array to identify the purpose of the parameter inside the ().
//str=arr.join(); - returns array with each word separated by comma
//str=arr.join('a'); - returns with the letter 'a' connecting each item
//str=arr.join(''); - no space between items
str=arr.join(' '); //returns array with space between items

//3) Do split or join change the original string/array?
//no, they return a new string or array

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
console.log(cargoHold.split(',').sort().join(','));
