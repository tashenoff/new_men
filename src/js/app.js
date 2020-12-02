/**
 * Инициализация функции маски для поля телефона
 * Документация: https://imask.js.org/guide.html
 */
function initPhoneMask() {
  $('input[type=tel]').each(function(index, element) {
    var mask = IMask(element, {
      mask: [
        {
          mask: '+7 (000) 000-00-00',
          startsWith: '+7',
          country: 'Russia',
        },
        {
          mask: '+7 (000) 000-00-00',
          startsWith: '7',
          country: 'Russia',
        },
        {
          mask: '0 (000) 000-00-00',
          startsWith: '8',
          country: 'Russia',
        },
        {
          mask: '+7 (000) 000-00-00',
          startsWith: '',
          country: 'unknown',
        },
      ],
      dispatch: function(appended, dynamicMasked) {
        var number = (dynamicMasked.value + appended).replace(/\D/g, '');
        return dynamicMasked.compiledMasks.find(function(m) {
          return number.indexOf(m.startsWith) === 0;
        });
      },
    });
    $(this).blur(function() {
      var maskValue = mask.unmaskedValue;
      var startWith = 10;
      if (maskValue.charAt(0) === '8') {
        startWith = 11;
      }
      if (maskValue.length < startWith) {
        mask.value = '';
      }
    });
  });
}

$(function() {
  objectFitImages();
  initPhoneMask();
});

$('.hamburger').on('click', function() {
  $('.header__links').slideToggle('medium', function() {
    if ($(this).is(':visible')) {
      $(this).css('display', 'block');
      $('body').css('overflow-y', 'hidden');
    } else {
      $('body').css('overflow-y', 'scroll');
    }
  });
});

$('.hamburger').click(function(e) {
  e.preventDefault();
  $(this).toggleClass('is-active');
});

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  navText: ["<i class='arrow_left'></i>", "<i class='arrow_right'></i>"],

  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 1,
      nav: true,
    },
    1000: {
      items: 1,
    },
  },
});

function isInView(el) {
  var rect = el.getBoundingClientRect(); // absolute position of video element
  return !(rect.top > $(window).height() || rect.bottom < 0); // visible?
}

$(document).on('scroll', function() {
  $('video').each(function() {
    if (isInView($(this)[0])) {
      // visible?
      if ($(this)[0].paused) $(this)[0].play(); // play if not playing
    } else {
      if (!$(this)[0].paused) $(this)[0].pause(); // pause if not paused
    }
  });
});

var selector = $('.owl-carousel');

$('.my-next-button').click(function() {
  selector.trigger('next.owl.carousel');
});

$('.my-prev-button').click(function() {
  selector.trigger('prev.owl.carousel');
});

$('.down').on('click', function(e) {
  e.preventDefault();
  var target = $(this).attr('href');
  $('html, body').animate(
    {
      scrollTop: $(target).offset().top,
    },
    1500,
  );
});

$('.arrow-down').on('click', function(e) {
  e.preventDefault();
  var target = $(this).attr('href');
  $('html, body').animate(
    {
      scrollTop: $(target).offset().top,
    },
    1500,
  );
});
