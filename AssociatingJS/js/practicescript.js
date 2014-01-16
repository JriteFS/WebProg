/**
 * Created by jacobritenour on 1/14/14.
 */
alert("Hello World!");

var age = 27;  // Number variable

var isStudent = false;  //Boolean Variable

var studentName = "Jacob";

var phrase = 'I don\'t know \n You\'ll have to speak with the professor';

//Arrays

var muppetNames = ["Kermit", "Miss Piggy", "Gonzo", "Rizzo"]; //index of 0,1,2,3

console.log(muppetNames[0]); //depends on where you place each notation

muppetNames[1] = "Rizzo"; // this will change index 1 to the name of Rizzo

var num = 2;

console.log(muppetNames[num]); //lets me see what is in the index selected by var num = x;

//Expressions

var a = 2; // sets up variable a and defines it with 2
a = a + 3; // add 3 to a
console.log(a); // see what a equals after expression

var a = 2; // sets up variable a and defines it with 2
var b;
b = a + 3; // add 3 to a
console.log(b); // see what a equals after expression

//how old are you?
var yearBorn = 1986;
var age = 2014 - yearBorn - 1;
console.log(age);

//arithmetic operators

//area of the triangle is half of the with time the height
var width = 4;
var height = 5;
var area = width * height/2;
console.log(area);

// finding the remainder -  Modulo Operator
var remainder = 32 % 10;
console.log(remainder);
remainder = 2
//- 10 goes into 30 with a remainder of 2

// Order of Operations PEMDAS
var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 60;
var quiz4 = 80;

//the average is the sum of the items divided by the number of items
var average = (quiz1 + quiz2 + quiz3 + quiz4)/4;
console.log(average);

//perimeter
var length = 7;
var width = 6;
var perimeter = length * 2 + width * 2;
console.log(perimeter);

//working with lists
var orangeBins = [234, 567, 883];

var total = orangeBins[0] + orangeBins[1] + orangeBins[2];//[x} is the index starting with 0
console.log(total);// total equals sum of amounts in index 0, 1, 2

//Combining Strings - Concatenating
var firstName = "Kermit";
var lastName = "The Frog";
var fullName = firstName + " " + lastName;// second element added for a space to be in between the first and last name
console.log(fullName);

//string 2 example
var a = "6";
var b = "7";

var result = a + b;
console.log(result);
//this will concatenate into 67 not 6+7= 13
// by removing the "" around each number makes them no longer strings but then individual number which can then be added.


// Casting
var stringVar = "6";
var result = 7 + stringVar;
console.log(result);//adding as a sting not adding them like numbers creating 76

var stringVar = "6";
var result = 7 + Number(stringVar);
console.log(result);// this will add the number to create the addition problem equaling 13

var areaCode = 407;
var firstPart = 203;
var lastPart= 4567;

var phoneNo = areaCode + firstPart +lastPart;
console.log(phoneNo);// this will add all numbers together which is not what you want to happen

var phoneNo = "(" + String(areaCode) + ")" + String(firstPart) + "-" + String(lastPart);
console.log(phoneNo);// this will create a phone number string

//assignment operators

var a = 3;
a = a + 4;
console.log(a);
// "=" is an assignment operator

var a = 3;
a += 4; // a = a+ 4
console.log(a);
// +=, *=, /=, -= are shortcut operators

a ++ ; // a = a +1 // a += 1
a --; // a = a - 1 // a-=1




