//Assignment No 9

//Q1

function add()
    {
        
    }

//Q2

function date(){
    var d=new Date()
    console.log(d)
}
date()

//Q3

function add(first,last){
    console.log('Hello! '+first,last)
}
add('Muneeb','Babar')

//Q4

function add(){
    var a=+prompt('Enter First Number')
    var b=+prompt('Enter Second Number')
    console.log(a+b)
}
add()

//Q5

function calculation(num1, num2){
    var op=prompt('Enter operator')
    switch(op){
            case'+':
            console.log(num1 + num2);
            break;

            case'-':
            console.log(num1 - num2);
            break;

            case'*':
             console.log(num1 * num2);
            break;

            case'/':
            console.log(num1 / num2);
            break;
    
        default:console.log('Invalid')
    }
}
calculation(5,5)

//Q6

function sqr(num){
    console.log(num*num)
}
sqr(2)

//Q7

function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
    return answer;
    }
    else if(n > 1){
    for(var i = n; i >= 1; i--){
        answer = answer * i;
    }
    return answer;
    }
    else{
    return "number has to be positive."
    }  
}
factorial(0)

//Q8

function count(num1,num2){
    for(var i=num1; i<=num2; i++){
        console.log(i)
    }
}
count(11,30)

//Q9

function arguments() {
    for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
    }
}
arguments("Hello", "World", 123, true);

//Q10

function large(a,b,c,d){
    console.log(Math.max(a,b,c,d))
}
large(10,15,4,8);

//Q11

function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(num) {
      return num * num;
    }
    var baseSquare = calculateSquare(base);
    var perpendicularSquare = calculateSquare(perpendicular);

    var hypotenuseSquare = baseSquare + perpendicularSquare;
    var hypotenuse = Math.sqrt(hypotenuseSquare);

    return hypotenuse;
}
calculateHypotenuse(3,4)

//Q12

//a) 
function cal(width,height) {
    console.log('Area of Rectangle is :'+width*height)
}
cal(5,10)
//b)
function cal() {
    var w=5
    var h=10
    console.log('Area of Rectangle is :'+ (5*10))
}
cal()

//Q13

function add(){
    var arr=[10,6,8,2,1]
    console.log(arr.sort())
}
add()

//Q14

function sum(num) { 
    var add = 0;
    for (var i = 0; i < num.length; i++) {
    add += num[i];
    } 
    return add;
}
sum([1, 2, 3, 4]);

//Q15

function add(num){
    console.log(Math.pow(num,3))
}
add(3);

//Q16

function dice(){
    console.log(Math.ceil(Math.random()*6))
}
dice();

//Q17

function reverse(num){
    var add=''
    for(var i=num.length-1; i>=1; i--){
        add += num[i]
    }console.log(add)
}
reverse('1,2,3');

//Q18

function polidom(str){
    var reverse=''
    for(var i=str.length-1; i>=0;i--)
        {
            reverse +=str[i]
        }
    if(reverse===str){
        console.log('Its polidrom')
    }
    else{console.log('Its not Polidrom')}
}
polidom('madum');

//Q19

function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1);     
    }
    return splitStr.join(' '); 
}
titleCase("muneeb babar");

//Q20

function longestWord(stri) {
    var str = stri.split(" ");
    var longest = 0;
    var word =''
    for (var i = 0; i <= str.length - 1; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}
longestWord("The web development")

//Q21

function countVowels(str) {
    str = str.toLowerCase();

    var vowels = ['a', 'e', 'i', 'o', 'u']; 
    var count = 0;

    for (var i = 0; i < str.length; i++) {

        if (vowels.includes(str[i])) {
        count++;
}}
    return count;
}
countVowels('The quick brown fox')

//Q22

function getType(value) {
    return typeof value;
}

//Q23

function countOccurrences(str, letter) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
    if (str[i] === letter) {
        count++;
}}
    return count;
}
countOccurrences('cooom','o')

//Q24

function extractUniqueCharacters(inputString) {
    var uniqueCharacters = new Set();

    for (var i = 0; i < inputString.length; i++) {

    uniqueCharacters.add(inputString.charAt(i));
}
    return [...uniqueCharacters].join('');
}
extractUniqueCharacters('thequickbrownfoxjumpsoverthelazydog');

//Q25

function calculateAge(birthYear) {
    var currentYear = new Date().getFullYear();

    var age1 = currentYear - birthYear;
    var age2 = age1 - 1;

    console.log('You are either'+age1+ 'or' +age2);
}
calculateAge(1999);

//Q26

function calcCircumference(radius) {
    if (radius <= 0) {
    return "Invalid radius. Please provide a positive value.";
    }
    
    var circumference = 2 * Math.PI * radius;
    return 'The circumference is'+circumference.toFixed(2);
}
calcCircumference(5)

function calcArea(radius) {
    if (radius <= 0) {
    return "Invalid radius. Please provide a positive value.";
    }
    var area = Math.PI * Math.pow(radius, 2);
    return 'The area is'+ area.toFixed(2)
}
calcArea(7);

//Q27

function add(){
    var celsius = prompt("Enter temperature in Celsius:");
    var fahrenheit = (celsius * 9/5) + 32;
    alert(celsius + "°C is equal to " + fahrenheit + "°F");
    
    var fahrenheit = prompt("Enter temperature in fahrenheit:");
    var celsius = (fahrenheit - 32) *5/9
    alert(fahrenheit + "°F is equal to " + celsius + "°C");
}
add()

//Q28

function calculateSupply(age, amountPerDay) {
    var maxAge = 80;
    var daysRemaining = (maxAge - age) * 365; 

    var totalAmount = Math.round(daysRemaining * amountPerDay);

    
    console.log('You will need'+totalAmount+' to last you until the ripe old age of '+maxAge);
}
calculateSupply(23, 20); 


