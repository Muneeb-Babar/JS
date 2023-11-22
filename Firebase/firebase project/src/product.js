import { getSingleAd,getUser } from "./config.js"

async function getAdDetail(){
  const id=location.search.split('=')[1]

  var ad = await getSingleAd(id)
  console.log(ad)
  const user=await getUser(ad.uid)
  console.log(user)

var parentDiv=document.getElementById('products')

parentDiv.innerHTML = `
<div id="carouselExampleIndicators" class="carousel slide">
<div class="carousel-indicators">
<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
</div>
<div class="carousel-inner images">
<div class="carousel-item active">
<img src="${ad.image}"ad.image class="d-block " alt="..." width='100%'>
</div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
<span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="visually-hidden">Next</span>
</button>
</div>
<h3><span class="span">Title: </span>${ad.title}</h3>
<h4><span class="span">Price: </span> ${ad.price} $</h4>
<div class="description">
<p><span class="span">Description: </span> ${ad.description}</p>
<p><span class="span">User Name: </span> ${user.firstName}</p>
</div>`

// const card = document.createElement('div')

//     const img = document.createElement('img')
//     img.src = ad.image
//     img.style.width = '300px'
//     img.style.height = '300px'

//     const title = document.createElement('h3')
//     title.innerHTML = ad.title

//     const amount = document.createElement('h4')
//     amount.innerHTML = `Rs. ${ad.price}`

//     const description = document.createElement('p')
//     description.innerHTML = ad.description

//     card.append(img)
//     card.append(title)
//     card.append(amount)
//     card.append(description)
//     parentDiv.append(card)
}

getAdDetail()




