function addItem(){
    var inputElement=document.getElementById('input')
    var ulElement=document.getElementById('list')
    var liElement=document.createElement('li')
    var editbtn='<button onclick=editItem(event)>Edit</button>'
    var delbtn='<button onclick=delItem(event)>Delete</button>'
    liElement.innerHTML='<span id="post">'+inputElement.value+'</span>' + editbtn + delbtn

    ulElement.append(liElement)
    cls()
}
function cls(){
    var inputElement=document.getElementById('input')
    inputElement.value=''
}
function delItem(event){
    var liElement=event.target.parentElement
    // console.log('event.target',event)
    liElement.remove()
}
function delAllItem(){
    var ulElement=document.getElementById('list')
    ulElement.innerHTML=''
}

var itemElement

function editItem(event){
    // console.log(event)
    var inputElement=document.getElementById('input')
    itemElement=event.target.previousSibling
    inputElement.value=itemElement.innerHTML

    var addBtn=document.getElementById('add-btn')
    addBtn.className='hide'

    var updateBtn=document.getElementById('update-btn')
    updateBtn.className=''
}
function updateItem(){
    var inputElement=document.getElementById('input')
    itemElement.innerHTML=inputElement.value
    //Buttons ko change karna hai
    var updateBtn=document.getElementById('update-btn')
    updateBtn.className='hide'
    var addBtn=document.getElementById('add-btn')
    addBtn.className=''
}
