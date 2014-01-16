//Jacob Ritenour
//01/16/2014
//Expressions Worksheet

//Dog Years
var humanAge = 3;
var dogAge = humanAge * 7;
console.log("Sparky is" + " " + humanAge + " " + "human years old which is" + " " + dogAge + " " + "in dog years.");

//slice of pie part 1
var slicesPerPizza = 8;
var people = 15;
var pizzas = 6;
var slicesPerPerson = slicesPerPizza * pizzas/people;
console.log("Each person at" + " " + slicesPerPerson + " " + "slices of pizza at the party.");

//slice of pie part 2
var remainder = 48 % 15;
console.log("Sparky got" + " " + remainder + " " + "slices of pizza." );

//average shopping bill
var week1 = 125;
var week2 = 167;
var week3 = 102;
var week4 = 95;
var week5 = 134;
var total = week1 + week2 + week3 + week4 + week5;
var average = (week1 + week2 + week3 + week4 + week5)/5;
console.log("You have spent a total of" + " " + total + " " + "on groceries over 5 weeks. That is an average of" + " " + average + " " + "per week.");

//discounts
var originalPrice = 299.99;
var discountPercentage = .47; //47%
var disPercent = 47;
var description = "Bread Maker";
var salesTax = .06; //6%
var afterDiscount = originalPrice * discountPercentage;
var withTax = afterDiscount * salesTax + afterDiscount;
console.log("Your" + " " + description + " " + "was originally" + " $" + originalPrice + ", but after a " + disPercent + "% discount, it is now $" + afterDiscount + " without tax, and $" + withTax + " " + "with tax.")
