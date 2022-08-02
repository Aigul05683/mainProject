# GFP - Global Fire Protection Website

Main Project Structure


## Languages Used

- HTML5 - site sceleton
- CSS3 - style sheets
- JS (JQuery) - email form submition
- PHP - local email sending agent


## Email sending code

```javascript
jQuery(document).ready(function($) {

    $(".form").submit(function() {
    var str = $(this).serialize();
    
    $.ajax({
    type: "POST",
    url: "../../../php/contact.php",
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
```


## Responsible for sending Email

- ../../../php/contact.php

- src/js/main.js

