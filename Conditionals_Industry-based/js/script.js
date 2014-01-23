//Jacob Ritenour
//01/16/2014
//Conditionals Industry- Based


//do you think your dept or office has enough people to handle the workload?
//how many people does your dept or office have in it now?
var department = prompt("How many people does your dept or office have in it at this time?");
//how many people do you think it should have in it?
var required = prompt("In your opinion how many people should your office have to handle the workload?");
//if the amount of people required is greater than the actual amount or less than the amount a suggestion is made.
(required >= department) ? console.log("Maybe your should talk to a manager about getting more people in.") : console.log("Having to many people is a waste of resources, maybe you should request more work.");

