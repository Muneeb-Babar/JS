//Assignment No 5

//Q1

var studentList=[];

//Q2

var stringsArray = ["Hello", "World", "JavaScript", "Array"];

//Q3

var number=[1,2,3,4,5,6];

//Q4

var boole=[true,false,false,true];

//Q5

var mixArray=['Hello',5,true,8,'World'];

//Q6

var education=['SSC', 'HSC', 'BCS','BS', 'BCOM', 'MS', 'M. Phil.', 'PhD'];

//Q7

var student={  Name: "Muneeb", Name1: 'Haseeb', Name2: 'Hassam'}
var number=[450,400,420]
var totMarks=500

var percentage1 = (number[0] / totMarks) * 100;
var percentage2 = (number[1] / totMarks) * 100;
var percentage3 = (number[2] / totMarks) * 100;

document.write("Score of "+student.Name+ ' is'+number[0]+"Percentage :"+percentage1+" <br> ");
document.write("Score of "+student.Name1+ ' is'+number[1]+"Percentage :"+percentage2+" <br> ");
document.write("Score of "+student.Name2+ ' is'+number[2]+"Percentage :"+percentage3+" <br> ");

//Q8

var color=['Black','White','Pink','Blue'];

color.push('Green','Sky blue')

document.write(color)

color.pop()
document.write(color)

color.unshift('Brown','Sea green')
document.write(color)

color.shift()
document.write(color);

//Q9

var score=[520,430,490,380];

document.write(score.sort());

//Q10

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawer",];

alert(cities.slice(2 , 4));

//Q11

var arr = ["This ", " is ", " my ", " cat"];
var singleString = arr.join("");
document.write(singleString);

//Q12

var arr=['Keyboard','Mouse','Cpu']

document.write(arr);

//Q13

var arr=['Keyboard','Mouse','Cpu']

document.write(arr.reverse());

//Q14

var mobileNames=['Apple','Samsung', 'Motorola', 'Nokia', 'Sony' ,'Haier'];

document.write(mobileNames);
