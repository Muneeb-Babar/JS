// Assignment No 7

///Q1

var a=prompt('Enter First Name')
var b=prompt('Enter Last Name')
var fullName=a + b

alert('Hello '+ fullName+' ! Welcome');

//Q2

var a=prompt('Enter Your Mobile Name')

document.write('My fvrt mobile is : '+a +"<br>"+ 'Length of string is: '+a.length);

//Q3

var pak='Pakistani'
var index=pak.indexOf('n')

document.write('String: '+pak +"<br>"+ 'Index of n is '+index);


//Q4


var a='Hello World'
var index= a.lastIndexOf('l')

document.write('String: '+a +"<br>"+ 'Index of last l is '+index);

//Q5
var a="Pakistani"
var index=a.charAt(3)


document.write('String: '+a +"<br>"+ 'Character at index 3 is'+index);

//Q6

var city='I live in Hyderabad'

for(var i=0; i<=city.length; i++)
    {
        var extract=city.slice(i,i+9)

        if(extract==='Hyderabad'){
        city=city.slice(0,i)+'Karachi'+city.slice(i+9)
        }
}
console.log(city);

//Q7

var message = "Ali and Sami are best friends. They play cricket and football together."

for(var i=0; i<=message.length; i++)
    {
        var extract=message.slice(i,i+3)

        if(extract==='and'){
        message=message.slice(0,i)+'&'+message.slice(i+3)
        }
}
console.log(message);

//Q8

var a='472'

document.write("value: "+a+"<br>"+ "type: "+ typeof(a) +"<br>");
document.write("value: "+a+"<br>"+ "type: "+ typeof(+a));

//Q9

var url=prompt('Enter Domain')

var extract=url.slice(4)

document.write("URL "+url + "<br>" + "Domain: "+ extract);

//Q10

var user=prompt("Enter Value")

var chang=user.toUpperCase()

document.write("User inpur: "+user +"<br>")
document.write(chang);

//Q11

var user=prompt("Enter Value")

var chang=user.toLowerCase()

document.write("User inpur: "+user +"<br>")
document.write(chang)

//Q12

var user=prompt('Enter Value')
var extract=user.charAt(0).toUpperCase()+user.slice(1).toLowerCase()

document.write("User inpur: "+user +'<br>'+"Convert Title case "+extract);

//Q13

var user = +prompt('Enter Number');

var num = user.toString().replace('.', '');

document.write(num);

//Q14

var a='3'
var b='3'
var c=a+b

document.write("a+b is "+c);

//Q15

var a='3'
var b='3'
var c=a-b

document.write("a+b is "+c);

//Q16

var arr = ["cake", "apple pie", "cookie", "chips", "patties"];

var user=prompt('Enter Product')
var find=false
var index=arr.indexOf(user)

for(var i=0; i<=arr.length; i++){
    if(arr[i]===user){
        document.write(user+ ' is available at index '+index)
        find=true
    }
}
if(find===false){
    document.write('we are sorry'+user+'is not avilable in our bakery')
}

//Q17

var str1=prompt('Enter value')
var str2=prompt('Enter value')

if(str1===str2)
{
    alert('Both strings are Equal')
}
else if(str1>str2){
    alert(str1+' is greater than '+str2)
}
else if(str2>str1){
    alert(str1+' is Less than '+str2)
}
else{
    alert('Enter Valid String')
}

//Q18

var password = prompt("Enter a password:");

if (
    password.length >= 6 && /[a-zA-Z]/.test(password)  &&  /\d/.test(password)) {
    console.log("Password is valid!");
} else {
    console.log("Password is invalid!");
}

//Q19

var university = "University of Karachi";
var convertArr = university.split(" ");

for(var i=0; i<convertArr.length; i++){
document.write(convertArr[i] +'<br>');
}

//Q20

var userInput = prompt("Enter a string:");

var lastCharacter = userInput.charAt(userInput.length - 1);

console.log(lastCharacter);

//Q21

var str = "Pakistan";
var vowels = 0;
var consonants = 0;

str = str.toLowerCase();

for (var i = 0; i < str.length; i++) {
    var ch = str.charAt(i);
    
    
    if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
        vowels++;
    } 
    else if (ch >= 'a' && ch <= 'z') {
        consonants++;
    }
}
console.log("Number of vowels: " + vowels);
console.log("Number of consonants: " + consonants);