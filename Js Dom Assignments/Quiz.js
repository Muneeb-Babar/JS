var questions = [
    {
    title: 'What is HTML',
    options: ['Programming Language', 'Scripting Language', 'Markup Language', 'None of the'],
    correctAnswer: 'Markup Language'
    },
    {
    title: 'What is CSS',
    options: ['Styling Language', 'Gora Language', 'Kala Language', 'None of the above'],
    correctAnswer: 'Styling Language'
    },
    {
    title: 'What is JS',
    options: ['Programming Language', 'Scripting Language', 'Markup Language', 'None of the'],
    correctAnswer: 'Programming Language'},
    {
    title: 'What is React',
    options: ['Programming Language', 'Scripting Language', 'Markup Language', 'None of the'],
    correctAnswer: 'Programming Language'
    },
    {
        title: 'Why we use ReactNative',
        options: ['Programming Language', 'Scripting Language', 'Build Mobile Apps', 'None of the'],
        correctAnswer: 'Build Mobile Apps'
        },
]

function start(event){
    var btn=event.target
    btn.className='hide'
    var qusContainer=document.getElementById('qus-container')
    qusContainer.className=''
    renderQus()
    timer()
}
    var currentQustion=0
    score=0
    
function next() {
    checkAns()
    currentQustion++
    if (currentQustion<questions.length){
        renderQus()
    }
    else{
        var qusContainer=document.getElementById('qus-container')
        qusContainer.className='hide'
        var resultElement=document.getElementById('result')
        resultElement.className=''
        var percentage=score/questions.length*100
        var resultScore=document.getElementById('resultScore')
        resultScore.innerHTML="Your Score is : "+percentage
        var time=document.getElementById('time')
        time.className='hide'
    }
}
function checkAns(){
    var options=document.getElementsByTagName('input')
    for(var i=0; i<options.length; i++){
        if(options[i].checked){
            if(options[i].value==questions[currentQustion].correctAnswer){
                score++
            }
        }
    }
}
function renderQus() {
    var title=document.getElementById('title')
    title.innerHTML=questions[currentQustion].title
    var optionElement=document.getElementById('option')
    optionElement.innerHTML=''

    var options=questions[currentQustion].options
    for(var i=0; i<options.length; i++){
        var inputElement=document.createElement('input')
        inputElement.type='radio'
        inputElement.name='quiz'
        var lineBreak = document.createElement("br");
        optionElement.insertBefore(lineBreak, optionElement.lastChildChild);
        inputElement.value=options[i]
        optionElement.append(inputElement)
        optionElement.append(options[i])
    }
}
function restart(){
    var result=document.getElementById('result')
    result.className='hide'
    var qusContainer=document.getElementById('qus-container')
    qusContainer.className=''
    currentQustion=0
    timer()
    renderQus()
    
}

function timer(){
    var min=1
    var sec=59
    var time=document.getElementById('time')
    var interval=setInterval(function(){
        time.innerHTML =`Your Time Starts Now  ${min} : ${sec}`
        sec--
        if(sec<0){
            min--
            sec=59
            if(min<0){
                min=1
                sec=59
                next()
            }
        }
    },1000)
}

