$(function () {
  $(document).on("mouseup touchend", function (e) {
    var container = $(".header__catalog-pop-up");
    var button = $('.header__catolog-btn');

    if (!container.is(e.target) && container.has(e.target).length === 0 && !button.is(e.target)) {
      container.removeClass("active");
      $('body').removeClass('noscroll');
      $('.header__catolog-svg-1').removeClass('active');
      $('.header__catolog-svg-2').removeClass('active');
    }
  });

  $('.header__catolog-btn').on("click", function (event) {
    var container = $(".header__catalog-pop-up");

    if (container.hasClass('active')) {
      container.removeClass("active");
      $('body').removeClass('noscroll');
      $('.header__catolog-svg-1').removeClass('active');
      $('.header__catolog-svg-2').removeClass('active');
    } else {
      container.addClass('active');
      $('body').addClass('noscroll');
      $('.header__catolog-svg-1').addClass('active');
      $('.header__catolog-svg-2').addClass('active');
    }
  });
  $(document).on('click', '.header__change-color button', function () {

    if ($(this).hasClass('header__btn-light')) {
      localStorage.setItem("theme", 'light');
      var theme = "light";
    } else {
      localStorage.setItem("theme", 'dark');
      var theme = "dark";
    }

    applyTheme(theme);

  });


  function applyTheme(theme) {
    if (theme == "light") {
      $('body').removeClass("active-color");
      $('.header__btn-light').addClass('active');
      $('.header__btn-dark').removeClass('active');
      var theme_class = '';
    } else {
      $('body').addClass("active-color");
      $('.header__btn-dark').addClass('active');
      $('.header__btn-light').removeClass('active');
      var theme_class = 'active-color';
    }

    // $.ajax({
    //   url: 'index.php?route=common/header/setTheme&theme_class=' + theme_class,
    //   type: 'get'
    // });

  }

  /* END CHANGE THEME */

  $('body, .show__password').on('click', '.show__password', function () {
    if ($('#password-input').attr('type') == 'password') {
      $('#password-input').attr('type', 'text');
    } else {
      $('#password-input').attr('type', 'password');
    }
    return false;
  });


  $('body, .show__password1').on('click', '.show__password1', function () {
    if ($('#password-input1').attr('type') == 'password') {
      $('#password-input1').attr('type', 'text');
    } else {
      $('#password-input1').attr('type', 'password');
    }
    return false;
  });



  $('body, .show__password3').on('click', '.show__password3', function () {
    if ($('#password-input3').attr('type') == 'password') {
      $('#password-input3').attr('type', 'text');
    } else {
      $('#password-input3').attr('type', 'password');
    }
    return false;
  });


  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  // We listen to the resize event
  window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });




  // $(window).on("scroll load", function () {
  //   var scrollPos = $(window).scrollTop();
  //   if (scrollPos >= (60)) {
  //     $('.header__bottom').css({
  //       position: 'fixed',
  //       top: '0px',
  //       right: '0px',
  //       left: '0px'
  //     });
  //   } else {
  //     $('.header__bottom').css({
  //       position: 'static'
  //     });
  //   }
  // });



  // $(window).on("scroll resize", function () {
  //   if ($(window).width() > 768) {
  //     var scrollPos = $(window).scrollTop();
  //     if (scrollPos >= 60) {
  //       $('.header__burger-menu').css({
  //         top: '118px',
  //       });
  //       $('.header__burg-scroll').removeClass('active');
  //     } else {
  //       $('.header__burger-menu').css({
  //         top: '178px',
  //       });
  //       $('.header__burg-scroll').addClass('active');
  //     }
  //   }
  // });

  // $(window).on("scroll", function () {

  //   if ($(window).width() < 768) {
  //     $('.header__bottom').css({
  //       position: 'fixed',
  //       top: '0',
  //       right: '0',
  //       left: '0'
  //     });
  //   }
  // });


  $('.header-log, .form-reg, .sign-in__link').magnificPopup({
    type: 'inline',
    removalDelay: 300,
    mainClass: 'mfp-fade',

    callbacks: {
      close: function () {
        $('body').removeClass('noscroll');
      }
    }

  });
  

  $('.card__product-like').magnificPopup({
    removalDelay: 300,
    items: {
      src: '#modal-dialog'
    },

    callbacks: {
      close: function () {
        $('body').removeClass('noscroll');
      }
    }
  });


  $('.header__cart').magnificPopup({
    removalDelay: 300,
    items: {
      src: '#cart-rel'
    },

    callbacks: {
      close: function () {
        $('body').removeClass('noscroll');
      }
    }
  });



  $('.header__search-btn').magnificPopup({
    removalDelay: 300,
    items: {
      src: '#header__search-btn-box'
    },

    callbacks: {
      close: function () {
        $('body').removeClass('noscroll');
      }
    }
  });


  $('.size-popup').magnificPopup({
    removalDelay: 300,
    items: {
      src: '#table-size'
    },

    callbacks: {
      close: function () {
        $('body').removeClass('noscroll');
      }
    }
  });

  jQuery(document).ready(function () {
    jQuery(window).scroll(function () {
      if (jQuery(this).scrollTop() > 500) {
        jQuery('.btn-top').css({
          'opacity': '0.7',
          'pointer-events': 'auto',
        });
      } else {
        jQuery('.btn-top').css({
          'opacity': '0',
          'pointer-events': 'none',
        });
      }
    });

    jQuery('.btn-top').click(function () {
      jQuery('body,html').animate({
        scrollTop: 0
      }, 1200);
      return false;
    });
  });


  $('.counter__plus').on("click", function (event) {
    $(this).prev().val(+$(this).prev().val() + 1);
  });
  $('.counter__minus').on("click", function (event) {
    if ($(this).next().val() > 0) $(this).next().val(+$(this).next().val() - 1);
  });

  // document.addEventListener('DOMContentLoaded', function () {
  //     // Отримуємо посилання на кнопку "Реєстрація" в першому попапі
  //     var registrationButton = document.querySelector('#pop-up-sing-in');

  //     // Додаємо обробник подій для кнопки "Реєстрація"
  //     registrationButton.addEventListener('click', function () {
  //         // Закриваємо перший попап
  //         Fancybox.close();

  //         // Відкриваємо другий попап
  //         Fancybox.open({
  //             src: '#pop-up-reg',
  //             type: 'inline'
  //         });
  //     });
  // });



  // document.addEventListener('DOMContentLoaded', function () {
  //       // Отримуємо посилання на кнопку "Реєстрація" в першому попапі
  //       var registrationButton = document.querySelector('#pop-up-reg');

  //       // Додаємо обробник подій для кнопки "Реєстрація"
  //       registrationButton.addEventListener('click', function () {
  //           // Закриваємо перший попап
  //           Fancybox.close();

  //           // Відкриваємо другий попап
  //           Fancybox.open({
  //               src: '#pop-up-sing-in',
  //               type: 'inline'
  //           });
  //       });
  //   });



  //  Fancybox.defaults.closeExisting = true;

  // Fancybox.bind('[data-fancybox]', {
  //   on: {
  //     beforeShow: (fancybox, instance, current) => {
  //       // Закрити попереднє модальне вікно перед відкриттям нового
  //       if (fancybox && fancybox.getInstance()) {
  //         fancybox.getInstance().close();
  //       }
  //     },
  //     afterClose: (fancybox, instance, slide) => {
  //       // Забезпечте закриття поточного модального вікна після закриття
  //       // якщо ви бажаєте закривати модальне вікно після його закриття
  //       if (fancybox && fancybox.getInstance()) {
  //         fancybox.getInstance().close();
  //       }
  //     },
  //   },
  // });

  $('.btn-top').on("click", function (event) {
    $('.dark').removeClass('active');
    $('body').removeClass('noscroll');
  });


  // $('.header__catolog-btn').on("click", function (event) {
  //   $('.header__catolog-svg-1').toggleClass('active');
  //   $('.header__catolog-svg-2').toggleClass('active');
  //   $('.header__catalog-pop-up').toggleClass('active');
  //   $('body').toggleClass('noscroll');
  // });

  $(window).on("scroll load", function () {
    var scrollPos = $(window).scrollTop();
    if (scrollPos >= (250)) {
      $('.header__catalog-pop-up').removeClass('active');
      $('.header__catolog-svg-1').removeClass('active');
      $('.header__catolog-svg-2').removeClass('active');
    }
  });



  // const checkboxes = document.querySelectorAll('.card__product-img-box-filter input');
  // const images = document.querySelectorAll('.card__product-img');

  // checkboxes.forEach((checkbox) => {
  //   checkbox.addEventListener('change', (event) => {
  //     const index = event.target.getAttribute('data-index');

  //     // Переключення видимості відповідного зображення
  //     images.forEach((image) => {
  //       if (image.getAttribute('data-index') === index) {
  //         image.classList.toggle('active');
  //       } else {
  //         image.classList.remove('active');
  //       }
  //     });
  //   });
  // });


  // var images1 = document.querySelectorAll('.card__product-img-box a');
  // var inputLabels = document.querySelectorAll('.input-color');

  // // Додаємо обробник подій для кожного лейбла крім першого
  // for (var i = 1; i < inputLabels.length; i++) {
  //   inputLabels[i].addEventListener('click', function () {
  //     // Додаємо клас "active1" до першої картинки
  //     images1[0].classList.add('active1');
  //     // Видаляємо клас "active1" від усіх інших картинок
  //     for (var j = 1; j < images1.length; j++) {
  //       images1[j].classList.remove('active1');
  //     }
  //   });
  // }
  // var firstInputLabel = document.querySelector('.input-color:first-child');
  // var firstImage = document.querySelector('.card__product-img:first-child');

  // firstInputLabel.addEventListener('click', function () {
  //   firstImage.classList.remove('active1');
  // });

  const colorRadioButtons = document.querySelectorAll('input[type="radio"]');

  colorRadioButtons.forEach((radioButton) => {
    radioButton.addEventListener('change', function() {
      if (this.checked) {
        const imageSources = this.getAttribute('data-src');
        const card = this.closest('.card__product-box');
        const productImages = card.querySelectorAll('.card__img');
        const productColor = card.querySelector('.card__img-color');

        productImages.forEach((image, index) => {
          image.src = imageSources.split(',')[index];
        });

        const colorStyle = this.getAttribute('data-color');
        productColor.style = colorStyle;
      }
    });
  });

 


  $('.header__search-btn, .header__cart, .header-log').click(function () {
    $('.header__burg-btn').trigger('click');
    $('.dark').trigger('click');
  });

  

  // $('.product__page-box-img-pop-up').magnificPopup({
  //   delegate: 'a', // child items selector, by clicking on it popup will open
  //   type: 'image',
  //   removalDelay: 350,
  //   mainClass: 'mfp-fade',
  //   gallery: {
  //     enabled: true, // set to true to enable gallery

  //     navigateByImgClick: true,

  //     arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button

  //     tPrev: 'Previous (Left arrow key)', // title for left button
  //     tNext: 'Next (Right arrow key)', // title for right button
  //     tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
  //   }

  // });


  // $('.header__search-btn, .header-log, .size-popup, .pop-up-review, .constructor-pop-up').on("click", function (event) {
  //   $('body').addClass('noscroll');
  // });


  // $('.header__list-btn').on("click", function (event) {
  //   $(this).next('.header__catalog-pop-up-sub-left').slideToggle(300);
  //   $(this).children('.header__arrow').toggleClass('active');
  // });

  $('.header__list-btn').on("click", function (event) {
    var $catalogPopUpSubLeft = $(this).next('.header__catalog-pop-up-sub-left');
    var $headerArrow = $(this).children('.header__arrow');
  
    if ($catalogPopUpSubLeft.is(":visible")) {
      $catalogPopUpSubLeft.slideUp(500); // Slide up with a duration of 300 milliseconds
    } else {
      $catalogPopUpSubLeft.slideDown(500); // Slide down with a duration of 300 milliseconds
    }
  
    $headerArrow.toggleClass('active');
  });
  

  $('.card__product-dots').on("click", function (event) {
    $(this).next().find('.card__product-off').toggleClass('active');
  });


  $('.card__product-off').on("click", function (event) {
    $(this).parents('.card__product-box').css({
      'display': 'none',
    });
  });

  $('.header__cart').on("click", function (event) {
    $('.header__cart-wrap').addClass('active');
    $('.dark').addClass('active');
    $('body').addClass('noscroll');
    $('.header__catalog-menu').css({
      'pointer-events': 'none',
    });
  });
  $('.header__cart-wrap-btn-close').on("click", function (event) {
    $('.header__cart-wrap').removeClass('active');
    $('.dark').removeClass('active');
    $('body').removeClass('noscroll');
    $('.header__catalog-menu').css({
      'pointer-events': 'auto',
    });
  });


  $(document).ready(function () {

    $('.header__catalog').on("mouseenter", function () {

      $('.menu-nav').addClass('active');

      $('.dark').addClass('active');

      $('body').addClass('noscroll');

      $(this).children('.header__catalog>a').addClass("active");

    });
    $('.header__catalog').on("mouseleave", function () {

      $('.menu-nav').removeClass('active');

      $('.dark').removeClass('active');

      $('body').removeClass('noscroll');

      $(this).children('.header__catalog>a').removeClass("active");

    });
  });


  $('.tabs__box-list-title').on("click", function (event) {
    $(this).children('.tabs__box-list-svg').toggleClass('active');
    $(this).next('.tabs__list-show-hide').slideToggle(300);
  });

  $('.show__inner-btn-tab').on("click", function (event) {
    $(this).prev('.tabs__box-users').toggleClass('active');
  });



  $('.header__catalog-box-menu-btn, .header__catalog-menu-title').on("click", function (event) {
    $('.header__catalog-box-submenu').toggleClass('active');
  });
  $('.header__catalog-box-btn-sub').on("click", function (event) {
    $(this).parent().find('.header__catalog-menu-list-sub').toggleClass('active');
  });
  $('.header__catalog-box-menu-sub-title').on("click", function (event) {
    $(this).parent('.header__catalog-menu-list-sub').toggleClass('active');
  });


  $('.header__burg-btn').click(function (event) {
    $('.header__burger-menu').toggleClass('active');
    $('.dark').toggleClass('active');
    $('body').toggleClass('noscroll');
    $(this).toggleClass('active');
  });




  $(document).on("click", '.header__sub-menu-btn-close', function (event) {

    $(this).parent('.menu-nav-list-sub').removeClass('active');
  });


  $(document).on("click", '.mfp-close', function (event) {

    $('.dark, .dark-7').removeClass('active');

    $('body').removeClass('noscroll');

  });


  $(document).on("click", '.mfp-ready', function (event) {

    $('.dark, .dark-7').removeClass('active');

    $('body').removeClass('noscroll');

  });


  $('.filter-btn').click(function (event) {
    $(this).toggleClass('active');
    $(this).parents().find('.filter-box').slideToggle(300);
    $('.filter-btn span').toggleClass('active');
  })



  $('.dark').click(function (event) {
    $('.header__cart-wrap').removeClass('active');
    $('.header__burger-menu').removeClass('active');
    $('.header__burg-btn').removeClass('active');
    $(this).removeClass('active');
    $('body').removeClass('noscroll');
    $('.header__catalog-menu').css({
      'pointer-events': 'auto',
    });
  });



  $('.header__cart-wrap-close').on("click", function (event) {
    $('.header__cart-wrap').removeClass('active');
    $('body').removeClass('noscroll');
    $('.dark').removeClass('active');
  });


  $('.header__cart__btn-close').on("click", function (event) {
    $(this).parents('.header__cart-inner').css({
      display: 'none',
    });
  });


  // $(".menu-nav-box-tab-btn").on("click", function (t) {
  //   t.preventDefault();
  //   $(".menu-nav-box-tab-btn").removeClass("active"),
  //     $(this).addClass("active");
  //   $(".tabs__box").removeClass("active");
  //   $($(this).attr("href")).addClass("active");
  // });

  $('.footer__title-list').click(function (event) {
    $(this).next('.footer__items').slideToggle(300);
    $(this).children('.arrow__items-svg-bg').toggleClass('active');
  });

  $('.show__inner-btn').on("click", function (event) {
    $(this).parent().find('.tabs__list-show').toggleClass('active');
  });


  $('.nav-tabs a').click(function (e) {

    if (!$(this).hasClass('logout')) {
      e.preventDefault();
    }

    $(this).parents('.nav-tabs').find('li').removeClass('active');
    $(this).parent().addClass('active');


    let currentTab = $(this).attr('href');
    $(this).parents('.tabs-outer').find('.tab-content .tab-pane').removeClass('active').hide();

    $(currentTab).addClass('active').fadeIn(300);

    if ($('.tab-content').length) {
      $('.tab-content').removeClass('active');
      $(currentTab).prev().addClass('active');
    }

    return false;
  });

  $(".tabs__link").on("click", function (t) {
    t.preventDefault();
    $(".tabs__link").removeClass("active"),
      $(this).addClass("active");
    $(".tabs__box-1").removeClass("active");
    $($(this).attr("href")).addClass("active");
  });



  $(".tab__order-items").on("click", function (t) {
    $(this).find('.tab__order-item-svg').toggleClass('active');
    $(this).find('.nav-tabs-on-off').toggleClass("active");
    $(this).find('.tab__order-btn').toggleClass("active");
    $(this).next('.tab__order-list').slideToggle(300);
  });


  $('.category-off').on("click", function (event) {
    $(this).parents('.swiper-slide').css({
      'display': 'none',
    });
  });


  $('.next-info-btn-1').click(function () {
    $('html, body').animate({
      scrollTop: $('.lending-swiper').offset().top - $('.lending-top').outerHeight() // класс объекта к которому приезжаем
    }, 1000);
  });


  $('.next-info-btn-2').click(function () {
    $('html, body').animate({
      scrollTop: $('.lending-hover-box').offset().top - $('.lending-top').outerHeight() // класс объекта к которому приезжаем
    }, 1000);
  });


  var curDown = false,
    curYPos = 0,
    curXPos = 0;
  $(".breadcrumb").mousemove(function (m) {
    if (curDown === true) {
      $(".breadcrumb").scrollTop($(".breadcrumb").scrollTop() + (curYPos - m.pageY));
      $(".breadcrumb").scrollLeft($(".breadcrumb").scrollLeft() + (curXPos - m.pageX));
    }
  });

  $(".breadcrumb").mousedown(function (m) {
    curDown = true;
    curYPos = m.pageY;
    curXPos = m.pageX;
  });

  $(".breadcrumb").mouseup(function () {
    curDown = false;
  });

  var curDown = false,
    curYPos = 0,
    curXPos = 0;
  $(".tabs-inner").mousemove(function (m) {
    if (curDown === true) {
      $(".tabs-inner").scrollTop($(".tabs-inner").scrollTop() + (curYPos - m.pageY));
      $(".tabs-inner").scrollLeft($(".tabs-inner").scrollLeft() + (curXPos - m.pageX));
    }
  });

  $(".tabs-inner").mousedown(function (m) {
    curDown = true;
    curYPos = m.pageY;
    curXPos = m.pageX;
  });

  $(".tabs-inner").mouseup(function () {
    curDown = false;
  });


});