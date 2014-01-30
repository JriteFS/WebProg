/**
 * Created by jacobritenour on 1/30/14.
 */

//Does the peacock have more pink feathers or blue feathers?

var pink = prompt("Just thinking to memory how many pink feathers does a Peacock have?")
var blue = prompt("Now think of how many blue feathers a peacock has and write that down.")

function more(pink , blue){
    var greater = pink > blue;
    return greater;
}
more(pink , blue);
var greaterLess = more(pink, blue) ? "There are more pink feathers." : "There are more blue feathers.";
console.log(greaterLess);
