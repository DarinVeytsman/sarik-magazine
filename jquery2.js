

$('.menu-btn').on('click', function(el) {
    el.preventDefault;
    $(this).toggleClass('menu-btn_active');
    $('.nav__list_link').toggleClass('nav__list_link_active');
    
    });
    

    function writing(elem) { 
        let inner = elem.html(),
            fullText = '',
            letterConut = 0,
            interval = setInterval(function () { 
                fullText += inner[letterConut]
                elem.html(fullText);
                letterConut++;
                if (fullText === inner) {
                    clearInterval(interval)
                }
             },200)
     }
     writing($('.header__rek_text'));
   
       
    