# JavaScript
JavaScript is a programming language that adds interactivity to your website. This happens in games, in the behavior of responses when buttons are pressed or with data entry on forms; with dynamic styling; with animation, etc.

`console.log()`
Console is a part of web browser and allows you to log messages, run JavaScript code and see errors and warnings. 

```Javascript
console.log("Hello World!");
```
**Output:**
`Hello World!`
It can be used as many times as required. Each statement outputs text from a new line.
To output text in Javascript, it must be enclosed in quotes. When writing numbers, quotes are not required. Anything enclosed in quotes is called a string.

### Javascript in HTML
To add javascript in an HTML document `<script>` tag is used.
```html
<body>
  <script src="index.js"></script>
</body>
```
### Alert box
It is an another way to display messages using `alert()` function.
```javascript
alert("I am an alert box")
```
### Comments
To add a single-line comment, we start it with `//`. Everything inside a comment is ignored by the compiler. To add multi-line comment, we start it with `/*` and end with `*/`.
```javascript
/*This is 
a comment*/
console.log("Hello!");
```
### Simple Operators
- Addition **(+)**
- Subtraction **(-)**
- Multiplication **(*)**
- Division **(/)**
- Exponentiation **( ** )**
- Remainder **(%)**
- Increment **(++)**- It repeatedely adds 1 to a value.
- Decrement **(--)**- It repeatedely subtracts 1 from a value.

## Variables
In apps, we usually need to store some values and work with them throughout the program to make accesing them much more convenient. For this we use variables which are containers for storing values. As the name suggests, variables can change their value when required in the program. Variables are created using `let` or `var` keyword.
```javascript
let score;
```
**score** is the name of the variable.
After creating a variable, we give it a value. This is called initialization.
```javascript
let score = 10;
```
`let` is a modern way of declaring variables and is better than `var`.
`var` allows you to re-declare variables with the same name, while `let` results in an error, which makes the code safer.

## Constants
Constants are similar to variables but they do not change their values throughout the program. These are declared using the `const` keyword.

### Rules for naming variables
- names must begin with a **letter**, an **underscore(_)** or a **dollar sign($)** 
- names cannot contain spaces
- names can only contain letters, numbers, underscores, or dollar sign
- variable names are **case-sensitive** which means Score and score are different names.

## Booleans
It is a datata type which can take only two values **true** or **false**.
```javascript
let isActive = true;
let isHoliday = false;
console.log(isActive);//true
```
## Postfix and Prefix
Postfix returns the original vale of the variable, and only then increments it.
```javascript
let x = 5;
console.log(x++);//5
console.log(x);//6
```
Prefix increments the value and only then returns it.
```javascript
let x = 5;
console.log(x++);//6
```
## Assignment Operators
`=` is an assignment operator, it assigns value to a variable.
Differnt types of assignment operators are there - addition `+=`, multiplication `*=`, etc.
```javascript
let x = 15;
x += 5;//x = x+5
console.log(x);// 20
```
## Template literals 
An another way to create strings and work with them more flexibly. They use back-ticks `` ``. It allow us to use variables inside the strings. We need to add a dollar sign **$** and enclose the variable name in braces **{}**.
```javascript
let name = "John";
let text = "Welcome, ${name}";
console.log(text);// Welcome, John
```
## Concatenation
Just as numbers, we can add strings. Strings with numbers is also added as strings rather than numbers.
```javascript
console.log("2"+"2");// outputs 22
```
## Comparison operators
`>` or `<` which compares the values and results in corresponding Boolean values- either true or false.
```javascript
let score = 88;
console.log(score>90);// false
```
Other comparison operators are:
- equal to `==`
- not equal to `!=`
- greater or equal to `>=`
- smaller or equal to `<=`
- strictly equality `===`
```javascript
let x = 5;
let y = '5';
console.log(x == y);// true
console.log(x === y);// false
```
## If statement
This means our program needs to run only when our `if` given condition is **true**.
```javascript
let purchase = 1500;
if (purchase>=1000){
console.log("Discount!");
}// outputs Discount!
```
If condition is false, code will not be executed.
## Else statement
The `else` staement doesn'nt have its own condition- it just checks the condition of the if statement and performs a specific action if it is false.

`ELse if` statement is used with `if` and `else` when multiple conditions have to be tested.
```javascript
let time = 15;

if (time<10){
console.log(Good Morning);
} else if (time<20){ 
console.log(Good day);
} else {
console.log(Good Night);
}// Good day
```
## Switch Statement
Used in social media applications to develop a menu from which the user can select a topic he is interested in.
```javascript
let choice = 1;

switch(choice){
case 1: console.log("Sports");
break;
case 2: console.log("Business");
break;
}// Sports
```
`break` statement stops the execution of other cases when there is a match.

## Ternary Operator
Ternary, or conditional operator assign a value to a variable based on some condition. 
```javascript
variable = (condition) ? value1 : value2
```
It takes three **operands** - a condition followed by a question mark `?`, then an expression to execute if the condition is **true** followed by a colon `:` and finally, the expression to execute if the condition is **false**.
It is an alternative of `if else` statement. Here is an example-
```javascript
let age = 42;
let isAdult = (age<18) ? "Too Young" : "Old Enough"
console.log(isAdult);// Old Enough
```
## Loops
### The For Loop
Loop allows you to run the same code multiple times. This is useful for creating animations in games, or creating a countdown. The `for` loop has following syntax:
```javascript
for (initializer; condition; final-expression){
        // code to run
}
```
The initializer is a variable, which increments the number of times a loop has run. The condition is used to stop the loop. The final expression is run each time after the loop's code run. It is uasually used to increment the variable used in the condition. Example:
```javascript
for (let i = 1; i<=10; i++){
console.log(i);// outputs numbers 1 to 10
}
```
### The While Loop
The `while` loop is another way to create loops. It runs as long as condiyion is true.
```javascript
while (condition){
      // code to run
}
```
Taking Previous example:
```javascript
let i = 1
while (i<=10){
  console.log (i);
  i++;
}
```
### The Do.. While Loop
This loop will execute the code once, before checking if the condition is true, and then it will repeat the loop as long as the condition is true.
```javascript
let i = 5;
do {
console.log(i);
i++;
}
while (i<5);// outputs just 5
```
## Break and Continue
The break statement allows you to exit a loop prematurely, based on the given condition.
```javascript
for ( let i = 0; i<10; i++){
  if ( i == 5){
  break;
  }
  console.log(i);
}// outputs  0 to 4
```
The `continue` statement is used to skip an iteration of the loop and continue from next one.
```javascript
for ( let i = 0; i<10; i++){
  if ( i == 5){
  continue;
  }
  console.log(i);
}// outputs  0 to 9 except 5
```
## Functions
Function is a block of code designed to perform a particular function. For example `login()`,`logout()`, `convert()`,etc.

The purpose of a function is to create it once and call it multiple times when needed to perform particular tasks.
```javascript
function name() {
//code to run
}
```
### Calling a function
To call a function we use name of the function followed by parantheses`()`. Example: `name()`.
### Function Parameters
The parameters are defined in the parantheses and can be used like variables in a function.
```javascript
function login(user) {
console.log("Hi, "+user);
}

login("John");// Hi, John
```
### Returning From Functions
In some cases, we donot need to output the result but assign it to a variable, to wok with it in our program.
In these cases, we need our method to `return` the result value:
```javascript
function add(x,y){
  return x+y;
}
let result = add(5,6)
console.log(result);// 11
```
Everything after the `return` statement is ignored.
## Objects
Objects are variables which can contain many values.
```javascript
var person = {
name:"John", age:31, favColor: "Green"
};
```
Here name, age and favColor are **properties** and John, 31 and Green are **property values**.

To access object properties, we have two methods:
```javascript
objectName.propertyName
//or
objectName['propertyName']
```
```javascript
var person = {
name:"John", age:31, favColor: "Green"
};
var x = person.age;
document.write(x);// 31
```
### Object methods
Methods are functions that are stored as object properties. For example, `document.write()` outputs the text, here **document** is `object` and **write** is `methodName`.
### Object constructor
The standard way to create an object is to use an object constructor.
```javascript
function person(name, age, color){
  this.name = name;
  this.age = age;
  this.color = color;
}
```
Here `person` is the object constructor which takes parameters and assigns them to the object properties. `this` refers to current object. For example:
```javascript
function person(name, age, color){
  this.name = name;
  this.age = age;
  this.color = color;
}
var x = new person(John, 31, Green);
document.write(x.age);// outputs 31
```
### Creation Of Object Method
```javascript
methodName = function() {
// code lines
}
objectName.methodName();
```
Example:
```javascript
function person(name, age){
  this.name = name;
  this.age = age;
  this.yearofBirth = BornYear;
}
function BornYear(){
  return 2023-this.age;
}
var object = new person("John", 31);
document.write(object.yearofBirth());
```
## The Date object
The `date` object enables us to work with dates. A date consists of a year, a month, a day, an hour, a minute, a second and millliseconds. Using `new date()`, we can get **current date and time**.
```javascript
var d = new Date();
var hr = d.gethours();
console.log(hr);// gives the current number of hours of the day.
```
## SetInterval()
The `setInterval()` method calls a function or evaluates an expression at specified intervals (in millliseconds).
```javascript
function printTime() {
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    document.body.innerHTML = hours+":"+mins+":"+secs;
}
setInterval(printTime, 1000);
```


