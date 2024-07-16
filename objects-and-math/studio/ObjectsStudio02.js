// Code your orbitCircumference function here:
function orbitCircumference(radius){
  return Math.round(2*Math.PI*radius);
}
// Code your missionDuration function here:
function missionDuration(numOrbits, radius = 2000, speed = 28000){
  let distance = numOrbits * orbitCircumference(radius);
  let time = distance/speed;
  return parseFloat(time.toFixed(2));
}
// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(array){
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
// Code your oxygenExpended function here:
function oxygenExpended(candidate, radius = 2000, speed = 28000){
  let spacewalkTime = missionDuration(3, radius, speed);
  let oxygenUsed = candidate.o2Used(spacewalkTime);
  return `${candidate.name} will perform the spacewalk, which will last ${spacewalkTime} hours and require ${oxygenUsed.toFixed(3)} kg of oxygen.`;
}
// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 
console.log(orbitCircumference(2000)); // 12566
console.log(missionDuration(5)); // 2.24
console.log(oxygenExpended(selectRandomEntry(crew))); // output will vary depending on the randomly selected crew member