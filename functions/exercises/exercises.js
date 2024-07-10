function makeLine(size) {               //define the function and parameters
    let line = "";                      //create variable to hold string of characters
    for (let i = 0; i < size; i++) {    //write logic for adding characters of the same string together 
      line += "#";
    }
    return line;                        //return the result
  }                                     //test results


function makeSquare(size) {
    let squareString = '';
    for (let i = 0; i < size; i++) {
        squareString += makeLine(size);  
        if (i < size - 1) {             //This is a conditional statement that checks if i is less than size - 1. If it is, it means we are not on the last row of the square, so we need to add a newline.
            squareString += "\n";       //this adds the newline character to the string
        }
    }
    return squareString;
}

function makeRectangle(width, height) {
    let rectangleString = '';
    for (let i = 0; i < height; i++) {          //code for each row (height)
      rectangleString += makeLine(width);          //use a previous functio to add a line
      if (i < height - 1) {
        rectangleString += "\n";                 //adding the newline until the last row
      }
    }
    return rectangleString;
  }
console.log(makeRectangle(5, 3));

function plusTwo(num) {
  return num + 2;
}

let a = 2;

for (let i=0; i < 4; i++) {
  a = plusTwo(a);
}

console.log(a);

function repeater(str) {
  let repeated = str + str;
  console.log(repeated);
}

repeater('Bob');

let num = 42;

function isEven (num) {
   return num % 2 === 0;
}

console.log(isEven(43));

let tortoiseOne = {
  age: 150,
  species: "Galapagos Tortoise",
  diet: ["pumpkins", "lettuce", "cabbage"]
};

let tortoiseTwo = {
  age: 150,
  species: "Galapagos Tortoise",
  diet: ["pumpkins", "lettuce", "cabbage"],
};

console.log(tortoiseOne === tortoiseTwo);

let num = Math.floor(Math.random()*10);

console.log(num);