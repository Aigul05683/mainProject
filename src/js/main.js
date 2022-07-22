$(document).ready(function() {    
    $("body").css("opacity", "1");
  });
$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        dots: false,
        responsive:{
            0 : {
                items: 1
            },
            768 : {
                items: 2
            },
            992 : {
                items: 3
            }
        }

    });
    // Go to the next item
    $('.customNextBtn').click(function () {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.customPrevBtn').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })

    //подключение табов
    $('ul.menu-tabs__caption').on('click', 'li:not(.menu-tabs__btn_active)', function () {
        $(this)
            .addClass('menu-tabs__btn_active').siblings().removeClass('menu-tabs__btn_active')
            .closest('div.menu-tabs').find('div.menu-tabs__content').removeClass('menu-tabs__content_active').eq($(this).index()).addClass('menu-tabs__content_active');
    });

    // $('.faq__moreBtn').on('click', function(e) {
    //     e.preventDefault()
    //     $('#faq-hidden').toggleClass('faq__text_hidden')

    // })
    $('.burger').on('click', function(){
        $('.burger').toggleClass('burger_active')
        $('.header-nav').toggleClass('header-nav_active')
        $('.header__contacts').toggleClass('.header__contacts_active')
        
    })
});




const arrow = document.querySelector('.arrow')
const hidden = document.querySelector('#grid-item-hidden')
function checkBtnClass(){
    if(arrow.className.includes('rotate')){
        arrow.textContent = 'less...'
    } else {
        arrow.textContent = 'see more...'
    }
}
arrow.addEventListener('click', function(e) {
    e.preventDefault()
    hidden.classList.toggle('grid-item__hidden')
    arrow.classList.toggle('rotate')
    checkBtnClass()
})

function backToTop(){
    let button = $('.back-to-top');
    $(window).on('scroll', ()=>{
        if($(this).scrollTop()>= 50){
            button.fadeIn();
        }else{
            button.fadeOut()
        }
    })
    button.on('click', (e)=>{
        e.preventDefault();
        $('html').animate({scrollTop: 0}, 1000);
    })
}

backToTop();

jQuery(document).ready(function($) {

    $(".form").submit(function() {
    var str = $(this).serialize();
    
    $.ajax({
    type: "POST",
    url: "../../php/contact.php",
    data: str,
    success: function(msg) {
    if(msg == 'OK') {
    result = '<p>Сообщение принято, мы свяжемся с вами в ближайшее время</p>';
    $(".fields").hide();
    } else {
    result = msg;
    }
    $('.note').html(result);
    }
    });
    return false;
    });
    });

    $('.header__info-btn').on('click', function(e){
        e.preventDefault()
        $('.overlay, .popup').fadeIn('4000')  
    })
    $('.popup-close').on('click', function(){
        $('.overlay, .popup').fadeOut('4000')  
    })
