// let tacts4 = {
//     one: [1, 0, 0, 0],
//     two: [0, 1, 0, 0],
//     three: [0, 0, 1, 0],
//     four: [0, 0, 0, 1]
// }

let $start = document.querySelector('#start')
let $strong = document.querySelector('#strong')
let $weak = document.querySelector('#weak')
let $div = document.querySelector('#div')

$start.addEventListener('click', startPlay)
$strong.addEventListener('click', renderStrong)
$weak.addEventListener('click', renderWeak)

function startPlay() {
   let audioWeak = new Audio('https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3')
   let audioStrong = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3')
   let strongBox = document.querySelector('.strong')
   let weakBox = document.querySelector('.weak')
   let box = document.querySelectorAll('.box')
   for (let i = 0; i < box.length; i++) {
       if(weakBox) {
         setInterval(function(){
            audioWeak.play()
         }, 1000)
      }
   }
      for (let i = 0; i < box.length; i++) {
      if(strongBox) {
         setInterval(function(){
            audioStrong.play()
         }, 2000)      }
    }
}

function renderStrong() {
   let strong = document.createElement('div')
   strong.style.height = strong.style.width = '100px'
   strong.style.marginRight = '10px'
   // strong.style.position = 'absolute'
   // strong.style.top = strong.style.left = '50px'
   // strong.style.display = 'inline'
   strong.style.backgroundColor ='red'
   strong.classList.add('strong')
   strong.classList.add('box')
   $div.insertAdjacentElement('beforeend', strong)
}

function renderWeak() {
   let weak = document.createElement('div')
   weak.style.height = weak.style.width = '50px'
   weak.style.marginRight = '5px'
   weak.style.backgroundColor ='blue'
   weak.classList.add('weak')
   weak.classList.add('box')
   $div.insertAdjacentElement('beforeend', weak)
}