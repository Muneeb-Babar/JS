//Assignment No 3

//Q1

var name=prompt("Enter Your Name")
alert('Hi, '+name);

//Q2

var num=prompt('Enter Any Number')

if (num===""){
    alert('5 x 1 = '+5*1)
    alert('5 x 2 = '+5*2)
    alert('5 x 3 = '+5*3)
    alert('5 x 4 = '+5*4)
    alert('5 x 5 = '+5*5)
    alert('5 x 6 = '+5*6)
    alert('5 x 7 = '+5*7)
    alert('5 x 8 = '+5*8)
    alert('5 x 9 = '+5*9)
    alert('5 x 10 = '+5*10)
}
alert(num +' x 1 = '+num*1)
alert(num +' x 2 = '+num*2)
alert(num +' x 3 = '+num*3)
alert(num +' x 4 = '+num*4)
alert(num +' x 5 = '+num*5)
alert(num +' x 6 = '+num*6)
alert(num +' x 7 = '+num*7)
alert(num +' x 8 = '+num*8)
alert(num +' x 9 = '+num*9)
alert(num +' x 10 = '+num*10)

//Q3

var city=prompt('Enter Your City')
if (city=="karachi"){
    alert('Welcome to city of lights')
}

//Q4

var gender=prompt('Enter Your Gender')
if (gender=="male"){
    alert('Good Morning Sir')
}
else if (gender=="female"){
    alert('Good Morning Ma^am')
}

//Q5

var traficLight=prompt('Enter Trafic Light Color')

if (traficLight=="red")
{
    alert('vehicles must stop')
}

else if (traficLight=="yellow")
{
    alert('vehicles should get ready to move')
}

else if (traficLight=="green")
{
    alert('vehicles can move now')
}
else{
    alert('does not match the color to give any instructions')
}

//Q6

var currentAge=prompt('Enter Your Current Age')
var maxAge=prompt('Enter Your Max Age')

if (currentAge<=maxAge){
    alert('You Are welcome')
}

else if (currentAge>maxAge){
    alert('You Are Not allowed')
}

//Q7

var fuel=prompt('How many Liters Petrol in your car')

if(fuel<0.25){
    alert('Please refill the fuel in your car')
}

//Q8

var eng=+prompt('Enter your English Marks')
var math=+prompt('Enter your Maths Marks')
var urdu=+prompt('Enter your Urdu Marks')
var obtMarks=eng+math+urdu
var total=300
var per=(obtMarks/total)*100

if (per>=90){
    alert('Your Obt-Marks is '+obtMarks+' and your Grade is A+')
}
else if (per>=80){
    alert('Your Obt-Marks is '+obtMarks+' and your Grade is A')
}
else if (per>=70){
    alert('Your Obt-Marks is '+obtMarks+' and your Grade is B')
}
else if (per>=60){
    alert('Your Obt-Marks is '+obtMarks+' and your Grade is C')
}
else if (per>=50){
    alert('Your Obt-Marks is '+obtMarks+' and your Grade is D')
}
else {
    alert('Your Obt-Marks is '+obtMarks+' and you are Fail')
}

//Q9

var item1=prompt('Enter Item1')
var item2=prompt('Enter Item2')
var price1=prompt('Enter Item1 Price')
var price2=prompt('Enter Item2 Price')
var quantity1=prompt('Enter item1 Quantity')
var quantity2=prompt('Enter item2 Quantity')
var shipping=200

var totalCost=(price1 * quantity1)+(price2 * quantity2)+shipping;
var disCost=totalCost*0.10;
var afterDis=totalCost-disCost;

if(totalCost>=2000){
    document.write("price of "+item1+" is "+price1+"<br>"+"Quantity of "+item1+" is "+quantity1+"<br>"+"Price of "+item2+" is "+price2+"<br>"+"Quantity of "+item2+" is "+quantity2+
    "<br><br>"+"Shipping Charges "+shipping+"<br><br>"+"Total Cost of your order is "+totalCost+"Discounted Price is "+afterDis);
}
else if(totalCost<2000){
    document.write("price of "+item1+" is "+price1+"<br>"+"Quantity of "+item1+" is "+quantity1+"<br>"+"Price of "+item2+" is "+price2+"<br>"+"Quantity of "+item2+" is "+quantity2+
    "<br><br>"+"Shipping Charges "+shipping+"<br><br>"+"Total Cost of your order is "+totalCost);
}

//Q10

var num=prompt('Enter Number')
if (num % 3==0){
    alert(num+"is divisible by 3")
}
else{
    alert(num+"is not divisible by 3")
}

//Q11

var teamA=prompt('Enter Team A Name')
var score1=prompt('Enter Team A Score')
var teamB=prompt('Enter Team B Name')
var score2=prompt('Enter Team B Score')

if (score1>score2){
    alert(teamA+' Won the Match ')
}
else if (score2>score1){
    alert(teamB+' Won the Match ')
}
else{alert('Match is tie')}

//Q12

var str = "Hello, world!";
var num = 42;
var bool = true;

alert("Hello World is  " + typeof str);
alert("42 is a " + typeof num);
alert("true is a " + typeof bool);

//Q13

var num=prompt('Enter Number')
if (num %2===0) {
    alert(num+" is Even Number")
}
else{
    alert(num+' is odd Number')
}

//Q14


var temp=prompt('Enter Temperature')

if (temp >=40){
    alert('It is too hot outside')
}
else if (temp >=30){
    alert('The Weather today is Normal')
}
else if (temp >=20){
    alert('Today’s Weather is cool')
}
else if (temp >=10){
    alert('OMG! Today’s weather is so Cool.')
}

//Q15

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
//Q16

var user=prompt('Enter Week Day')

if (user=="monday"){
    alert('Its a week day')
}
else if (user=="tuesday"){
    alert('Its a week day')
}
else if (user=="wednesday"){
    alert('Its a week day')
}
else if (user=="thursday"){
    alert('Its a week day')
}
else if (user=="friday"){
    alert('Its a week day')
}
else if (user=="saturday"){
    alert('It’s weekend')
}
else if (user=="sunday"){
    alert('Yay! It’s a holiday')
}

//Q17

var score=prompt('Enter Score')

if (score>=50){
    alert('You Are Passed')
}
else{
    alert('Try Again')
}

//Q18

var num1=+prompt('Enter Number');
var num2=+prompt('Enter Number');

if (num1>num2) {
    alert('The greater number of '+ num1+ 'and'+ num2+ 'is '+num1 )
}
else if (num2>num1){
    alert('The greater number of '+ num2+ 'and' +num1+ 'is '+num2 )
}
else{
    alert('Both numbers'+ num1+ 'and' +num2+ 'are equal')
}

//Q19

var a=prompt('Enter Language Code')

if (a=="en"){
    alert("Hello World")
}
else if (a=="es"){
    alert("Hello World")
}
else if (a=="de"){
    alert("Hello World")
}
else{
    alert('Wrong Code')
}

//Q20

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

//Q21

var noun=prompt('Enter Value')
var num=+prompt('Enter Number')

var result=(num + noun)
alert(result);

//Q22

true
false
false
true
false
true
true
true
false
true




