$(document).ready(function() {    
    $("body").css("opacity", "1");
  });
$(document).ready(function () {
    $('.burger').on('click', function(){
        $('.burger').toggleClass('burger_active')
        $('.header-nav').toggleClass('header-nav_active')
    })
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