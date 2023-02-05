# JavaScript
JavaScript is a programming language that adds interactivity to your website. This happens in games, in the behavior of responses when buttons are pressed or with data entry on forms; with dynamic styling; with animation, etc.

### `console.log()`
Console is a part of web browser and allows you to log messages, run JavaScript code and see errors and warnings. 

```Javascript
console.log("Hello World!");
```
**Output:**
`Hello World!`
It can be used as many times as required. Each statement outputs text from a new line.
#### To output text in Javascript, it must be enclosed in quotes. When writing numbers, quotes are not required. Anything enclosed in quotes is called a string.

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
- Exponentiation **(**)**
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




