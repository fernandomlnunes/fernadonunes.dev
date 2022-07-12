window.addEventListener('scroll', fixNav)

function fixNav(){

var home = document.querySelector('.home');
if(home.classList.toggle('sticky', window.scrollY > 0 && window.scrollY < 925)){
}}

window.addEventListener('scroll', fixNav_1)

function fixNav_1(){

var sobre = document.querySelector('.sobre');
if(sobre.classList.toggle('sticky', window.scrollY > 926 && window.scrollY < 1615)){
}}

window.addEventListener('scroll', fixNav_2)

function fixNav_2(){

var servicos = document.querySelector('.servicos');
if(servicos.classList.toggle('sticky', window.scrollY > 1615 && window.scrollY < 2425)){
}}


window.addEventListener('scroll', fixNav_3)

function fixNav_3(){

var portifolio = document.querySelector('.portifolio');
if(portifolio.classList.toggle('sticky', window.scrollY > 2425 && window.scrollY < 3290)){
}}

window.addEventListener('scroll', fixNav_4)

function fixNav_4(){

var cantato = document.querySelector('.cantato');
if(cantato.classList.toggle('sticky', window.scrollY > 3291)){
}}

window.addEventListener('scroll', btn_topo)

function btn_topo(){

var btn_home = document.querySelector('.topo');
if(btn_home.classList.toggle('sticky', window.scrollY > 120)){
}}

const linkInterno = document.querySelector('[data-scroll="suave"] a[href^="#"]')


function scrollTop(event){
  event.preventDefault()

  const href = event.currentTarget.getAttribute('href')

  const topo = document.querySelector(href)

  topo.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

linkInterno.addEventListener('click', scrollTop)