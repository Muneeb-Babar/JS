import { auth,onAuthStateChanged } from "./src/config.js"
import { getAds,logout } from "./src/config.js" 


// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(res => {
//     for(var i=0; i<res.products.length; i++){
//         console.log(res.products[i])
//         var getData=document.getElementById('getData')

//         getData.innerHTML+=`<div class="card" style="width: 18rem"; onclick='card1(${res.products[i].id})'>
//         <img src='${res.products[i].thumbnail}' class="card-img-top" alt="..." style="width: 100%; height:180px;">
//         <div class="card-body">
//         <h5 class="card-title">Price ${res.products[i].price}: $</h5>
//         <p class="card-text">${res.products[i].description}</p>
//         </div>
//     </div>`

// }})

// function card1(){
//     window.location.href = './product.html?productdetails='+id
// }

//   const userData = JSON.parse(localStorage.getItem('users'))
// var replac=document.getElementById('replac')
// for(var i=0; i < userData.length; i++){
//   replac.innerHTML = userData[i].name
//   break;
// }

onAuthStateChanged(auth, (user) => {
if (user) {
    const emailElement = document.getElementById('replaceEmail')
    emailElement.innerHTML = user.email

    renderAds()
} else {
    window.location.href='./src/signup/signup.html'
}
})

async function renderAds(){
    const ads= await getAds()
    console.log(ads)
    var getData=document.getElementById('getData')

    for(var i=0; i<ads.length; i++){
        var ad=ads[i]

        var card=document.createElement('div')
        card.addEventListener ('click' ,function() {
            window.location.href = './product.html?adId='+ad.id
        })
        var image=document.createElement('img')
        image.src=ad.image
        image.style.width='300px'
        image.style.height='200px'

        var title=document.createElement('h3')
        title.innerHTML=ad.brand
        var amount=document.createElement('h5')
        amount.innerHTML=`Rs ${ad.price}`

        card.append(image)
        card.append(title)
        card.append(amount)
        getData.append(card)
}}
window.signout = function() {
    logout()
}