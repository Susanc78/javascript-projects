//Initialize the string we want to reverse, and an empty variable to store the reversed value
let str = "blue";
let reversed = "";

//Reversed is the accumulator variable
//loop over str adding each character to the beginning of the reversed variable
for (let i = 0; i < str.length; i++) {
    reversed = reversed + str[i];
}

console.log(reversed);

let numbers = [2, -5, 13, 42];
let total = 0;

for (let i = 0; i < numbers.length; i++) {
   total += numbers[i];
}
console.log(total);