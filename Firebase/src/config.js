
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword , collection, addDoc  } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBLqwOxwbWF89ZVE-Hx6Oauw9eIuy8Syp0",
    authDomain: "test-project-67367.firebaseapp.com",
    projectId: "test-project-67367",
    storageBucket: "test-project-67367.appspot.com",
    messagingSenderId: "986217264801",
    appId: "1:986217264801:web:ed5c55b76ba4fe71a322e0"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

function register(user){
    const {firstName,email,password,phoneNumber} = user

    createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
        try {
            const docRef = await addDoc(collection(db, "users"), {
            firstName,
            email,
            phoneNumber
            });
            console.log("Document written with ID: ", docRef.id);
            alert('Signup Successfully')
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    
    const user = userCredential.user;
    alert('Signup Successfully')

    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message.split(': ')[1]
    alert(errorMessage)
    });

}

function logIn(user){
    const{email,password}=user

    signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
    
    const user = userCredential.user;
    alert('Logged In Successfully')
    
})
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message.split(': ')[1]
    alert(errorMessage)
});
}





export{
    register,
    logIn
}