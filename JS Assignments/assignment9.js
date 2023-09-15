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



