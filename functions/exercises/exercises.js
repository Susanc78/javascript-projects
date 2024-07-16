// Rectangles

// makeLine(size) function
function makeLine(size) {
  let line = "";
  for (let i = 0; i < size; i++) {
      line += '#';
  }
  return line;
}
console.log(makeLine(5));
console.log('');

// makeSquare(size) function
function makeSquare(size) {
  let square = '';
  for(let i = 0;i < size; i++) {
      square += (makeLine(size) + '\n');
  }
  return square;
}
console.log(makeSquare(5));
console.log('');

// makeRectangle(width, height) function
function makeRectangle(width, height) {
  let rectangle = '';
  for (let i = 0; i < height; i++) {
    rectangle += (makeLine(width) + '\n');
  }
  return rectangle.slice(0, -1);
}
console.log(makeRectangle(4,3));
console.log('');

// Triangles

// makeDownwardStairs(height) function
function makeDownwardStairs(height) {
  let stairs = "";
  for (let i = 1; i <= height; i++) {
    stairs += makeLine(i+1);
    if (i < height) {
      stairs += '\n';
    }
  }
  return stairs;
}
console.log(makeDownwardStairs(5));
console.log('');

// makeSpaceLine(numSpaces, numChars) function
function makeSpaceLine(numSpaces, numChars) {
  let  line = '';
  for (let i = 0; i < numSpaces; i++) {
    line += " "
  }
  line += makeLine(numChars);
  for (let i = 0; i < numSpaces; i++) {
    line += " "
  }
  return line; 
}

console.log(makeSpaceLine(3, 5));
console.log('');

// makeIsoscelesTriangle(height) function
function makeIsoscelesTriangle(height) {
  let triangle = "";
  for (let i = 0; i < height; i++) {
    triangle += makeSpaceLine(height - i - 1, 2 * i + 1);
    if (i < height - 1) {
      triangle += '\n';
    }
  }
  return triangle;
}
console.log(makeIsoscelesTriangle(5));
console.log('');

// Diamonds

// makeDiamond(height) function
function makeDiamond(height) {
  let diamond = makeIsoscelesTriangle(height);
  if (height > 1) {
    diamond += '\n';
    for (let i = height - 2; i >= 0; i--) {
      diamond += makeSpaceLine(height - i - 1, 2 * i + 1);
      if (i > 0) {
        diamond += '\n';
      }
    }
  }
  return diamond;
}
console.log(makeDiamond(5));