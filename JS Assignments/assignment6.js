//Assignment No 6

//Q1

for(var i=1; i<=5; i++){
    document.write("Hello World"+"<br>")
}

//Q2

for( var i=1; i<=10; i++){
    document.write(i+ "<br>")
}

//Q3

var userValue=prompt('Enter Number')
var length=prompt('Enter Length')

for(var i=1; i<=length; i++){
    document.write(userValue + " x "+i+ " = "+userValue*i +" <br>")
}

//Q4

var arr=['Nokia', 'Samsung', 'Apple', 'Sony', 'Huawei']
arr.push('Comon')

for(var i=0; i<=arr.length; i++)
    {
        console.log(arr[i])
    }

//Q5

var arr=['apple','banana','strawberry','mango']

for(var i=0; i<arr.length; i++){
    document.write("Element at index "+i+" is "+ arr[i]+ " <br> ")
}

//Q6

var user=prompt('Enter no of items')
var items=[]

for(var i=0; i<user; i++){
    items.push(prompt('Enter Item Name'))
}   
document.write("Numbers of items "+user+"<br>"+"Items"+"<br>"+items);

//Q7

//a) 

var num=[]
for(var i=1; i<=15; i++)
    {
        num.push(i)
    }
document.write( "Counting "+num);

//b)

var num=[]
for(var i=15; i>=1; i--)
    {
        num.push(i)
    }
document.write( "Counting "+num);

//c)

var num=[]
for(var i=0; i<=20; i=i+2)
    {
        num.push(i)
    }
document.write( "Even "+num);

//d)

var num=[]
for(var i=1; i<=20; i=i+2)
    {
        num.push(i)
    }
document.write( "Odd "+num);

//e)

var num=[]
for(var i=0; i<=20; i=i+2)
    {
        num.push(i+'K')
    }
document.write( "Series :"+num);

//Q8

var product= ['cake', 'apple pie', 'cookie', 'chips', 'patties']

var user=prompt('Enter Your product')
var handraise=false

for(var i=0; i<product.length; i++){
    if(product[i]===user){
        document.write(product[i]+ " is available")
        handraise=true
    }
}
if(handraise===false){
    document.write("isn't available")
}

//Q9
var num=[24,53,78,91,12,]
var largeNumber=[0]


for(var i=0; i<num.length; i++)
    {
        if(num[i]>largeNumber){
            largeNumber=num[i]
        }
    }
document.write("largest number is"+largeNumber);

//Q10

var num=[24,53,78,91,12,]
var smallNumber=num[0]


for(var i=0; i<num.length; i++)
    {
        if(num[i] < smallNumber ){
            smallNumber=num[i]
        }
    }
document.write("Smallest number is"+smallNumber);

//Q11

var num=[24,53,78,91,12,]
var largeNumber=num[0]
var smallNumber=num[0]


for(var i=0; i<num.length; i++)
    {
        if(num[i]>largeNumber){
            largeNumber=num[i]
        }
        else if(num[i] < smallNumber ){
            smallNumber=num[i]
        }
    }
document.write(num+'<br>');
document.write("largest number is"+largeNumber+'<br>');
document.write("Smallest number is"+smallNumber);

//Q12

for(var i=5; i<=100; i=i+5)
    {
        document.write(i+"<br>")
    }

//Q13

var students = ["Ali", "Sami", "Taha", "Inam"];
var scores = [58, 73, 89, 90];

for(var i=0; i<students.length; i++)
    {
        document.write(students[i]+'   ')
        document.write(scores[i]+'  ')
    }

    //Q14

    var A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for (var i = 0; i < A.length; i++) {
    for (var j = 0; j < A[i].length; j++) {
    document.write(A[i][j]);  
}
}

//Q15

var num = prompt("Enter a positive number:");

for (var i = num; i > 0; i -= 0.5) {
    console.log("Current value of num: " + i);
}

//Q16

for (var i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
    console.log(i + " is even");
    } else {
    console.log(i + " is odd");
    }
}

//Q17

var product = 1;


for (var i = 1; i <= 7; i++) {

    if (i % 2 !== 0) {
    
    product *= i;
}
}
console.log("The product of odd integers from 1 to 7 is: " + product);

//Q18

var initialStars = prompt("Enter the initial number of stars:");


var numStars = parseInt(initialStars);




for (var i = numStars; i >= 1; i--)   
{
    var line = '';
    for (var j = 1; j <= i; j++)  
    {
    line += '*';
    }
console.log(line);
}

