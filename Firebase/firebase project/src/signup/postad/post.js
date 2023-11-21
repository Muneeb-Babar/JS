import { postToDb } from "../../config.js"

window.hideLi=function(){
    var main1=document.getElementById('main1')
    var add_cart=document.getElementById('add_cart')
    main1.className='hide'
    add_cart.className=''
}

window.onSubmit=function(){
    var allInputs=document.getElementsByTagName('input')
    var title=allInputs[0].value
    var description=allInputs[1].value
    var brand=allInputs[2].value
    var price=allInputs[3].value
    var image=allInputs[4].files[0]
    var location=allInputs[8].value

const ad ={
    title,
    description,
    brand,
    price,
    location,
    image
}
postToDb(ad)
}