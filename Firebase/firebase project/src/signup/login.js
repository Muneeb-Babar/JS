import { logIn} from "../config.js";
import { facebookLogin } from "../config.js";

window.onLogin=function(){
    const allInputs=document.getElementsByTagName('input')
    const email=allInputs[0].value
    const password=allInputs[1].value

    if( !email|| !password){
        alert('Please Enter all Value')
        return
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(!emailRegex.test(email)){
        alert('Please Enter a Valid Email')
    }
    
    if(password.length < 6 ){
        alert('Please Enter A Strong Password')
        return
    }


    const user= {email,password}
    logIn(user)

}
window.faceLog=function(){
    facebookLogin()
}