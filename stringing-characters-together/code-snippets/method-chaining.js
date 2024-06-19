//String methods can be combined in a process called method chaining.

let word = 'JavaScript';

console.log(word.toUpperCase());
//Returns ``JAVASCRIPT``

//What does ``word.slice(4).toUpperCase()`` return?
let newWord = word.slice(4).toUpperCase();
console.log(newWord);

//Experiment with other combinations (chains) of string methods.
let language = "JavaScript";
let newLang = language.replace('J','Q');
newLang = language.slice(1,6);
console.log(newLang);

let nonprofit = "LaunchCode";

console.log(nonprofit.charCodeAt(0));
console.log(nonprofit.charCodeAt(1));
console.log(nonprofit.charCodeAt(2));
console.log(nonprofit.charCodeAt(3));
console.log(nonprofit.charCodeAt(4));
console.log(nonprofit.charCodeAt(5));
console.log(nonprofit.charCodeAt(6));
console.log(nonprofit.charCodeAt(7));
console.log(nonprofit.charCodeAt(8));
console.log(nonprofit.charCodeAt(9));

let codes = [76, 97, 117, 110, 99, 104, 67, 111, 100, 101];

let characters = String.fromCharCode(codes[0]) + String.fromCharCode(codes[1])
                + String.fromCharCode(codes[2]) + String.fromCharCode(codes[3])
                + String.fromCharCode(codes[4]) + String.fromCharCode(codes[5])
                + String.fromCharCode(codes[6]) + String.fromCharCode(codes[7])
                + String.fromCharCode(codes[8]) + String.fromCharCode(codes[9]);

console.log(characters);

console.log("A message\nbroken across lines,\n\tand indented");

console.log("The interrobang character, \u203d, combines ? and !");

console.log("\"The dog's favorite toy is a stuffed hedgehog,\" said Chris");

console.log("Launch\nCode");

//Template literals - allow us to insert expressions (including values) into strings 
let name = "Jack";
let currentAge = 9;

console.log("Next year, " + name + " will be " + (currentAge + 1) + ".");
console.log(`Next year, ${name} will be ${currentAge + 1}.`);

//Template Literals allow us to create multi-line strings without needing special characters or concatenation
let poem = `The mind chases happiness.
The heart creates happiness.
The soul is happiness
And it spreads happiness
All-where.

– Sri Chinmoy`;

console.log(poem);
