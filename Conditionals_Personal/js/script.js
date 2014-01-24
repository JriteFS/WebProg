//Jacob Ritenour
//01/16/2014
//Conditionals Personal

//Do we have enough potatoes to feed everyone?
//how many people are coming.
var person = prompt("How many people are we feeding?", "");
while (person == "") { person = prompt("How many people are we feeding?", "");
}
//how many potatoes doe we have already.
var potato = prompt("How many potato's do you have already?", "");
while (potato == "") { potato = prompt("How many potato's do you have already?", "");
}
//potato to person count ratio
var result = (potato >= person) ? "You have enough potato's for everyone.": "You do not have enough, better head to the store.";
console.log(result);