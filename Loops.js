// Getting Loopy
// For loops are great for:

// Iterating through an Array to access values within
// or running a set of instructions over and over again for a set amount of times, executing functions or one-off code.
// or any/all combinations of the above.

// Exercises
// Presidents - Accessing values in an Array
// Declare a variable named presidents which contains the first 5 presidents' last names: Washington, Adams, Jefferson, Madison, Monroe.
// Now write a FOR loop which iterates through this Array.
// Within the FOR loop, use console.log to:
// Log the value of i. Use a message like Value of i is: and append the value of i to this String
// Log what is at index i in the array. Use a message like Value at Index is: and append the value stored within the Array at that index.
// console.log is a great tool to give you feed back about your loops and the data that you're working with. When all else fails use console.log to inspect and debug your code.

var presidents = ['Washington', 'Adams', 'Jefferson', 'Madison', 'Monroe'];

for (var i = 0; i < presidents.length; i++){
  console.log('Value of i is: ' + i);  
  
  console.log('Value at Index is: ' + presidents[i]);
  
}

//bonus: could you take the code inside of this FOR loop and encapsulate it inside of a function called printContent and still achieve the same result? This new function should accept two parameters.

var presidents = ['Washington', 'Adams', 'Jefferson', 'Madison', 'Monroe'];

function printContent (presidents, i){
  console.log('Value of i is: ' + i);  
  
  console.log('Value at Index is: ' + presidents[i]);
}  
  
for (var i = 0; i < presidents.length; i++){
  printContent(presidents,i);
}
 //SAME AS 

 var presidents = ['Washington', 'Adams', 'Jefferson', 'Madison', 'Monroe'];

function printContent (i){
  console.log('Value of i is: ' + i);  
  
  console.log('Value at Index is: ' + presidents[i]);
}  
  
for (var i = 0; i < presidents.length; i++){
  printContent(i);
}


//The String of Numbers
// Declare a variable named stringOfNumbers and set it's value to '' (an empty String).
// Then write a FOR loop that appends a Number value to that string starting from 10 all the way up to and including 20.
// After the FOR loop, use console.log to inspect your variable. In the end your String should look like this 1011121314151617181920

var stringOfNumbers = '';

for (var i = 10; i <= 20; i++){
    stringOfNumbers += i;
  //same as stringOfNumbers = stringOfNumbers + i;
}
console.log(stringOfNumbers);

//bonus: could you take the code inside of this FOR loop and encapsulate it inside of a function called appendToString and still achieve the same result?

function appendToString (stringToAppendTo, stringToAppend){
   return stringToAppendTo + stringToAppend;
}

function create (start, end){
  var stringOfNumbers = '';

  for (var i = start; i <= end; i++){
    stringOfNumbers = appendToString (stringOfNumbers, i);
  //same as stringOfNumbers = stringOfNumbers + i;
  }
  return stringOfNumbers;
}

var myStringOfNumbers = create(10,21);
console.log(myStringOfNumbers);

// SIMILAR EXAMPLE


var a = 4;
console.log('a', a);

var b = a++;
console.log('a after first', a);
console.log('b',b);

var c = ++a;
console.log ('a after second', a);
console.log('c', c);

// Add only even numbrs to an array
// Declare a variable named evenNumberArray.
// Use a FOR loop to add only even numbers to an Array. Add 50 even numbers to the evenNumberArray starting with the value 0.

var evenNumberArray = [];
for (var i = 0; i < 99; i += 2){
  	evenNumberArray.push(i);
  }

console.log(evenNumberArray);

//OR

var evenNumberArray = [];
for (var i = 0; i < 99; i++){
	if (i % 2 === 0) {
			evenNumberArray.push(i);
	}
}

console.log(evenNumberArray);

// Accessing only the odd indexes of an Array - 'Not Even Brah'
// Someone forgot to fill out this array! Oh noes...
// Declare a new variable named oopsArray set it's value to be: [ 'turn' , , 'down' , , 'for' , , 'what' ]
// using a FOR loop, add the string 'nope' to every odd index.

var oopsArray = ['turn', ,'down', ,'for', , 'what', ];

console.log('oopsArray', oopsArray.length, oopsArray)

for (var i = 0; i <= oopsArray.length; i++){
	console.log(i, oopsArray[i]);
	if (i % 2 === 1){
		oopsArray[i] = 'nope';
	}
}

console.log('oopsArray', oopsArray.length, oopsArray);


//Going backwards?!

//Using a FOR loop, iterate through the Array stored at oopsArray backwards. console.log each value in the Array.

var oopsArray = ['turn', , 'down', , 'for', , 'what', ];









