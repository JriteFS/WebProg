//Jacob Ritenour
//1/16/2014
//Expressions


var babyFood = prompt("How many jars of baby food does your child eat in a day?");
var perWeek = prompt("How many days a week does your child eat baby food?");
var perMonth = babyFood * perWeek * 4;
var perYear = perMonth * 12;
console.log("According to your answers, your child eats" + " " + perMonth + " " + "per month, and on average eats" + " " + perYear + " " + "jars of baby food per year.")


