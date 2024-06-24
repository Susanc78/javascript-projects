let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let arrFood = food.split(',').sort();
let arrEquiptment = equipment.split(',').sort();
let arrPets = pets.split(',').sort();
let arrSleepAids = sleepAids.split(',').sort();

console.log(`Food: ${arrFood}\nEquipment: ${arrEquiptment}\nPet Supplies: ${arrPets}\nSleep Aids: ${arrSleepAids}`);
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold =[
    arrFood,          //index 0
    arrEquiptment,    //index 1
    arrPets,          //index 2
    arrSleepAids,     //index 3
];
//console.log(cargoHold);
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
const input = require('readline-sync');
let choice = input.question('Which cabinet do you want to choose?');

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (choice === "food") {
    console.log(cargoHold[0]);
    choice = 0;
} else if (choice === "Equipment") {
    console.log(cargoHold[1]);
    choice = 1;
} else if (choice === "Pet Supplies") {
    console.log(cargoHold[2]);
    choice = 2;
} else if (choice === "Sleep Aids") {
    console.log(cargoHold[3]);
    choice = 3;
} else {
    console.log(`Error: ${choice} is not a cabinet in the Cargo Hold`);
}
console.log(choice);
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
let itemChoice = input.question("Choose an item from your cabinet:");
if (cargoHold[choice].includes(itemChoice)) {
    console.log(`Cabinet ${choice} does contain ${itemChoice}`);
} else {
    console.log(`Cabinet ${choice} does not contain ${itemChoice}`);
}
