let btn = document.querySelector('.header__img');
let main = document.querySelector('.header__reklam');
btn.addEventListener('click',function(){
     if (main.style.display === 'flex') {
        main.style.display = 'none'
     }else{
        main.style.display = 'flex';
     }
    
})