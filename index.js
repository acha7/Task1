console.log('hello');
var b = 'smoothie';
console.log('b');
document.getElementsByClassName('sum').innerHTML
/*function
1.create a function
2.call the function.
*/
//create
function fun(){
    console.log('this is a function')
}
//call
fun();
function greeting(){
    var name = prompt('what is your name');
    var result = 'hello' + name;
    console.log(result);
}
//additing two numbers in functions
function sumnumber(num1, num2){
    var result = num1 + num2;
    console.log(result);
}
//while vs for loop in javascript
/*while loop
var num = 5;
while (num < 100){
    num += 1;
    console.log(num);
}
*/
//for loop
for (let num =0; num<=100; num++){
    console.log(num);
}
/*datatypes
let yourname ='bob'; //string
let yourage = 100; //number
let name = {first: 'jane', last: jenny}; //object
let truth = false; //boolean
let randum = null; //value null
let randum; //undefined */

/*string in javascript
let fruit = 'banana';
let morefruit = 'banana/apple';
console.log(morefruit);
console.log(fruit.slice(2, 6))
console.log(fruit.replace('ban', 123))
console.log(fruit.toUpperCase())
console.log(fruit.toLowerCase())
console.log(fruit.split(',')) //by comma
console.log(fruit.split('')) //by character */

/*array
let fruits = ['banana', 'aplle', 'orange'];
let fruits = new Array['banana', 'apple', 'orange'];
console.log(fruits[2]); //access values at index 2nd

fruits[0] = 'pear';
console.log(fruits);

for(let i = 0; i< fruits.length; i++){
    console.log(fruits[i]);
} 
/*array commn method
console.log('to string', fruits.toString());
console.log('to string', fruits.join('*'));
*/
let numbers = [5, 6, 7, 8, 9, 2, 3, 4,];
console.log(numbers.sort(function(a, b) {return a-b}));
console.log(numbers.sort(function(a, b) {return b-a}));
 
let emptyarray = new Array();
for (let num = 0; num <10; num++){
    emptyarray.push(num);
}
console.log(emptyarray);

//objects in javascript
//dictionary in python

let student = {first: 'rafeh', 
last: 'quazi',
 age:'23',
 height:'150'};
console.log(student.first);
console.log(student.last);
console.log(student.age);
console.log(student.height);

//conditinals control flows if/else
//18-35 is my target demography
var age = prompt('what is your age');
if ( ( age >=18) && (age <= 35)){
    status = 'target demo';
} else{
    status = 'not my audience';
}
//switch statement
//differentiate between weekday vs. weekend
//day 0--> sunday
// day 6-->saturday-->
//day 4--> thursday-->weekend
switch (2) {
    case 0: 
    text = 'sunday';
    break;
    case 5:
        text = 'weekend';
        break;
        case 6:
            text = 'weekend'
            break;
            default:
                text = 'weekend';
}




