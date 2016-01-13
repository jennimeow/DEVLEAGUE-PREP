//Declare Two Variables
var a = 6;
var b = 9;

//This function returns the result of adding a and b together. Store this value in a variable named sum.
function add (a,b){
	return (a + b); 
}
var sum = add(10,5);
console.log(sum);


//This function returns the result of subtracting b from a Store this value in a variable named difference.
function subtract (a,b){
	return (a - b);
}
var difference = subtract (10,5);
console.log(difference);


//This function returns the result of multiplying b by a. Store this value in a variable named product.
function multiply (a,b) {
	return (b * a);
}
var product = multiply(10,5);
console.log(product);


//This function accesses the value stored in the difference variable and uses this number to return the string "My football team lost X times this week", where X is the value stored in difference.
function checkDifference (difference){
	return ("My football team lost " + difference + " times this week.");
}
console.log(checkDifference(difference));

//This function checks the value stored at sum and uses that number to print to the screen the phrase "I CAN ADDZ X NUMBERS" where X is the value stored in the variable sum .
function checkSum (sum){
	return ("I CAN ADDZ " + sum + " NUMBERS");
}
console.log(checkSum(sum));

//This function checks the value stored at product and multiplies it by the number stored at difference and then prints the result to the console.
function checkProduct (product, difference){
	return (product * difference);
}
console.log(checkProduct(product,difference));

//This function takes three Number arguments named by you, then adds the first two arguments together. Then with the sum of that operation, subtract the value at the third argument. This function should make use of your previous functions.
function addThenSubtract (a,b,c){
	var sum = add(a,b);
	return subtract(sum,c);
}
addThenSubtract(10,5,3);
console.log(addThenSubtract(10,5,3));


//This function takes two String arguments firstName and lastName. This function returns back a string which represents someone's full name.
//Call this function and pass your first and last name into it. Store the return value to a variable named myFullName
function addThenMultiply (a,b,c){
	var sum = add(a,b);
	return multiply (sum,c);
}
addThenMultiply(10,5,3);
var howMany = addThenMultiply (10,5,3);
console.log(howMany);

//This function takes two String arguments firstName and lastName. This function returns back a string which represents someone's full name.
//Call this function and pass your first and last name into it. Store the return value to a variable named myFullName

function createFullName(firstName,lastName){
	return (firstName + " " +lastName);
}
var fullName = createFullName("Jennifer","Tran");
console.log(fullName);

//This function takes one Number argument age. This function returns the Boolean value true or false if age is lower than the legal drinking age in the state of Hawaii.
//Call this function and pass in a number value. Store the return value to a variable named canDrinkBeer

function verifyDrinkingAge (age){
	if (age >= 21) return true;
	if (age < 21) return false;	
}
var canDrinkBeer = verifyDrinkingAge(26);
console.log(canDrinkBeer);


//This function checks the value stored at the canDrinkBeer variable and if the value is false it should print to a message to the screen, "The Party will have tons of Cake!" otherwise this message should be "This Party will have an open bar".
function throwParty (canDrinkBeer) {
	if (canDrinkBeer === true) return ("The Party will have an open bar!");
	else return ("The Party will have a ton of cake!");
}

function displayMessage (note){
	alert(note);
}
var result = throwParty(canDrinkBeer);
console.log(displayMessage(result));

//This function takes 3 arguments firstName, lastName, food and prints out a message to your screen. Internally this function will make use of the createFullName function you created earlier.
//exmaple input: if someone called your program like this eatFood( "John", "Papa", "Pizza" )
//example output: "John Papa loves to eat Pizza"
//exmaple input: if someone called your program like this eatFood( "Peter", "Bojangles", "California Burritos" )
//example output: "Peter Bojanglesloves loves to eat California Burritos"

function eatFood (firstName, lastName, food){
	return (firstName + " " + lastName+ " Loves " + food + " ! ");
}

function displayMessage (note){
	alert(note);
}
var result = eatFood("Diamond", "Cat", "Kibbles");

console.log(displayMessage(result));


//This function will print to the screen X amount of times. 
//Where X is the value stored at howMany. 
//Inside of this function it will check if the value of canDrinkBeer, 
//if the value is true the message will be "Bacon Pancakes, makin' Bacon Pancakes..." 
//othewise the message will be "Let it go.... LET IT GOOOOOOoOoOoOo..."
function repeater (howMany){
  if (canDrinkBeer === true) return ("Bacon Pancakes, makin' Bacon Pancakes...");	
  else return ("Let it go.... LET IT GOOOOOOoOoOoOo");
 }

var result = repeater(howMany);
 console.log(result);

//Mark's function
 function repeater (howMany, canDrinkBeer){
 	for (var i = 0; i < howMany; i++){
 		if (canDrinkBeer) {
 			console.log ("yay");
 		} else {
 			console.log("boo");
 		}
 	}
 }
repeater (10,true);