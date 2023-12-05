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





document.querySelectorAll('.nav-item.dropdown').forEach(function (dropdown) {
    dropdown.addEventListener('show.bs.dropdown', function () {
      document.querySelectorAll('.nav-item').forEach(function (navItem) {
        if (navItem !== dropdown) {
          navItem.classList.add('show');
        }
      });
    });

    dropdown.addEventListener('hide.bs.dropdown', function () {
      document.querySelectorAll('.nav-item').forEach(function (navItem) {
        navItem.classList.remove('show');
      });
    });
  });








 // Tıklama olayını dinle
  document.querySelectorAll(".dropdown-toggle").forEach(function (toggle) {
    toggle.addEventListener("click", function () {
      // Diğer öğelerin özelliklerini değiştir
      document.querySelectorAll(".dropdown-toggle").forEach(function (otherToggle) {
        if (otherToggle !== toggle) {
          otherToggle.setAttribute("aria-expanded", "false");
          otherToggle.classList.add("collapsed");
        }
      });

      // Diğer öğelerden "show" sınıfını kaldırın
      document.querySelectorAll(".list-unstyled").forEach(function (list) {
        if (list !== toggle.nextElementSibling) {
          list.classList.remove("show");
        }
      });
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



 

 
// script.js

// script.js
// document.addEventListener("DOMContentLoaded", function() {
//     var burgerBtn = document.getElementById('burgerBtn');
//     var mobile = document.getElementById('mobile');
//     var demo1 = document.getElementById('demo1');

//     burgerBtn.addEventListener('click', function() {
//         mobile.classList.toggle('navigation');

//         // Animasyonlu geçiş
//         if (mobile.classList.contains('navigation')) {
//             mobile.style.transition = 'height 0.3s';
//             mobile.style.height = '100vh';
//         } else {
//             // setTimeout kullanılmasının sebebi, 'navigation' sınıfının
//             // kaldırılması ve ardından animasyonun başlatılması için bir gecikme sağlamaktır.
//             setTimeout(function() {
//                 mobile.style.transition = 'height 0.3s';
//                 mobile.style.height = 'auto';
//             }, 300);
//         }
//     }, false);

//     demo1.addEventListener('click', function() {
//         demo1.classList.add('active');
//         mobile.classList.add('demo1');

//         // Demo1 sınıfı eklenince animasyonlu geçiş
//         mobile.style.transition = 'height 0.3s';
//         mobile.style.height = '100vh';
//     }, false);
// });
document.addEventListener("DOMContentLoaded", function() {
    var burgerBtn = document.getElementById('burgerBtn');
    var mobile = document.getElementById('mobile');
    var mobileMenu = document.getElementById('mobileMenu');

    burgerBtn.addEventListener('click', function() {
        mobile.classList.toggle('navigation');

        if (mobile.classList.contains('navigation')) {
            mobile.style.height = '100vh';
        } else {
            setTimeout(function() {
                mobile.style.height = 'auto';
            }, 300);
        }
    }, false);

    mobileMenu.addEventListener('click', function() {
        mobileMenu.classList.add('active');
        mobile.classList.add('mobileMenu');

        // Demo1 sınıfı eklenince animasyonlu geçiş
        mobile.style.height = '100vh';
    }, false);
});









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


//MEDYA SAYFASI CARD FİLTRELEME
document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-button");
    const cards = document.querySelectorAll(".card");

    filterButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
 
            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });
 
            button.classList.add("active");
 
            const filterCategory = button.getAttribute("data-filter");
 
            cards.forEach(card => {
                card.style.display = "none";
            }); 
            cards.forEach(card => {
                const cardCategory = card.getAttribute("data-category");

                if (filterCategory === "all" || filterCategory === cardCategory) {
                    card.style.display = "block";
                }
            });
        });
    });
});




$(document).ready(function() {
    $('[data-fancybox="gallery"]').fancybox({
        infobar: false, // Infobar'ı kapat
            toolbar: false, // Araç çubuğunu kapat
            smallBtn: true, // Küçük kapatma butonunu gösterme
      transitionEffect: "slide",
      slideShow: {
        autoStart: false, // Otomatik başlatmayı istemiyorsanız false olarak ayarlayın
        speed: 2000 // Slide geçiş hızı (ms cinsinden)
      },
      buttons: [
        "slideShow",
        "fullScreen",
        "thumbs",
        "close"
      ],
      
    });
  });
// document.addEventListener("DOMContentLoaded", function () {
//     const filterButtons = document.querySelectorAll(".filter-button");
//     const cards = document.querySelectorAll(".card");

//     // Mark the "photos" button as active by default
//     const defaultFilterCategory = "photos";
//     const defaultFilterButton = document.querySelector(`[data-filter="${defaultFilterCategory}"]`);
    
//     if (defaultFilterButton) {
//         defaultFilterButton.classList.add("active");
//     }

//     filterButtons.forEach(button => {
//         button.addEventListener("click", function (event) {
//             event.preventDefault();

//             console.log("Button clicked:", button.getAttribute("data-filter"));

//             filterButtons.forEach(btn => {
//                 btn.classList.remove("active");
//             });

//             button.classList.add("active");

//             const filterCategory = button.getAttribute("data-filter");

//             console.log("Filter Category:", filterCategory);

//             cards.forEach(card => {
//                 card.style.display = "none";
//             });

//             cards.forEach(card => {
//                 const cardCategory = card.getAttribute("data-category");

//                 if (filterCategory === "all" || filterCategory === cardCategory) {
//                     card.style.display = "block";
//                 }
//             });
//         });
//     });
// });


