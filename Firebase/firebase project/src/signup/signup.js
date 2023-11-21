import { register } from "../config.js"

window.onSignup=function(){
    var allInputs=document.getElementsByTagName('input')
    var firstName=allInputs[0]
    var email=allInputs[1]
    var password=allInputs[2]
    var confirmPassword=allInputs[3]
    var phoneNumber=allInputs[4]

    if(!firstName.value || !email.value || !password.value || !confirmPassword.value ){
        alert('Please Enter all Value')
        return
    }

    if(firstName.value.length < 4){
        alert('Please Enter Full Name')
        return
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(!emailRegex.test(email.value)){
        alert('Please Enter a Valid Email')
    }
    
    if(password.value.length < 6 ){
        alert('Please Enter A Strong Password')
        return
    }

    if(password.value!==confirmPassword.value){
        alert('Password is not matchable with confirm password!')
        return
    }
    

    var user={
        firstName:firstName.value,
        email:email.value,
        password:password.value,
    }
    register(user)

}