/**
 * Created by jacobritenour on 1/30/14.
 */
//1/30/14
//Functions Personal

//How many feet of fence do you need to surround your back yard


alert("This exercise is suggesting you have a rectangle or square yard not odd shaped.");
//Gather one side
var side1 = prompt('How long is the bottom side of your yard in feet?');
    while (side1 == '') { side1 = prompt('How long is the bottom side of your yard in feet?');
}
//gather perpendicular side
var side2 = prompt('How long is the left or right side of your yard in feet?');
    while (side2 == ''){ side2 = prompt('How long is the left or right side of your yard in feet?');
}
//perform function
var calcPerimeter = function(side1, side2){
    var perimeter = side1 * 2 + side2 *2;
    return perimeter;
}
//call function
calcPerimeter(side1, side2);
var a = calcPerimeter(side1, side2);
//write it
console.log("You will need " + a + " feet of fence to cover the perimeter of your backyard");