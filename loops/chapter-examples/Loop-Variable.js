// Experiment with this loop by modifying each of the following: the variable initialization, the boolean condition, and the update expression.

//for (let i = 0; i < 2; i++) {
 //  console.log(i);
 //}

//Output: prints integers 0-50 each on a separate line

//for (let i = 0; i < 51; i--) {
//  console.log(i);
//
//DON'T DO WHAT I JUST DID! Creates infinite loop and will screw up machine! 

//Why would we modify the condition? It always evaluates true inside the loop. 

let phrase = "Chili Cook-off";

for (let i = 0; i < phrase.length - 1; i = i + 3) {
   console.log(phrase[i]);
}