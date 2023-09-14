//Assignment No 8

//Q1

var a=parseInt(prompt('Enter Any Number'))

console.log(a)
console.log(Math.round(a))
console.log(Math.floor(a))
console.log(Math.ceil(a))

//Q2
//Take Negative Input

var a=parseInt(prompt('Enter Any Number'))

console.log(a)
console.log(Math.round(a))
console.log(Math.floor(a))
console.log(Math.ceil(a))

//Q3
//Take Float Value

var a=+prompt('Enter Any Number')

console.log(a)
console.log(Math.round(a))
console.log(Math.floor(a))
console.log(Math.ceil(a))

//Q4
//Take Negative Float

var a=+prompt('Enter Any Number')

console.log(a)
console.log(Math.round(a))
console.log(Math.floor(a))
console.log(Math.ceil(a))

//Q5

var a=+prompt('Enter Any Number')

console.log(Math.abs(a));

//Q6

console.log(Math.ceil(Math.random()*6))

//Q7

var a=Math.ceil(Math.random()*2)

if (a===2){
    console.log('Heads')
}
else {
    console.log('tails')
}

//Q8

var a=Math.ceil(Math.random()*100)

console.log('Random number 1 to 100 : '+a);

//Q9

var a=5
var b=+prompt('Enter Number betwwen 1 to 10')
if(a==b){
    alert('Congrats')
}

else{
    alert('Try again')
}

//Q10

var a=+prompt("Enter your Weight")

console.log(a+" Kilograms");

//Q11
var a=Date()

console.log(a);

//Q12

var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

var d=new Date();
var show=month[d.getMonth()];

console.log(show);

//Q13

var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var d = new Date();

var show=daysOfWeek[d.getDay()];

console.log("Today is "+show);

//Q14

var currentDate = new Date();

var currentDay = currentDate.getDay();

if (currentDay === 0 || currentDay === 6) {
  console.log("It's Fun day");
} else {
  console.log("It's not Fun day");
}

//Q15

var currentDate = new Date();
var dayOfMonth = currentDate.getDate();

if (dayOfMonth <= 15) {
  console.log("First fifteen days of the month");
} else {
  console.log("Last days of the month");
}

//Q16

var currentDate = new Date();

var milliseconds= currentDate.getTime();

var minutes = milliseconds/ (1000 * 60);

console.log("Minutes since midnight, Jan. 1, 1970:", minutes);
console.log("Milliseconds since midnight, Jan. 1, 1970:", milliseconds);

//Q17

var now =new Date()

var currentHours= now.getHours();

if(currentHours<12){
    console.log('Its AM')
}
else{
    console.log('Its PM')
}

//Q18

var lastDayOfLastMonth2023 = new Date(2023, 12, 0);

var laterDate = lastDayOfLastMonth2023;

console.log(laterDate);

//Q19

var ramadan2015 = new Date('2015-06-18');
var currentDate = new Date();

var dayDifference = currentDate - ramadan2015;
var daysPassed = Math.floor(dayDifference / (1000 * 3600 * 24) );

alert('Number of days passed since 1st Ramadan 2015:' + daysPassed);

//Q20

var now = new Date(); 

var beginningOf2015 = new Date('2015-01-01');

var timeDifference = now - beginningOf2015;

console.log('Elapsed time in milliseconds:' ,timeDifference);

//Q21


var currentDate = new Date();

var currentHours = currentDate.getHours();

currentDate.setHours(currentHours + 3);

console.log(currentDate);

//Q22

var currentDate = new Date();
currentDate.setFullYear(currentDate.getFullYear() - 100);
var back = currentDate.toDateString();

alert("Date 100 years ago: " + back);

//Q23

var age=prompt('Enter your age')

var currentYear=new Date().getFullYear()
var birthYear=currentYear-age

console.log('Your birth year'+birthYear)
