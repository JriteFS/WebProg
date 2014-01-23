//Jacob Ritenour
//01/16/2014
//Conditionals Personal


var friendMoney = prompt("How much money do you have?");
var meal = prompt("How much would you spend on a good meal?");

if(friendMoney > meal){
    console.log("You covering dinner tonight? LOL");
}else if(friendMoney < meal){
    console.log("I/'ll get this one if you get next.");
}else{
    console.log("We can just hang out if you want")
}