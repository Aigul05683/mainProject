# GFP - Global Fire Protection Website

Main Project Structure


## Languages Used

- HTML5 - site sceleton
- CSS3 - style sheets
- JS (JQuery) - email form submition
- PHP - local email sending agent


## 🔗 Structure
- [projectAbout - О компании](https://github.com/Aigul05683/mainProject/tree/main/projectAbout)

- [projectContacts - Контакты](https://github.com/Aigul05683/mainProject/tree/main/projectContacts)

- [projectLicensec - Нормативные документы](https://github.com/Aigul05683/mainProject/tree/main/projectLicensec)

- [projectProject - Реализованные проекты](https://github.com/Aigul05683/mainProject/tree/main/projectProject)

- [projectReviews - Наука](https://github.com/Aigul05683/mainProject/tree/main/projectReviews)

- [projectServis - Услуги](https://github.com/Aigul05683/mainProject/tree/main/projectServis)
## Email sending code - src/js/main.js

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

