window.addEventListener('scroll', function () {
    // var main = document.querySelector('.mobileMenu');
    var header = document.querySelector('header');
    var subHeader = document.querySelector('.subHeader');
    var burgerBtn = document.querySelector('#burgerBtn');

    var scrollThreshold = window.innerWidth <= 992 ? 40 : 100;

    if (window.pageYOffset > scrollThreshold) {
        header.classList.add('fixed');
       
        // main.classList.add('fixed');
 
        if(subHeader){
            subHeader.classList.add('fixed');
        }
       
            burgerBtn.style.top = '40px';
            console.log("çalıştı")
            burgerBtn.style.filter = 'contrast(0.5)';
        
    } else {
        header.classList.remove('fixed');
        
        // main.classList.remove('fixed');
        if(subHeader){
            subHeader.classList.remove('fixed');
        }
        
            burgerBtn.style.top = '47px';
            burgerBtn.style.filter = 'none'; // Filtreyi kaldır
        
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


 
document.addEventListener("DOMContentLoaded", function() {
    var burgerBtn = document.getElementById('burgerBtn');
    var mobile = document.getElementById('mobile');
    // var mobileMenu = document.getElementById('mobileMenu');

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

    // mobileMenu.addEventListener('click', function() {
    //     mobileMenu.classList.add('active');
    //     mobile.classList.add('mobileMenu');

    //     // Demo1 sınıfı eklenince animasyonlu geçiş
    //     mobile.style.height = '100vh';
    // }, false);
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



$(document).ready(function() {
    console.log("fancy")
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
 

  document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-button");
    const cards = document.querySelectorAll(".filterCard"); // Sadece filterCard class'ına sahip kartları seç

    // Varsayılan kategori olarak "photos" seçiliyor
    const defaultFilterCategory = "photos";

    // Sayfa yüklendiğinde varsayılan kategoriye ait butonu seçili yap
    filterButtons.forEach(button => {
        if (button.getAttribute("data-filter") === defaultFilterCategory) {
            button.classList.add("active");
        }

        button.addEventListener("click", function (event) {
            event.preventDefault();

            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            const filterCategory = button.getAttribute("data-filter");

            cards.forEach(card => {
                const cardCategory = card.getAttribute("data-category");

                if (filterCategory === "all" || filterCategory === cardCategory) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

    // Sayfa yüklendiğinde varsayılan kategoriye ait kartları göster
    cards.forEach(card => {
        const cardCategory = card.getAttribute("data-category");

        if (defaultFilterCategory === "all" || defaultFilterCategory === cardCategory) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

 