let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 3,
   move:function() {
      return Math.floor(11 * Math.random());
   }
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 5,
   move:function() {
      return Math.floor(11 * Math.random());
   }
};

let Chimp2 = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 1,
   move:function() {
      return Math.floor(11 * Math.random());
   }
};

let beagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 9,
   move:function() {
      return Math.floor(11 * Math.random());
   }
};

let tardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 7,
   move:function() {
      return Math.floor(11 * Math.random());
   }
};

// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object

// Create an array to hold the animal objects.
let crew = [superChimpOne, salamander, Chimp2, beagle, tardigrade];

// Print out the relevant information about each animal.
function crewReports (crew) {
   for (let i = 0; i < crew.length; i++) {
      console.log(`${crew[i].name} is a ${crew[i].species}. They are ${crew[i].age} years old and ${crew[i].mass} kilograms. Their ID is ${crew[i].astronautID}.`);
   }
   return;
}
crewReports(crew);
// Start an animal race!
function fitnessTest(crew){
   let results = [], numSteps, turns;

   for (let i = 0; i < crew.length; i++){
       numSteps = 0;
       turns = 0;

    while(numSteps < 20){
       numSteps += crew[i].move();
       turns++;
    }

    results.push(`${crew[i].name} took ${turns} turns to take 20 steps.`);
}

return results;
}
console.log(fitnessTest(crew));