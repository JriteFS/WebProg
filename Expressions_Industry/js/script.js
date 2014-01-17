//Jacob Ritenour
//1/16/2014
//Expressions

var callsTaken = prompt("How many calls do you think you take in a day?");
var ticketsWritten = prompt("On average how many tickets do you create daily?");
var daysPerWeek = prompt("How many days a week do you work?")
var averageCalls = callsTaken * daysPerWeek;
var averageTickets = ticketsWritten * daysPerWeek;
var remainder = averageCalls% averageTickets;
console.log("According to your answers you take " + remainder + " more calls per week than you write tickets.")


