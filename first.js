const button =document.querySelector('button')
const img = document.querySelector('#img')
const data = document.querySelector('.data')
const dataimg=document.querySelector('#img-in')
button.addEventListener('click',()=>{
    img.classList.toggle('ruleimg')

})
let paper =document.querySelector('.paper')
let scissors=document.querySelector('.scissors')
let rock =document.querySelector('.rock')
let data1=document.querySelector('.data1')
let playerin = document.querySelector('.player-in')
let player = document.querySelector('.player')
let computerin = document.querySelector('.computer-in')
let computer = document.querySelector('.computer')
let result=document.querySelector('.result')
let tryagain=document.querySelector('.try-again')
// let element = paper
const rdn=Math.floor(Math.random()*3)
const element = ['paper','rock','scissors']
let score=0

paper.addEventListener('click',()=>{
    console.log(paper.id)
    data.style.display='none';
    data1.style.display='flex';
    playerin.src='icon-paper.svg'
    player.style.border="5px solid hsl(230, 89%, 65%)"
     
    setTimeout(() => {
         console.log(rdn)
         console.log(element[rdn])
         if(element[rdn]=='paper'){
            computerin.src='icon-paper.svg'
            computer.style.border='5px solid hsl(230, 89%, 65%)'
            score++
            result.innerText='YOU WON'
            console.log(score)
            // computer.style.box='0px 0px 0px 20px hsl(230, 89%, 65%);'
         }
         else if(element[rdn]=='rock'){
            computerin.src='icon-rock.svg'
            computer.style.border='5px solid hsl(349, 71%, 52%)'
            result.innerText='YOU LOOSE'
            if(score>0){
                score--
            }
            
         }
         else{
            computerin.src='icon-scissors.svg'
            computer.style.border="5px solid hsl(39, 89%, 49%)"
            console.log(score)
            result.innerText='YOU LOOSE'
            if(score>0){
                score--
            }
         }
         

    },2000);
})

rock.addEventListener('click',()=>{
    console.log(paper.id)
    data.style.display='none';
    data1.style.display='flex';
    playerin.src='icon-rock.svg'
    player.style.border="5px solid hsl(349, 71%, 52%)"
     
    setTimeout(() => {
         console.log(rdn)
         console.log(element[rdn])
         if(element[rdn]=='paper'){
            computerin.src='icon-paper.svg'
            computer.style.border='5px solid hsl(230, 89%, 65%)'
            result.innerText='YOU LOOSE'
            if(score>0){
                score--
            }
             
            // computer.style.box='0px 0px 0px 20px hsl(230, 89%, 65%);'
         }
         else if(element[rdn]=='rock'){
            computerin.src='icon-rock.svg'
            score++
            computer.style.border='5px solid hsl(349, 71%, 52%)'
            result.innerText='YOU WON'

            
         }
         else{
            computerin.src='icon-scissors.svg'
            computer.style.border='5px solid hsl(39, 89%, 49%)'
            result.innerText='YOU LOOSE'
            if(score>0){
                score--
            }
            
         }
    },2000);
})

scissors.addEventListener('click',()=>{
    console.log(paper.id)
    data.style.display='none';
    data1.style.display='flex';
    playerin.src='icon-scissors.svg';
    player.style.border="5px solid hsl(39, 89%, 49%)";
     
    setTimeout(() => {
         console.log(rdn)
         console.log(element[rdn])
         if(element[rdn]=='paper'){
            computerin.src='icon-paper.svg'
            computer.style.border='5px solid hsl(230, 89%, 65%)'
            result.innerText='YOU LOOSE'
            if(score>0){
                score--
            }
             
            // computer.style.box='0px 0px 0px 20px hsl(230, 89%, 65%);'
         }
         else if(element[rdn]=='rock'){
            computerin.src='icon-rock.svg'
            score++
            computer.style.border='5px solid hsl(349, 71%, 52%)'
            result.innerText='YOU LOOSE'
            if(score>0){
                score--
            }

            
         }
         else{
            computerin.src='icon-scissors.svg'
            computer.style.border='5px solid hsl(39, 89%, 49%)'
            result.innerText='YOU WON'
            score++
            
         }
    },2000);
})
tryagain.addEventListener('click',()=>{
    // data.style.display='flex'
    // data1.style.display='none'
    location.reload()
})