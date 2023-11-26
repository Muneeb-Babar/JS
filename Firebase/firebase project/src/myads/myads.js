import { auth,getMyAdsFromDb,onAuthStateChanged } from "../config.js";

onAuthStateChanged(auth, (user) => {
    if (user) {
        getMyAds()
    } else {
        // User is signed out
        // ...

        location.href = '../signup/login.html'
    }
})

async function getMyAds() {
    const uid = auth.currentUser.uid
    console.log('uid', uid)
    
    const getData = document.getElementById('getData')

    const ads = await getMyAdsFromDb(uid)

    for (var i = 0; i < ads.length; i++) {
        const ad = ads[i]

        const card = document.createElement('div')
        card.className = 'card'
        card.onclick = function () {
            location.href = '../../product.html?adId=' + ad.id
        }

        const img = document.createElement('img')
        img.src = ad.image
        img.style.width = '250px'
        img.style.height = '200px'

        const title = document.createElement('h3')
        title.innerHTML = ad.title

        const amount = document.createElement('h4')
        amount.innerHTML = `Rs. ${ad.price} $`

        card.append(img)
        card.append(title)
        card.append(amount)

        getData.append(card)
    }
}