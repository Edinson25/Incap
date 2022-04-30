const bar = document.getElementById('bar');
const nav = document.querySelector('.navegador');

if (bar){
    bar.addEventListener('click', ()=>{
        nav.classList.toggle('active');
    })
}



window.addEventListener('scroll', function(){
    const header = document.querySelector('.header');
    header.classList.toggle("sticky", window.scrollY > 0)
})


window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0)
})