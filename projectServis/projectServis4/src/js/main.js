$(document).ready(function() {    
    $("body").css("opacity", "1");
  });
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


$('.burger').on('click', function(){
    $('.burger').toggleClass('burger_active')
    $('.header-nav').toggleClass('header-nav_active')
    $('.header__contacts').toggleClass('.header__contacts_active')
    
})

jQuery(document).ready(function($) {

    $(".form").submit(function() {
    var str = $(this).serialize();
    
    $.ajax({
    type: "POST",
    url: "../../../../php/contact.php",
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