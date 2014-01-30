//Jacob Ritenour
//01/29/2014
//Functions Worksheet

//Example
//Calculate the area of a rectangle
var width = 5;
var height = 6;
var area = calculateArea(width, height);
console.log("The Area of the Rectangle is " + area);
calculateArea(width, height);
function calculateArea(width, height)
{
    return width * height;
}



//Circumference
var radius = 5;
var pi = 3.14;
var circumference = calcCircumference(radius, pi);
console.log("The Circumference of the circle is " + circumference);
calcCircumference(radius, pi);
function calcCircumference(radius, pi)
{
    return radius * pi;
}

//Stung!
var weight = 285;
var sting = 8.666666667;
var stung = numberStings(weight, sting);
console.log("I takes " + stung + " be stings to kill this animal.");

numberStings(weight, sting);
function numberStings(weight, sting)
{
    return weight * sting;
}