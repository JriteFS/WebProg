//Jacob Ritenour
//01/16/2014
//Conditionals Worksheet

//Hot Enough?
//Is it hot enough to go to the beach?
var temp = 80;
//if the temperature is less than 75..

if(temp < 75){
    //if its less than 75
    console.log(“We will go to the beach!”);
}else{
    //if it’s greater or equal to 75
    console.log(“We will go to the movies.”);
}


//Weight enough for the heavyweight division
//Do I weigh enough
var weight = 285;
//if i weigh more than 250 lbs

if(weight > 285){
    console.log("The competitor qualifies for the heavyweight division.")
}else{  //i do not weigh more than 250
    console.log("The competitor needs to gain some weight!")
}

//Last chance for gas
var mpg = 25;
var tankCapacity = 16;
var tankReading = .6;

if(tankCapacity * tankReading * mpg > 200){
    console.log("Yes, you can make it without stopping for gas!")
}else{
    console.log("You only have " + tankCapacity * tankReading + "gallons of gas in your tank, better stop for gas now while you can!")
}