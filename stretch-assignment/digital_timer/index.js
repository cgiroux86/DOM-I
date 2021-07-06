
let hund = document.getElementById('msHundreds')
let secondsId = document.getElementById('secondOnes')
let tens = document.getElementById('secondTens')
let msTens = document.getElementById('msTens')
let body = document.getElementsByTagName('body')
console.log(body)

let count = 0;
let countTensMs = setInterval(function(){
    if (count < 10){   
    msTens.textContent = count;
    count++
    
    }
    else
    count = 0;
    
},10)
let countHund = 0;
let countMsHund = setInterval(function(){
    if (countHund < 10){
   hund.textContent = countHund
    countHund++
    }
    else 
    countHund = 0;
 

}, 100)
let seconds = 0;
let countSec1 = setInterval(function(){
 if (seconds < 10){
 secondsId.textContent = seconds;
 seconds++
 }
 else
 seconds = 0;
 

},1000)

let secTens = setInterval(function () {
  clearInterval(countTensMs)
  clearInterval(countMsHund)
  clearInterval(countSec1)
  tens.textContent = 1;
  tens.style.color = 'red'
  secondsId.textContent = 0;
  secondsId.style.color = 'red';
  msTens.textContent  = 0;
  msTens.style.color = 'red'
  hund.textContent = 0;
  hund.style.color = 'red'
  body[0].style.backgroundColor = 'slategrey'
},11000)






