//Jacob Ritenour
//01/16/2014
//Conditionals Wacky

//how many water balloons do we need to have to hit everyone at least once?
//how many people are there?
var person = prompt("How many people are at the party?");
while (person == "") { person = prompt("How many people are at the party?");
}
//how many balloons do we have already.
var balloons = prompt("How many balloons do we have?");
while (balloons == "") { balloons = prompt("How many balloons do we have?");
}
//potato to person count ratio
var result = (balloons >= person) ? "You have enough balloons for everyone.": "You do not have enough, better fill more up.";
console.log(result);