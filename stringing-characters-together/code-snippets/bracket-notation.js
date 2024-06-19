let jsCreator = "Brendan Eich";

console.log(jsCreator[-1]);
console.log(jsCreator[42]);

let phrase = "Code for fun";
console.log(phrase[2]);

let myStr = "Index";
console.log(myStr[2] === 'n');
console.log(myStr[4] === 'x');
console.log(myStr[6] === ' ');
console.log(myStr[0] === 'I');

phrase = "JavaScript rocks!";
console.log(phrase[phrase.length - 8]);

console.log(typeof console);

let firstName = "Grace";
let lastName = "Hopper";

console.log(firstName, "has", firstName.length, "characters");
console.log(lastName, "has", lastName.length, "characters");

let nonprofit = "LaunchCode";

console.log(nonprofit.toLowerCase());
console.log(nonprofit);

cityName = "Vienna";
stateName = "Virginia";
location = cityName + ", " +  stateName;

console.log(location.length);

nonprofit = "Launchcode";
console.log(nonprofit);
nonprofit[6] = "C";
console.log(nonprofit);

pet = "cat";
console.log(pet + 's');
pet += 's';
