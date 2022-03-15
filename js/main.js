let menuBtn = document.querySelector(".menuBottom")
let menuList = document.querySelector('.navbar')
let search = document.querySelector('.header-wraper__search')
let modalClose = document.querySelector('.modal__close')
let modal = document.querySelector('.modal')
let viewBtn = document.querySelector('.booking-button')

menuBtn.addEventListener('click',menu);
function menu(){
   menuList.classList.toggle('navbar--visible')
    
    console.log("asdasd")
}
modalClose.addEventListener('click',modalHiden);
function modalHiden(){
    console.log('hihi');
    modal.classList.toggle('modal--visible')
}
viewBtn.addEventListener('click',modalHiden )
