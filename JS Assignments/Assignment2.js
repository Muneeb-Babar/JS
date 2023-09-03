// <!--Assignment 2-->

// Q1

var num1=prompt("Enter Your First Number");
var num2=prompt("Enter your Second Number");
var result=+num1 + +num2;

alert('Sum of ' +num1 +' and ' +num2 +' is ' +result);

//Q2

//a
var num1=prompt("Enter Your First Number");
var num2=prompt("Enter your Second Number");
var result=+num1 - +num2;

alert('Sum of ' +num1 +' and ' +num2 +' is ' +result);

//b
var num1=prompt("Enter Your First Number");
var num2=prompt("Enter your Second Number");
var result=+num1 * +num2;

alert('Sum of ' +num1 +' and ' +num2 +' is ' +result);

//c
var num1=prompt("Enter Your First Number");
var num2=prompt("Enter your Second Number");
var result=+num1 / +num2;

alert('Sum of ' +num1 +' and ' +num2 +' is ' +result);

//d
var num1=prompt("Enter Your First Number");
var num2=prompt("Enter your Second Number");
var result=+num1 % +num2;

alert('Sum of ' +num1 +' and ' +num2 +' is ' +result);

//Q3

var a;
document.write('value after variable decalaration is'+a);
var b=3;
document.write('Initial Value '+b);
var b=3;
document.write('Initial Value '+ ++b);
var b=4;
var c=7;
var result=b + c;
document.write('Value After Addition is '+result);
var b=4;
var c=7;
var result=b + c;
document.write('Value After Decrement is '+ --result);
var b=11;
var c=b % 10;
document.write('Reminder  is '+c);

//Q4

var b=600;
var c=b * 5;
document.write('Total Cost to buy 5 Movie tickets is '+c +' PKR');

//Q5

var a=prompt('Write Any Table');
for (var i=1; i<=10; i++)
document.write(a+ '*' +i+ '='+a*i+"<br>");

//Q6

var celsius = prompt("Enter temperature in Celsius:");
var fahrenheit = (celsius * 9/5) + 32;
alert(celsius + "°C is equal to " + fahrenheit + "°F");

var fahrenheit = prompt("Enter temperature in fahrenheit:");
var celsius = (fahrenheit - 32) *5/9
alert(fahrenheit + "°F is equal to " + celsius + "°C");

//Q7

var a=500;
var b=800;
var c=200;
var d=a+b+c;

document.write('Price Of Item 1 is '+a+"<br>")
document.write('Price Of Item 2 is '+b+"<br>")
document.write('Price Of Item 3 is '+c+"<br>")

document.write('Total cost of your order is '+d)

//Q8

//Method No 1
var totalMark=1100;
var obtMark=566;
var per= (obtMark / totalMark) * 100;

document.write('Total Marks is '+totalMark)
document.write('Obtain Marks is '+obtMark)
document.write("The Percentage is "+per);

//Method No 2
var totalMark=prompt("Enter Your Total Marks");
var obtMark=prompt("Enter Your Obtain Marks");
var per= (obtMark / totalMark) * 100;

document.write('Total Marks is '+totalMark)
document.write('Obtain Marks is '+obtMark)
document.write("The Percentage is "+per);

//Q9

var usdAmount=prompt('Enter Amount in USD');
var usd=285;
var pkr=usdAmount*usd;
alert('Amount in PKR '+pkr);

//Q10

var a=(5*10)/2;
alert(a);

//Q11

var birthYear=prompt('Enter your BirthYear');
var currentYear=prompt('Enter current Year');
var age=currentYear-birthYear;
alert('Your Age is '+age);

//Q12

var a=10;
document.write('The of ++a is :11 '+'<br>')
document.write('Now the value of a is '+ ++a +'<br> <br>')

document.write('The of a++ is :11 '+'<br>')
document.write('Now the value of a is '+ ++a +'<br> <br>')

document.write('The of --a is :11 '+'<br>')
document.write('Now the value of a is '+ --a +'<br> <br>')

document.write('The of a-- is :11 '+'<br>')
document.write('Now the value of a is '+ --a)

//Q13

var currentAge = 20;
var maxAge = 85;
var snacksPerDay = 3;

var yearsRemaining = maxAge - currentAge;
var totalSnacks = yearsRemaining * snacksPerDay;
alert('You can have a total of '+ totalSnacks +' snacks until the age of '+maxAge);


