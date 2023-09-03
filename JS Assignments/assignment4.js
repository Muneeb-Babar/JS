//Asssignment No 4

//Q1

var num=prompt('Enter Number')
if (num % 3==0){
    alert(num+"is divisible by 3")
}
else{
    alert(num+"is not divisible by 3")
}

//Q2

var num=prompt('Enter Number')
if (num %2===0) {
    alert(num+" is Even Number")
}
else{
    alert(num+' is odd Number')
}

//Q3

var age=prompt('Enter Your Age')

if (age>18){
    alert('Old Enough')
}
else if(age<18){
    alert('Too young')
}
else{
    alert('Enter your age in number')
}

//Q4

var name=prompt('Enter Your Name')
if (name==='Muneeb'){
    alert('Hello Sir,')
}

//Q5

var asciiCode=prompt('Enter Number')
if (asciiCode>=65 && asciiCode<=90){
    alert('The input is an uppercase letter.')
}
else if(asciiCode>=97 && asciiCode<=122){
    alert('The input is an lowercase letter.')
}
else{
    alert('The input is not a uppercase letter, or lowercase letter.')
}

//Q6

var a=+prompt('Enter Number')
var b=+prompt('Enter Number')
var c=prompt('Enter Operator')

if (c=='+'){
    alert(a+' + '+b+' is '+a+b)
}
else if (c=='-'){
    alert(a+' - '+b+' is '+a-b)
}
else if (c=='*'){
     alert(a+' * '+b+' is '+a*b)
}
else if (c=='/'){
    alert(a+' / '+b+' is '+a/b)
}
else{
    alert('Invalid Operators')
}

//Q7

var time=prompt('Enter Time')

if (time>=0 && time<=1200){
    alert('Good Morning')
}

else if(time>=1200 && time<=1700){
    alert('Good Afternoon')
}

else if(time>=1700 && time<=2100){
    alert('Good Evening')
}

else if(time>=2100 && time<=2359){
    alert('Good Evening')
}
else{
    alert('Invalid Time')
}

//Q8

var password='muneeb12345'
var userPassword=prompt('Enter your password')

if (userPassword===''){
    alert('Please Enter your Password')
}
else if(userPassword==password){
    alert('Correct Password')
}
else{
    alert('Incorrect Password')
}

//Q9

var name=prompt('Enter Your Name')
if (name==='Muneeb'){
    alert('Hello, Muneeb')
}
else{
    alert('You are not Muneeb')
}

//Q10

var greeting;
var hour = prompt('Enter Time');

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

//Q11


var num1=+prompt('Enter Number');
var num2=+prompt('Enter Number');

if (num1 > num2) { 
    alert('The greater number is '+num1 )
}
else if (num2 > num1){
    alert('The greater number is '+num2 )
}
else{
    alert('Both numbers are equal')
}

//Q12

var num=prompt('Enter Number')

if (num>0){
    alert(num+" is a Positive Number")
}
else if (num<0){
    alert(num+" is a Negative Number")
}
else{
    alert('This is zero number')
}

//Q13


var inputHour = prompt("Please enter the current hour")


if (inputHour >= 6 && inputHour < 9) {
    alert("Breakfast is served.");
} 
else if (inputHour >= 11 && inputHour < 13) {
    alert("Time for lunch.");
} 
else if (inputHour >= 17 && inputHour < 20) {
    alert("It's dinner time.");
} 
else {
    alert("Sorry, you'll have to wait, or go get a snack.");
}

//Q14

var num=prompt('Enter your Value')
if (typeof num==="string"){
    alert('its a string')
}
else if (typeof num==="number"){
    alert('its a Number')
}
else if (typeof num==="boolean"){
    alert('its a Boolean')
}

//Q15

var vowel=prompt('Enter value')
if(vowel==='a' || vowel==='e' || vowel==='i' || vowel==='o' || vowel==='u'){
    alert('Its a vowel')
}
else{
    alert('Its not a vowel')
}

//Q16

10 !=8
true

//Q17

var age=prompt('Enter Age')
if(age<18){
    alert('Too Young')
}
else{
    alert('Old Enough')
}

//Q18

var month=+prompt('Enter Number')


switch(month){
    case 1:
        alert('January');
        break;
        case 2:
        alert('Febuary');
        break;
        case 3:
        alert('March');
        break;
        case 4:
        alert('April');
        break;
        case 5:
        alert('May');
        break;
        case 6:
        alert('June');
        break;

    default:('Enter valid number');
}

//Q19

var num=prompt('Enter Number')
switch(num % 3){
    case 0:
        alert('Its divisible by 3')
        break;

    default:alert('Its not divisible by 3')
}