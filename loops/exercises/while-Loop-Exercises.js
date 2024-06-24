//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
let shuttleFuel = -1;
let astronauts = -1;
let altitude = -1;
/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
const input = require('readline-sync');
let fuelInvalid = true;
while (fuelInvalid) {
  shuttleFuel = Number(input.question("What is the fuel level?"));
  if (!isNaN(shuttleFuel) && shuttleFuel > 5000 && shuttleFuel < 30000 ) {
    fuelInvalid = false;
  }
} 

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.

let astronautsInvalid = true;
while (astronautsInvalid) {
  astronauts = Number(input.question("How many astronauts?"));
  if (!isNaN(astronauts) && astronauts > 0 && astronauts < 8 ) {
    astronautsInvalid = false;
  }
}  
 
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
let orbitAchieved = false;
let outOfFuel = false;
altitude = 0;
while (!outOfFuel && !orbitAchieved) {
  shuttleFuel = shuttleFuel-100*astronauts;
  altitude = altitude+50; 
  outOfFuel = shuttleFuel < 100*astronauts;
  orbitAchieved = altitude >= 2000;
  console.log(`Altitude is ${altitude}; fuel level is ${shuttleFuel}`);
}
//Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”
console.log(`The Shuttle gain an altitude of ${altitude} km.`);

//If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
if (orbitAchieved) {
    console.log("Orbit achieved!");
} else {
  console.log("Failed to reach orbit.");
}