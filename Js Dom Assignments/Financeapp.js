var amount=0
function addTransaction(type){
    var value1=document.getElementById('description')
    var value2=document.getElementById('amount')
    var table=document.getElementById('table')

    

    var trElement= document.createElement('tr')
    var tdElement1=document.createElement('td')
    tdElement1.innerHTML=value1.value
    trElement.insertBefore(tdElement1,trElement.lastChildChild)
    

    var tdElement2=document.createElement('td')
    tdElement2.innerHTML=value2.value
    trElement.insertBefore(tdElement2,trElement.lastChildChild)

    var total=document.getElementById('total-amount')
    if( type === 'income'){

    amount=value2.value
    total.innerHTML+=amount

    if(type==='expense'){
        amount-value2.value
    }
}


    var tdElement3=document.createElement('td')
    tdElement3.innerHTML=type
    trElement.insertBefore(tdElement3,trElement.lastChildChild)
    table.append(trElement)

    value1.value=''
    value2.value=''

    var tableRow=document.getElementById('total-row')
    tableRow.className=''
    table.append(tableRow)
}



