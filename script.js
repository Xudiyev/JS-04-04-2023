"use strict";

let hamburger=document.querySelector('.hamburger')
let mobile=document.querySelector('.mobile')

hamburger.addEventListener('click',()=>{
mobile.classList.toggle('active')
})