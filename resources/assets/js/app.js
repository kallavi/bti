// Scroll olayını dinlemek scroll
window.addEventListener('scroll', function () { 
    var header = document.querySelector('header'); 

    // Yüksekliği kontrol ederek 'fixed' sınıfı eklenir
    if (window.pageYOffset > 135) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});
 

$(document).ready(function(){
    $('#buttonScroll').on('click', function(){
      $('html, body').animate({
        scrollTop: $('#tanitimSection').offset().top
      }, ); // Kaydırma süresi (milisaniye cinsinden)
    });
  });

function checkScreenSize() {
    if (window.innerWidth <= 992) { 
        $('.dropdown').off('show.bs.dropdown').on('show.bs.dropdown', function () {
            $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
        });

        // Add slideUp animation to Bootstrap dropdown when collapsing.
        $('.dropdown').off('hide.bs.dropdown').on('hide.bs.dropdown', function () {
            $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
        });
    }
}

$(document).ready(function () {
    checkScreenSize();

    // Add an event listener for the window resize event
    $(window).on('resize', function () {
        checkScreenSize();
    });
});
window.addEventListener('load', function () {
    if ($('.preloader').length) {
        $('.preloader').fadeOut('slow');
    }
});

// var burgerBtn = document.getElementById('burgerBtn');
// var mobile = document.getElementById('mobile');
// var demo1 = document.getElementById('demo1'); 

// burgerBtn.addEventListener('click', function() {
//   mobile.classList.toggle('navigation');   
// }, false);

// demo1.addEventListener('click', function() {
//   demo1.classList.add('active'); 
//   mobile.classList.add('demo1'); 
// }, false);

 
// mobil hamburger menu bbutonu tıklandıgındaki işlevler icin
var navbarToggler = document.querySelector('.navbar-toggler');
var navbarTogglerParent = document.querySelector('header');
var body = document.querySelector('body');

navbarToggler.addEventListener('click', function () {
    if (navbarToggler.classList.contains('active')) {
        navbarToggler.classList.remove('active');
        navbarTogglerParent.classList.remove('active');
        body.style.overflow = 'auto'; // Overflow'u yeniden etkinleştir
    } else {
        navbarToggler.classList.add('active');
        navbarTogglerParent.classList.add('active');
        body.style.overflow = 'hidden'; // Overflow'u devre dışı bırak
    }
});

var swiper = new Swiper(".carouselSlider", {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var logoswiper = new Swiper(".logoSlider", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: { 
          slidesPerView: 3,
          spaceBetween: 85,
        },
        992: { 
          slidesPerView: 5,
          spaceBetween: 120,
        }, 
      },
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})();

// Sayfa yüklendiğinde ve pencere boyutu değiştiğinde kontrol edin
// Modal gösterildiğinde
$('.modal').on('shown.bs.modal', function () {
    // Sayfa kaydırmasını engelle
    document.documentElement.style.overflow = 'hidden';
});

// Modal kapatıldığında
$('.modal').on('hidden.bs.modal', function () {
    // Sayfa kaydırmasını etkinleştir
    document.documentElement.style.overflow = 'auto';
});

